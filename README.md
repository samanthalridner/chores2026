# Echo Show Chore Chart

This is a touch-friendly chore chart designed for the Echo Show 21 browser.

## Fastest Way To Use It

1. Publish this folder with a static host such as GitHub Pages, Netlify, Cloudflare Pages, or an internal home server.
2. On the Echo Show, say: "Alexa, open Silk."
3. Visit the hosted URL.
4. Tap the fullscreen button in the top-right corner of the chart.

The board stores its data in the browser on that device with `localStorage`. Use the download and upload buttons to back up or move the board.

## Local Preview

```powershell
node .\serve.cjs 4173
```

Then open `http://127.0.0.1:4173`.

## Better Sync Later

For syncing between phones and the Echo Show, add a small backend such as Firebase, Supabase, Airtable, or Google Sheets. For voice commands, build an Alexa custom skill using Alexa Presentation Language and reuse the same chore data model.
