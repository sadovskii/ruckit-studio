# Ruckit landing page

Complete editable website: HTML, CSS, JavaScript, SVG logo, and PNG screenshots.
Both light and dark themes and the Chrome/Edge installation links are included.
No backend, package installation, build step, API keys, or OpenAI services are required.

## Host it

1. Extract this ZIP.
2. Upload index.html, styles.css, theme.js, ruckit-logo.svg, and the images folder to your hosting provider's public web root. Keep their relative paths intact.
3. Set the hosting provider to serve index.html as the default document.
4. If asked for a build command, leave it empty. The publish/output folder is the folder containing index.html.
5. Test the temporary hosting URL, including both themes and the browser-store buttons.
6. Add ruckitstudio.com in your new host's domain settings. Apply the exact DNS records that host supplies in Shopify, then wait for domain verification and HTTPS activation. Configure www separately if you want to use it.

This package assumes hosting at the domain root. The favicon path in index.html is /ruckit-logo.svg; adjust it if deploying under a subdirectory.

## Preview locally

With Python installed, run this inside the extracted folder:

    python -m http.server 8080

Then open http://localhost:8080 in your browser.

## Edit the site

- index.html: page content, store links, and metadata
- styles.css: layout, colors, responsive styling, and theme styles
- theme.js: theme switching and saved appearance preference
- ruckit-logo.svg: favicon
- images/: extension screenshots

Exported from source commit 1b2ab5996d5917aac58bd77eaafdbde30898486e.
