# Far Away Packing & Trip Checklist

Far Away is a personal packing/remembering app created during the Jonas Schmedtmann React course. The app helps users prepare for trips by creating and tracking packing items (for example: passport, clothes, chargers). Each item includes a name, optional notes and a quantity. Users can mark items as packed so they always know what is missing before they leave.

## Key features

- Create packing items with name, quantity and optional notes
- Edit or remove items
- Mark items as packed/unpacked
- Summary counts: total items, packed vs missing
- Responsive UI for mobile and desktop

## Tech

- React (Create React App)
- Plain CSS

## Folder structure

- `src/` app components (Header, Form, ItemList, Footer)
- `public/` static assets

## Run locally

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm start
```

3. Build for production

```powershell
npm run build
```

## Notes & next steps

- Data is stored in local component state. To persist across reloads you can add `localStorage` or a small backend.
- If you'd like, I can add an export/import CSV feature or categorize items by trip.
