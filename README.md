
# Armstrong Accountants – Static Website

This is a lightweight, responsive static site ready for deployment to **Azure Static Web Apps**, **Azure Storage (Static Website)**, or **Azure App Service**.

## Structure
```
/ (root)
  index.html
  services.html
  about.html
  team.html
  contact.html
  privacy.html
  404.html
  robots.txt
  sitemap.xml
  manifest.json
  staticwebapp.config.json
  web.config
  /assets
    /css/styles.css
    /js/main.js
    /img/* (logo, favicon, hero placeholder)
```

## Deploy to Azure Static Web Apps (Portal)
1. Create resource **Static Web App** in Azure Portal.
2. Choose deployment source (GitHub) and link this repository.
3. App location: `/`  
   Build output: `/`  
4. Add the generated token as repo secret `AZURE_STATIC_WEB_APPS_API_TOKEN` if using the included GitHub Actions workflow.

## Deploy to Azure Storage (Static website)
1. Create a **Storage Account** → **Enable Static website**.
2. Set **Index document** = `index.html`, **Error document** = `404.html`.
3. Upload all files from this folder to the `$web` container.

## Deploy to Azure App Service
1. Create a **Web App** (Linux) with Runtime **Static Site** or **Node**.
2. Deploy these files via **Zip Deploy** or GitHub Actions.
3. `web.config` is included for IIS fallback if needed.

## Custom domain & HTTPS
- Point your domain to the Azure endpoint and enable **Free SSL** in the service.

## Editing
- Update contact details in `contact.html` and `footer`.
- Replace team images at `/assets/img/team-*.jpg`.
- Update `sitemap.xml` with your final domain if changed.

---
Made with ❤️ for Armstrong Accountants.
