/**
 * Authentic Realistic Seed Data for Sri Raghavendra Mess (Hotel Billing System)
 * Generates dynamic dates relative to today so the demo is perpetually fresh and relevant.
 */

import { todayKey } from '../utils/dateTimeUtils.js';

// Helper to calculate ISO date strings relative to today (e.g. offset = -1 for yesterday)
export const getDateOffset = (offsetDays) => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Helper to calculate Year-Month strings relative to today
export const getMonthOffsetDate = (offsetMonths, day = '15') => {
  const d = new Date();
  d.setMonth(d.getMonth() + offsetMonths);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}-${String(day).padStart(2, '0')}`;
};

export const getInitialMenu = () => [
  // --- Morning Session ---
  { id: 'm1', itemName: 'Idli (2 pcs)', price: 30, sessionType: 'morning', isAvailable: true },
  { id: 'm2', itemName: 'Medu Vada (1 pc)', price: 20, sessionType: 'morning', isAvailable: true },
  { id: 'm3', itemName: 'Special Ghee Pongal', price: 55, sessionType: 'morning', isAvailable: true },
  { id: 'm4', itemName: 'Poori Masala (2 pcs)', price: 50, sessionType: 'morning', isAvailable: true },
  { id: 'm5', itemName: 'Crispy Plain Dosa', price: 45, sessionType: 'morning', isAvailable: true },
  { id: 'm6', itemName: 'Ghee Roast Dosa', price: 70, sessionType: 'morning', isAvailable: true },
  { id: 'm7', itemName: 'Onion Podi Uttapam', price: 65, sessionType: 'morning', isAvailable: true },
  { id: 'm8', itemName: 'Traditional Filter Coffee', price: 20, sessionType: 'morning', isAvailable: true },
  { id: 'm9', itemName: 'Cardamom Tea', price: 15, sessionType: 'morning', isAvailable: true },

  // --- Afternoon Session ---
  { id: 'a1', itemName: 'South Indian Special Meals', price: 110, sessionType: 'afternoon', isAvailable: true },
  { id: 'a2', itemName: 'Quick Mini Meals', price: 80, sessionType: 'afternoon', isAvailable: true },
  { id: 'a3', itemName: 'Authentic Sambar Rice', price: 60, sessionType: 'afternoon', isAvailable: true },
  { id: 'a4', itemName: 'Tangy Curd Rice', price: 50, sessionType: 'afternoon', isAvailable: true },
  { id: 'a5', itemName: 'Lemon Rice with Papad', price: 55, sessionType: 'afternoon', isAvailable: true },
  { id: 'a6', itemName: 'Special Chapati Kurma (2 pcs)', price: 50, sessionType: 'afternoon', isAvailable: true },
  { id: 'a7', itemName: 'Cool Butter Milk', price: 15, sessionType: 'afternoon', isAvailable: true },
  { id: 'a8', itemName: 'Crispy Appalam / Papad', price: 10, sessionType: 'afternoon', isAvailable: true },

  // --- Evening Session ---
  { id: 'e1', itemName: 'Fluffy Parotta with Salna (2 pcs)', price: 50, sessionType: 'evening', isAvailable: true },
  { id: 'e2', itemName: 'Madurai Bun Parotta', price: 35, sessionType: 'evening', isAvailable: true },
  { id: 'e3', itemName: 'Kal Dosa with Chutney (2 pcs)', price: 40, sessionType: 'evening', isAvailable: true },
  { id: 'e4', itemName: 'Ghee Podi Dosa', price: 75, sessionType: 'evening', isAvailable: true },
  { id: 'e5', itemName: 'Masala Dosa', price: 60, sessionType: 'evening', isAvailable: true },
  { id: 'e6', itemName: 'Idiyappam with Coconut Milk (3 pcs)', price: 50, sessionType: 'evening', isAvailable: true },
  { id: 'e7', itemName: 'Hot Filter Coffee', price: 20, sessionType: 'evening', isAvailable: true },
  { id: 'e8', itemName: 'Hot Badam Milk', price: 25, sessionType: 'evening', isAvailable: true }
];

export const getInitialBills = () => {
  const today = todayKey();
  const bills = [];

  const createTimestamp = (dateStr, timeStr) => {
    const d = new Date(`${dateStr} ${timeStr}`);
    return {
      toDate: () => d,
      seconds: Math.floor(d.getTime() / 1000)
    };
  };

  // 1. TODAY'S BILLS
  const todayBills = [
    {
      id: 'tb-01',
      sessionType: 'morning',
      paymentMode: 'upi',
      billTotal: 175,
      customerNameOrToken: 'Token #101',
      items: [
        { itemName: 'Ghee Roast Dosa', quantity: 1, unitPrice: 70, totalPrice: 70 },
        { itemName: 'Special Ghee Pongal', quantity: 1, unitPrice: 55, totalPrice: 55 },
        { itemName: 'Medu Vada (1 pc)', quantity: 1, unitPrice: 20, totalPrice: 20 },
        { itemName: 'Traditional Filter Coffee', quantity: 1, unitPrice: 20, totalPrice: 20 },
        { itemName: 'Cardamom Tea', quantity: 1, unitPrice: 15, totalPrice: 15 }
      ],
      createdDate: today,
      createdTime: '07:45:10 AM',
      createdAt: createTimestamp(today, '07:45:10')
    },
    {
      id: 'tb-02',
      sessionType: 'morning',
      paymentMode: 'cash',
      billTotal: 120,
      customerNameOrToken: 'Token #102',
      items: [
        { itemName: 'Idli (2 pcs)', quantity: 2, unitPrice: 30, totalPrice: 60 },
        { itemName: 'Medu Vada (1 pc)', quantity: 2, unitPrice: 20, totalPrice: 40 },
        { itemName: 'Traditional Filter Coffee', quantity: 1, unitPrice: 20, totalPrice: 20 }
      ],
      createdDate: today,
      createdTime: '08:15:22 AM',
      createdAt: createTimestamp(today, '08:15:22')
    },
    {
      id: 'tb-03',
      sessionType: 'morning',
      paymentMode: 'upi',
      billTotal: 250,
      customerNameOrToken: 'Ramesh Family',
      items: [
        { itemName: 'Poori Masala (2 pcs)', quantity: 2, unitPrice: 50, totalPrice: 100 },
        { itemName: 'Onion Podi Uttapam', quantity: 1, unitPrice: 65, totalPrice: 65 },
        { itemName: 'Ghee Roast Dosa', quantity: 1, unitPrice: 70, totalPrice: 70 },
        { itemName: 'Cardamom Tea', quantity: 1, unitPrice: 15, totalPrice: 15 }
      ],
      createdDate: today,
      createdTime: '09:05:40 AM',
      createdAt: createTimestamp(today, '09:05:40')
    },
    {
      id: 'tb-04',
      sessionType: 'morning',
      paymentMode: 'cash',
      billTotal: 90,
      customerNameOrToken: 'Token #104',
      items: [
        { itemName: 'Idli (2 pcs)', quantity: 1, unitPrice: 30, totalPrice: 30 },
        { itemName: 'Poori Masala (2 pcs)', quantity: 1, unitPrice: 50, totalPrice: 50 },
        { itemName: 'Cardamom Tea', quantity: 1, unitPrice: 10, totalPrice: 10 }
      ],
      createdDate: today,
      createdTime: '09:50:11 AM',
      createdAt: createTimestamp(today, '09:50:11')
    },
    {
      id: 'tb-05',
      sessionType: 'afternoon',
      paymentMode: 'upi',
      billTotal: 340,
      customerNameOrToken: 'Token #201',
      items: [
        { itemName: 'South Indian Special Meals', quantity: 2, unitPrice: 110, totalPrice: 220 },
        { itemName: 'Quick Mini Meals', quantity: 1, unitPrice: 80, totalPrice: 80 },
        { itemName: 'Cool Butter Milk', quantity: 2, unitPrice: 15, totalPrice: 30 },
        { itemName: 'Crispy Appalam / Papad', quantity: 1, unitPrice: 10, totalPrice: 10 }
      ],
      createdDate: today,
      createdTime: '12:35:15 PM',
      createdAt: createTimestamp(today, '12:35:15')
    },
    {
      id: 'tb-06',
      sessionType: 'afternoon',
      paymentMode: 'cash',
      billTotal: 220,
      customerNameOrToken: 'Token #202',
      items: [
        { itemName: 'South Indian Special Meals', quantity: 2, unitPrice: 110, totalPrice: 220 }
      ],
      createdDate: today,
      createdTime: '01:10:45 PM',
      createdAt: createTimestamp(today, '01:10:45')
    },
    {
      id: 'tb-07',
      sessionType: 'afternoon',
      paymentMode: 'upi',
      billTotal: 165,
      customerNameOrToken: 'Dr. Suresh',
      items: [
        { itemName: 'Authentic Sambar Rice', quantity: 1, unitPrice: 60, totalPrice: 60 },
        { itemName: 'Tangy Curd Rice', quantity: 1, unitPrice: 50, totalPrice: 50 },
        { itemName: 'Special Chapati Kurma (2 pcs)', quantity: 1, unitPrice: 50, totalPrice: 50 },
        { itemName: 'Crispy Appalam / Papad', quantity: 1, unitPrice: 5, totalPrice: 5 }
      ],
      createdDate: today,
      createdTime: '01:45:00 PM',
      createdAt: createTimestamp(today, '01:45:00')
    },
    {
      id: 'tb-08',
      sessionType: 'evening',
      paymentMode: 'upi',
      billTotal: 235,
      customerNameOrToken: 'Token #301',
      items: [
        { itemName: 'Fluffy Parotta with Salna (2 pcs)', quantity: 2, unitPrice: 50, totalPrice: 100 },
        { itemName: 'Ghee Podi Dosa', quantity: 1, unitPrice: 75, totalPrice: 75 },
        { itemName: 'Masala Dosa', quantity: 1, unitPrice: 60, totalPrice: 60 }
      ],
      createdDate: today,
      createdTime: '06:15:30 PM',
      createdAt: createTimestamp(today, '06:15:30')
    },
    {
      id: 'tb-09',
      sessionType: 'evening',
      paymentMode: 'cash',
      billTotal: 170,
      customerNameOrToken: 'Token #302',
      items: [
        { itemName: 'Madurai Bun Parotta', quantity: 2, unitPrice: 35, totalPrice: 70 },
        { itemName: 'Kal Dosa with Chutney (2 pcs)', quantity: 1, unitPrice: 40, totalPrice: 40 },
        { itemName: 'Hot Badam Milk', quantity: 2, unitPrice: 25, totalPrice: 50 },
        { itemName: 'Hot Filter Coffee', quantity: 1, unitPrice: 10, totalPrice: 10 }
      ],
      createdDate: today,
      createdTime: '07:20:12 PM',
      createdAt: createTimestamp(today, '07:20:12')
    },
    {
      id: 'tb-10',
      sessionType: 'order',
      paymentMode: 'upi',
      billTotal: 450,
      customerNameOrToken: 'Office Catering Batch A',
      items: [
        { itemName: 'Catering Breakfast Box (Idli/Vada/Pongal)', quantity: 5, unitPrice: 90, totalPrice: 450 }
      ],
      createdDate: today,
      createdTime: '10:15:00 AM',
      createdAt: createTimestamp(today, '10:15:00')
    }
  ];

  bills.push(...todayBills);

  // 2. DAILY BILLS FOR THE PAST 14 DAYS
  const pastDaysConfig = [
    { offset: -1, sales: 14250 },
    { offset: -2, sales: 16800 },
    { offset: -3, sales: 13900 },
    { offset: -4, sales: 15400 },
    { offset: -5, sales: 18200 },
    { offset: -6, sales: 19100 },
    { offset: -7, sales: 14600 },
    { offset: -8, sales: 13750 },
    { offset: -9, sales: 14900 },
    { offset: -10, sales: 15800 },
    { offset: -11, sales: 16200 },
    { offset: -12, sales: 17950 },
    { offset: -13, sales: 18800 },
    { offset: -14, sales: 14100 }
  ];

  pastDaysConfig.forEach((cfg, idx) => {
    const dStr = getDateOffset(cfg.offset);

    bills.push({
      id: `hb-${idx}-m`,
      sessionType: 'morning',
      paymentMode: 'cash',
      billTotal: Math.round(cfg.sales * 0.35),
      customerNameOrToken: 'Morning Walkers Group',
      items: [
        { itemName: 'Idli (2 pcs)', quantity: 20, unitPrice: 30, totalPrice: 600 },
        { itemName: 'Special Ghee Pongal', quantity: 15, unitPrice: 55, totalPrice: 825 },
        { itemName: 'Poori Masala (2 pcs)', quantity: 18, unitPrice: 50, totalPrice: 900 },
        { itemName: 'Traditional Filter Coffee', quantity: 30, unitPrice: 20, totalPrice: 600 }
      ],
      createdDate: dStr,
      createdTime: '08:30:00 AM',
      createdAt: createTimestamp(dStr, '08:30:00')
    });

    bills.push({
      id: `hb-${idx}-a`,
      sessionType: 'afternoon',
      paymentMode: 'upi',
      billTotal: Math.round(cfg.sales * 0.40),
      customerNameOrToken: 'Lunch Rush Counter',
      items: [
        { itemName: 'South Indian Special Meals', quantity: 35, unitPrice: 110, totalPrice: 3850 },
        { itemName: 'Quick Mini Meals', quantity: 15, unitPrice: 80, totalPrice: 1200 },
        { itemName: 'Authentic Sambar Rice', quantity: 12, unitPrice: 60, totalPrice: 720 },
        { itemName: 'Cool Butter Milk', quantity: 20, unitPrice: 15, totalPrice: 300 }
      ],
      createdDate: dStr,
      createdTime: '01:15:00 PM',
      createdAt: createTimestamp(dStr, '01:15:00')
    });

    bills.push({
      id: `hb-${idx}-e`,
      sessionType: 'evening',
      paymentMode: 'upi',
      billTotal: Math.round(cfg.sales * 0.25),
      customerNameOrToken: 'Evening Tiffin Crowd',
      items: [
        { itemName: 'Fluffy Parotta with Salna (2 pcs)', quantity: 25, unitPrice: 50, totalPrice: 1250 },
        { itemName: 'Ghee Podi Dosa', quantity: 18, unitPrice: 75, totalPrice: 1350 },
        { itemName: 'Madurai Bun Parotta', quantity: 15, unitPrice: 35, totalPrice: 525 },
        { itemName: 'Hot Badam Milk', quantity: 20, unitPrice: 25, totalPrice: 500 }
      ],
      createdDate: dStr,
      createdTime: '07:45:00 PM',
      createdAt: createTimestamp(dStr, '07:45:00')
    });
  });

  // 3. MONTHLY AGGREGATIONS FOR THE PAST 5 MONTHS (For monthly analysis chart)
  const pastMonthsConfig = [
    { offset: -1, sales: 425000 },
    { offset: -2, sales: 398000 },
    { offset: -3, sales: 442000 },
    { offset: -4, sales: 385000 },
    { offset: -5, sales: 410000 }
  ];

  pastMonthsConfig.forEach((cfg, idx) => {
    const dStr = getMonthOffsetDate(cfg.offset, 15);
    bills.push({
      id: `mb-${idx}`,
      sessionType: 'order',
      paymentMode: 'upi',
      billTotal: cfg.sales,
      customerNameOrToken: 'Consolidated Monthly Operations',
      items: [
        { itemName: 'Monthly Operations Tiffin & Meals', quantity: 1, unitPrice: cfg.sales, totalPrice: cfg.sales }
      ],
      createdDate: dStr,
      createdTime: '12:00:00 PM',
      createdAt: createTimestamp(dStr, '12:00:00')
    });
  });

  return bills;
};

export const getInitialExpenses = () => {
  const today = todayKey();
  const expenses = [];

  const createTimestamp = (dateStr, timeStr = '10:00:00') => {
    const d = new Date(`${dateStr} ${timeStr}`);
    return {
      toDate: () => d,
      seconds: Math.floor(d.getTime() / 1000)
    };
  };

  // 1. TODAY'S EXPENSES
  const todayExpenses = [
    {
      id: 'te-01',
      expenseTitle: 'Gas',
      amount: 1850,
      note: 'Commercial LPG Cylinder (19kg Bharat Gas)',
      expenseDate: today,
      createdAt: createTimestamp(today, '07:10:00')
    },
    {
      id: 'te-02',
      expenseTitle: 'Vegetable',
      amount: 1420,
      note: 'Country tomatoes, drumsticks, onions & coriander from market',
      expenseDate: today,
      createdAt: createTimestamp(today, '07:30:00')
    },
    {
      id: 'te-03',
      expenseTitle: 'Milk',
      amount: 660,
      note: 'Aavin Green Milk (15 Liters) for Coffee & Tea',
      expenseDate: today,
      createdAt: createTimestamp(today, '08:00:00')
    },
    {
      id: 'te-04',
      expenseTitle: 'Rice',
      amount: 1350,
      note: 'Ponni Boiled Rice (25kg Bag)',
      expenseDate: today,
      createdAt: createTimestamp(today, '11:00:00')
    },
    {
      id: 'te-05',
      expenseTitle: 'Tabers Salary',
      amount: 1200,
      note: 'Daily wages for 2 kitchen helpers & 1 cleaner',
      expenseDate: today,
      createdAt: createTimestamp(today, '08:30:00')
    }
  ];

  expenses.push(...todayExpenses);

  // 2. DAILY EXPENSES FOR THE PAST 14 DAYS
  const pastExpensesConfig = [
    { offset: -1, exp: 6200, note: 'Vegetables, Milk, Oil Can, Wages' },
    { offset: -2, exp: 7100, note: 'LPG Refill, Provisions, Wages' },
    { offset: -3, exp: 5900, note: 'Daily Vegetables, Dairy, Wages' },
    { offset: -4, exp: 6400, note: 'Provisions, Spices, Dairy, Wages' },
    { offset: -5, exp: 7800, note: 'Rice Bag, Cooking Oil, Gas, Wages' },
    { offset: -6, exp: 8200, note: 'Weekend Bulk Provisions, Extra Staff Wages' },
    { offset: -7, exp: 6100, note: 'Vegetables, Dairy, Banana Leaves' },
    { offset: -8, exp: 5800, note: 'Milk, Veg, Cleaning supplies' },
    { offset: -9, exp: 6300, note: 'Flour, Dal, Veg, Milk, Wages' },
    { offset: -10, exp: 6600, note: 'Commercial Gas cylinder, Veg, Wages' },
    { offset: -11, exp: 6700, note: 'Provisions, Dairy, Wages' },
    { offset: -12, exp: 7400, note: 'Weekend Prep, Rice & Dal bags, Milk' },
    { offset: -13, exp: 7900, note: 'Vegetables wholesale, Gas cylinder, Wages' },
    { offset: -14, exp: 5950, note: 'Regular daily mess supplies & wages' }
  ];

  pastExpensesConfig.forEach((cfg, idx) => {
    const dStr = getDateOffset(cfg.offset);
    expenses.push({
      id: `he-${idx}`,
      expenseTitle: 'Super Market',
      amount: cfg.exp,
      note: cfg.note,
      expenseDate: dStr,
      createdAt: createTimestamp(dStr, '10:00:00')
    });
  });

  // 3. MONTHLY EXPENSES FOR PAST 5 MONTHS
  const pastMonthsExpensesConfig = [
    { offset: -1, exp: 178000, note: 'Monthly groceries, gas refills, salaries & rent' },
    { offset: -2, exp: 165000, note: 'Monthly groceries, gas refills, salaries & rent' },
    { offset: -3, exp: 184000, note: 'Festival provisions, staff bonus, gas & rent' },
    { offset: -4, exp: 162000, note: 'Monthly groceries, dairy, salaries & rent' },
    { offset: -5, exp: 170000, note: 'Monthly supplies, equipment maintenance & rent' }
  ];

  pastMonthsExpensesConfig.forEach((cfg, idx) => {
    const dStr = getMonthOffsetDate(cfg.offset, 28);
    expenses.push({
      id: `me-${idx}`,
      expenseTitle: 'Monthly Operations',
      amount: cfg.exp,
      note: cfg.note,
      expenseDate: dStr,
      createdAt: createTimestamp(dStr, '12:00:00')
    });
  });

  return expenses;
};
