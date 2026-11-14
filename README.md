# Sri Raghavendra Mess - Hotel Billing & Management System

> A modern, responsive, high-performance Restaurant & Hotel POS Billing System built with **React 18**, **Vite**, **Tailwind CSS**, and **Cloud Firestore**. 
> This repository contains both the **Production Application** and a completely isolated, recruiter-ready **Public Demo Environment**.

---

## 🌟 Live Environments

| Environment | Purpose | Access Link | Authentication |
| :--- | :--- | :--- | :--- |
| **🚀 Public Interactive Demo** | Public recruiter evaluation, portfolio showcase, feature testing | [Launch Public Demo](https://aravindh2727.github.io/Hotel-Billing-System-Demo/) | **1-Click Instant Access** (Owner, Cashier, Auditor) |
| **🔒 Production Application** | Active daily mess operations, real customers, real financial ledgers | Live Production URL | Restricted to Verified Owner (`sriraghavendramess28@gmail.com`) |

---

## 📸 Key Features & Capabilities

### 1. 🍽️ Point of Sale (POS) Billing Table
- **Session-Based Menu**: Instant switching between **Morning**, **Afternoon**, and **Evening** traditional South Indian mess menus.
- **Fast-Touch Quantity Selector**: Horizontal quick-scroll pill buttons (1–20) for lightning-fast billing during rush hours.
- **Payment Method Settlement**: Supports both **Cash** and **UPI** settlement.
- **Customer & Token Tracking**: Record optional token numbers, table identifiers, or customer names.
- **Grand Total Calculation**: Instant client-side computation with dynamic currency formatting (₹ INR).

### 2. 📝 Real-Time Menu Management
- **Full Menu CRUD**: Add, edit, or delete items with real-time price updates.
- **Instant Availability Toggle**: Mark items as available or out-of-stock instantly without deleting them.
- **Automated Price Change Alerts**:
  - *Production*: Generates a formatted WhatsApp notification payload dispatched to the mess owner.
  - *Demo Mode*: **Simulated Notification Modal** displaying full payload without contacting external phone numbers.

### 3. 📋 Dedicated Orders Management
- **Manual Quick Orders**: Record custom bulk orders, outdoor catering packages, or offline orders.
- **Order History & Filtering**: Filter manual orders by exact date or calendar month.

### 4. 📊 Financial Auditing, Profit & Loss Breakdown
- **Real-Time Profit Dashboard**: Daily consolidated income across Morning, Afternoon, Evening sessions minus operating expenses.
- **Daily Expense Tracker**: Categorized expenses (Gas cylinders, Vegetables, Dairy/Milk, Provisions, Staff wages) with search auto-complete.
- **Historical Sales & Profit Ledger**: Complete day-by-day financial history with drill-down views.
- **Printable Receipts & PDF Export**: Clean, printable HTML receipt and PDF generator for daily accounting.
- **Multi-Format CSV Reporting**: Export combined bills and expenses, daily summaries, or order logs using PapaParse.
- **Dual-Axis Trend Analytics**: Interactive visual SVG chart rendering Daily & Monthly trends for Income (Green), Expenses (Red), and Net Profit (Blue).

---

## 🛡️ Demo Architecture & Security Isolation

The demo environment was designed according to strict enterprise isolation and zero-trust principles:

```
┌────────────────────────────────────────────────────────┐
│                   Application Shell                    │
│            (React 18 + Vite + Tailwind CSS)            │
└───────────────────────────┬────────────────────────────┘
                            │
               Runtime Mode Evaluator
         (VITE_APP_MODE / ?mode=demo / local)
             /                             \
    [Production Mode]                [Public Demo Mode]
            │                                │
    Live Firebase Auth              Isolated Demo Auth Provider
(sriraghavendramess28@gmail.com)     (1-Click Owner, Cashier, Auditor)
            │                                │
  Cloud Firestore Engine             Reactive Demo Store Service
  (Production Collections:           (Local Storage + Pub/Sub Listeners,
   bills, expenses, menu)            Pre-seeded Authentic Mess Data)
            │                                │
 Live WhatsApp Webhook              Simulated Notification Dialog
 (Real Owner Mobile Alert)           (Safe, zero external outbound calls)
```

### Isolation Guarantees:
1. **Zero Database Overlap**: Demo visitors interact exclusively with the browser-sandboxed `demoStoreService`. No reads or writes are ever directed to the production Firestore database (`sri-raghavendra-mess-billing`).
2. **Zero Credential Exposure**: Production Firebase API keys and secrets are omitted in demo builds.
3. **No External Outbound Triggers**: WhatsApp notifications, SMS, or payment triggers are mocked via modal previews.
4. **Local Persistence**: Visitor additions, billings, and menu edits persist in their own browser session across page refreshes.
5. **Instant Data Reset**: A prominent `🔄 Reset Demo Data` action restores the sample dataset to its pristine state in 1 click.

---

## 👥 Demo User Personas

| Persona | Credentials | Included Permissions | Ideal For Testing |
| :--- | :--- | :--- | :--- |
| **👑 Mess Owner / Admin** | `owner@raghavendramess.demo`<br/>`demopassword` | Full administrative control: Menu, POS Billing, Orders, Expense CRUD, Profit & Loss, Auditing, CSV/PDF Export, and Data Reset | Complete feature tour |
| **⚡ Front Counter Cashier** | `cashier@raghavendramess.demo`<br/>`demopassword` | POS Billing, Order Taking, Cash/UPI payment settlement | Fast-paced counter billing workflow |
| **📊 Accounts Auditor** | `auditor@raghavendramess.demo`<br/>`demopassword` | Accounts & Analytics view, daily breakdown, dual-axis charts, receipt print & CSV reports (Menu modification restricted) | Accounting & financial review |

*(All roles can also be accessed via the **1-Click Quick Access** buttons on the login screen or switched dynamically via the top banner).*

---

## 📦 Project Setup & Local Development

### Prerequisites
- **Node.js** v18+ (tested on Node v20 & v24)
- **npm** or **pnpm**

### Installation
```bash
# Clone the repository
git clone https://github.com/Aravindh2727/Hotel-Billing-System-Demo.git
cd billing-system1

# Install dependencies
npm install
```

### Environment Configuration
Copy `.env.example` to create your local environment file:
```bash
cp .env.example .env
```

| Variable | Description | Default (Demo) |
| :--- | :--- | :--- |
| `VITE_APP_MODE` | Target application mode (`demo` or `production`) | `demo` |
| `VITE_BASE_URL` | Base public URL path | `/billing-system1/` |
| `VITE_OWNER_EMAIL` | Whitelisted production owner email | `sriraghavendramess28@gmail.com` |
| `VITE_FIREBASE_*` | Firebase project credentials | *(Not required for Demo)* |

---

## 🛠️ Build & Verification Scripts

```bash
# Start local development server in DEMO mode
npm run dev:demo

# Start local development server in PRODUCTION mode
npm run dev:prod

# Run automated Demo Isolation & Security Test Suite
npm run test:demo

# Build independent DEMO bundle (outputs to dist-demo/)
npm run build:demo

# Build independent PRODUCTION bundle (outputs to docs/)
npm run build:prod

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Default Deployment)
The production bundle builds to `docs/` with GitHub Pages SPA routing configured via `404.html`.
```bash
# Build production bundle to docs/
npm run build:prod

# Push to main branch; enable GitHub Pages from repository Settings > Pages > Source: /docs
git push origin main
```

### Option 2: Standalone Demo on Vercel / Netlify
Dedicated deployment configurations (`vercel.json` and `netlify.toml`) are included in the repository root:
```bash
# For Netlify:
npm run build:demo
# Publish directory: dist-demo

# For Vercel:
# Set Build Command: npm run build:demo
# Set Output Directory: dist-demo
# Set Environment Variable: VITE_APP_MODE=demo
```

---

## 🧪 Automated Test Results

The repository includes an automated test suite (`scripts/test-demo-isolation.js`) verifying demo isolation:
- ✅ **Seed Data Integrity**: Authentic menu items across morning, afternoon, and evening sessions.
- ✅ **Historical Completeness**: Pre-seeded bills and expenses spanning 14 days and past 6 months.
- ✅ **Reactive Store CRUD**: Subscriber notification verification for Menu, Bills, and Expenses.
- ✅ **State Restoration**: Pristine data reset verification.
- ✅ **Role Permissions**: Verification of Owner, Cashier, and Auditor authorization matrices.
- ✅ **Zero Secret Leakage**: Verified that demo mode operates with zero Firebase network access.

---

## 📄 License & Attribution
Developed for **Sri Raghavendra Mess** (Hotel Billing & Management). All rights reserved.

