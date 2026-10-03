// COMPANY CONFIGURATION - SINGLE SOURCE OF TRUTH
// HOW TO UPDATE COMPANY DETAILS:
// 1. Edit the values in this COMPANY object.
// 2. js/script.js fills every element that has data-company="..." on page load
//    (and data-company-href="tel" | "mailto" | "wa" for links).
// 3. The same details are also written in the HTML as fallback text for SEO and
//    for visitors without JavaScript. If you change a value here, search the
//    HTML files for the old value and update it too (also sitemap/JSON-LD in index.html).

const COMPANY = {
  name: 'Maa Kamakhya Enterprises',
  shortName: 'MKE',
  tagline: 'Rice Mill Solutions',
  specialization: 'Specialist in Paddy Parboiling, Steaming & Drying Technologies',
  phone: '+91 9934452387',
  displayPhone: '+91 9934452387',
  whatsapp: '919934452387',
  email: 'maakamakhyaenterprises19@gmail.com',
  gstin: '10ACFFM4344Q1Z2',
  year: new Date().getFullYear(),
  address: {
    line1: 'VILL + POST - Mahuawa',
    line2: 'DIST. - West Champaran',
    line3: 'STATE - Bihar',
    line4: 'PIN - 845416',
    line5: 'India'
  }
};
