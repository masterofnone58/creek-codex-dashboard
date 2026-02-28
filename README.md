# Multi-Company Operations Dashboard (Static JSON V1)

Static frontend dashboard for managing and operating multiple companies in a manufacturing + trade group.

## V1 scope

- Group command center with broad KPI coverage:
  - Revenue, sales, transactions, inventory, stock cover, gross margin
  - Tax payable, cash, open leads, pipeline value, return rate, delivery
- Visual trend cards (mock bar charts):
  - Revenue trend (12M)
  - Transactions trend (12M)
  - Inventory by company
  - Lead funnel
- Busy operation feeds:
  - Priority tasks
  - Alerts feed
  - Recent transactions
  - Active sales leads
- Company drill-down tabs:
  - Overview
  - Sales
  - Transactions
  - Operations
  - Procurement
  - Inventory
  - Trade
  - Finance
  - Tax
  - Compliance
  - Company Management (view-only)
  - Activity

## Data source

All data is static JSON under `data/`.

- `data/companies.json`:
  - Group KPIs/charts/tasks/alerts/transactions/leads
  - Company summary list for sidebar
- `data/company-<id>.json`:
  - Detailed module data for one company

This structure is ready for a future backend updater to refresh JSON from source systems.

## Project files

- `index.html` - app layout
- `src/styles.css` - styles and responsive layout
- `src/app.js` - data loading, rendering, and tab logic
- `data/*.json` - mock operational data

## Run locally

Use an HTTP server because JSON is loaded via `fetch()`.

```bash
cd /Users/ansonshen/Codex/project\ creek-codex
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Access from internet

### Temporary public URL (fastest)

```bash
cd /Users/ansonshen/Codex/project\ creek-codex
./scripts/start-local.sh 8000
```

In a second terminal:

```bash
cd /Users/ansonshen/Codex/project\ creek-codex
./scripts/share-internet.sh 8000
```

The tunnel command prints a temporary public URL.

### Permanent public hosting (recommended)

Use GitHub Pages workflow:

- `.github/workflows/deploy-pages.yml`

See full steps in:

- `INTERNET_ACCESS.md`

## Next phase (optional)

- Add edit forms and approval workflow actions.
- Add backend ingestion job to regenerate JSON snapshots.
- Add authentication and role-based restrictions (currently disabled by design).
