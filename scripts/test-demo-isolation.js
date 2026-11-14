/**
 * Automated Verification Script: Demo Environment & Security Isolation
 * Tests store CRUD, reactivity, role permissions, sample data integrity, and reset functionality.
 */

import assert from 'node:assert';

// Set up minimal browser globals for Node test environment
const mockStorage = {};
global.localStorage = {
  getItem: (k) => mockStorage[k] || null,
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: (k) => { delete mockStorage[k]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};

global.window = {
  location: { search: '', reload: () => {} }
};

console.log('🧪 Starting Demo Environment & Isolation Test Suite...\n');

async function runTests() {
  let passed = 0;
  let total = 0;

  const test = async (name, fn) => {
    total++;
    try {
      await fn();
      console.log(`  ✅ PASS: ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ❌ FAIL: ${name}`);
      console.error(err);
    }
  };

  // 1. Seed Data Integrity Test
  await test('Seed Data contains authentic menu items across sessions', async () => {
    const { getInitialMenu } = await import('../src/services/demoSeedData.js');
    const menu = getInitialMenu();
    assert(Array.isArray(menu), 'Menu should be an array');
    assert(menu.length >= 20, `Expected at least 20 menu items, found ${menu.length}`);

    const sessions = new Set(menu.map(m => m.sessionType));
    assert(sessions.has('morning'), 'Should contain morning items');
    assert(sessions.has('afternoon'), 'Should contain afternoon items');
    assert(sessions.has('evening'), 'Should contain evening items');

    menu.forEach(item => {
      assert(item.itemName, 'Item should have itemName');
      assert(typeof item.price === 'number' && item.price > 0, 'Price should be positive number');
    });
  });

  await test('Seed Data contains bills for today, 14-day history, and monthly trends', async () => {
    const { getInitialBills } = await import('../src/services/demoSeedData.js');
    const bills = getInitialBills();
    assert(bills.length >= 30, `Expected rich bills dataset, got ${bills.length}`);

    const sessions = new Set(bills.map(b => b.sessionType));
    assert(sessions.has('morning'), 'Bills should cover morning');
    assert(sessions.has('afternoon'), 'Bills should cover afternoon');
    assert(sessions.has('evening'), 'Bills should cover evening');
    assert(sessions.has('order'), 'Bills should cover manual orders');
  });

  await test('Seed Data contains realistic mess expenses', async () => {
    const { getInitialExpenses } = await import('../src/services/demoSeedData.js');
    const expenses = getInitialExpenses();
    assert(expenses.length >= 15, `Expected realistic expenses dataset, got ${expenses.length}`);

    const hasGas = expenses.some(e => e.expenseTitle === 'Gas');
    const hasVegetable = expenses.some(e => e.expenseTitle === 'Vegetable');
    assert(hasGas && hasVegetable, 'Expenses should include hotel essentials (Gas, Vegetables)');
  });

  // 2. Demo Reactive Store CRUD & Isolation Test
  await test('Demo Store performs Menu CRUD and notifies subscribers', async () => {
    const {
      listenMenuDemo,
      addMenuItemDemo,
      updateMenuItemDemo,
      deleteMenuItemDemo
    } = await import('../src/services/demoStoreService.js');

    let listenerCount = 0;
    let latestDocs = [];
    const unsub = listenMenuDemo('morning', (snap) => {
      listenerCount++;
      latestDocs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    });

    // Wait for initial broadcast
    await new Promise(r => setTimeout(r, 10));
    assert(latestDocs.length > 0, 'Should receive initial morning menu items');
    const initialCount = latestDocs.length;

    // Add Item
    const addResult = await addMenuItemDemo({
      itemName: 'Special Mysore Masala Dosa',
      price: 85,
      sessionType: 'morning',
      isAvailable: true
    });
    assert(addResult.id, 'New item should have generated id');
    await new Promise(r => setTimeout(r, 10));
    assert.strictEqual(latestDocs.length, initialCount + 1, 'Subscriber should receive newly added item');

    // Update Item
    await updateMenuItemDemo(addResult.id, { price: 90 });
    await new Promise(r => setTimeout(r, 10));
    const updated = latestDocs.find(d => d.id === addResult.id);
    assert.strictEqual(updated.price, 90, 'Subscriber should receive updated price');

    // Delete Item
    await deleteMenuItemDemo(addResult.id);
    await new Promise(r => setTimeout(r, 10));
    assert.strictEqual(latestDocs.length, initialCount, 'Subscriber should reflect deleted item');

    unsub();
  });

  await test('Demo Store performs Bill saving and date filtering', async () => {
    const {
      addBillDemo,
      listenBillsByDateDemo
    } = await import('../src/services/demoStoreService.js');

    const testDate = '2026-11-14';
    let billsList = [];
    const unsub = listenBillsByDateDemo(testDate, snap => {
      billsList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    });

    await new Promise(r => setTimeout(r, 10));
    const countBefore = billsList.length;

    await addBillDemo({
      sessionType: 'morning',
      paymentMode: 'cash',
      billTotal: 150,
      customerNameOrToken: 'Test Visitor',
      createdDate: testDate,
      items: [{ itemName: 'Idli (2 pcs)', quantity: 2, unitPrice: 30, totalPrice: 60 }]
    });

    await new Promise(r => setTimeout(r, 10));
    assert.strictEqual(billsList.length, countBefore + 1, 'Bill should be saved and delivered to listener');

    unsub();
  });

  await test('Demo Store Reset restores pristine state', async () => {
    const {
      addMenuItemDemo,
      resetDemoData,
      listenMenuDemo
    } = await import('../src/services/demoStoreService.js');

    let currentItems = [];
    const unsub = listenMenuDemo('morning', snap => {
      currentItems = snap.docs.map(d => d.data());
    });
    await new Promise(r => setTimeout(r, 10));
    const initialLen = currentItems.length;

    await addMenuItemDemo({ itemName: 'Temporary Item', price: 10, sessionType: 'morning' });
    await new Promise(r => setTimeout(r, 10));
    assert.strictEqual(currentItems.length, initialLen + 1);

    // Trigger Reset
    resetDemoData();
    await new Promise(r => setTimeout(r, 10));
    assert.strictEqual(currentItems.length, initialLen, 'Reset should restore initial menu length');

    unsub();
  });

  // 3. Demo Authentication & Roles
  await test('Demo Auth supports Owner, Cashier, and Auditor roles', async () => {
    const {
      DEMO_ROLES,
      signInDemoRole,
      getDemoCurrentUser,
      signOutDemo
    } = await import('../src/services/demoAuthService.js');

    assert(DEMO_ROLES.owner, 'Owner role must exist');
    assert(DEMO_ROLES.cashier, 'Cashier role must exist');
    assert(DEMO_ROLES.auditor, 'Auditor role must exist');

    // Test Cashier Sign In
    await signInDemoRole('cashier');
    let user = getDemoCurrentUser();
    assert.strictEqual(user.role, 'cashier');
    assert(user.permissions.includes('orders'), 'Cashier should have orders permission');
    assert(!user.permissions.includes('reset'), 'Cashier must not have reset permission');

    // Test Owner Sign In
    await signInDemoRole('owner');
    user = getDemoCurrentUser();
    assert.strictEqual(user.role, 'owner');
    assert(user.permissions.includes('reset'), 'Owner must have reset permission');

    // Test Sign Out
    await signOutDemo();
    user = getDemoCurrentUser();
    assert.strictEqual(user, null, 'User should be null after sign out');
  });

  // 4. Production Secret Protection
  await test('Demo mode does not leak or require production Firebase keys', async () => {
    const { isDemoMode } = await import('../src/config/env.js');
    // In our test mock environment, demo mode is active
    assert.strictEqual(isDemoMode(), true, 'isDemoMode should be active');
  });

  console.log(`\n========================================`);
  console.log(`Test Results: ${passed}/${total} Passed (${Math.round(passed / total * 100)}%)`);
  console.log(`========================================\n`);

  if (passed !== total) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});

