# anbuTamil

This repository contains a Tamil baby-names website built with Vite, React, and TypeScript.

## Overview

The frontend is located in the `frontend/` directory and is a single-page application that:

1. Loads a JSON file of Tamil names (`public/names.json`) which includes two arrays: `boys` and `girls`.
2. Displays names in a responsive grid with meaning shown under each name.
3. Allows users to toggle between boys and girls lists.
4. Provides a search bar to filter names by text and A‑Z buttons to filter by starting letter.

Names are sorted alphabetically before being served to ensure predictable navigation.

## Running the project locally

```bash
# install dependencies
cd frontend && npm install

# start development server
npm run dev
```

Open `http://localhost:5174` (or whichever port Vite chooses) in your browser. The app will fetch `/names.json` automatically.

## Data source

The `names.json` file in the repository root contains the full dataset. It is copied into `frontend/public/` during development. It must be valid JSON with the following structure:

```json
{
  "boys": [ {"name":"...","meaning":"..."}, ... ],
  "girls": [ {"name":"...","meaning":"..."}, ... ]
}
```

## Features

- **Gender toggle** – view boys or girls names.
- **Alphabet filter** – click a letter to see names beginning with that letter; the current search text is cleared when changing letters.
- **Search** – free-text search over names and meanings.
- **Responsive UI** – cards adjust to screen width.

## Deployment

The app is a static site and can be deployed on GitHub Pages, Netlify, Vercel, etc. Build with:

```bash
cd frontend && npm run build
```

Then serve the contents of `frontend/dist`.

## Contributing

Add or update names in the root `names.json` and re-run the sort script provided (`/tmp/sort_names.js` if needed). Ensure the JSON stays valid.

---

Additional information and development notes are present in the project documentation.
Website for Tamil names
