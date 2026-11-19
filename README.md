# TokenFund — Transparent Community Patronage & Disaster Relief Crowdfunding

[![Live Site](https://img.shields.io/badge/live-tokenfund--b4986.web.app-0f172a?style=flat-square)](https://tokenfund-b4986.web.app)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Firebase Hosting](https://img.shields.io/badge/Firebase%20Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)

> *"What if grassroots communities and global neighbors could co-fund hurricane recovery and public-good experiments with complete transparency and zero gatekeeping?"*

**Live Site:** **[tokenfund-b4986.web.app](https://tokenfund-b4986.web.app)** · [Explore on Novu Works](https://novu.works/#projects)  
**Maker:** **Fabián Vélez Vicente** (`@eresfavolosx`)

---

## 🌱 The Concept
Built in the aftermath of **Hurricane María** in Puerto Rico, **TokenFund** was born from an urgent human need: when traditional banking and power grids went dark, neighbors and global supporters still wanted a transparent, direct way to fund community recovery and local makers without opaque intermediaries.

---

## ⚙️ The Technology
- **HTML5, Material Design Lite & Bootstrap:** Responsive campaign landing page (`public/index.html`) featuring partner organization showcases, hurricane impact data, QR Bitcoin donation modal, and dynamic Material Design Lite progress bar (`#p3`).
- **Live Bitcoin Telemetry (jQuery + REST APIs):** Queries the live BTC address balance via **BlockCypher API** and real-time multi-currency conversion rates (`USD`, `EUR`, `JPY`, `GBP`, `CHF`, `CAD`) via **Blockchain.info Ticker API** (`public/Assets/JS/script.js`).
- **Firebase Hosting:** Static deployment targeting `public/` (`firebase.json`).

---

## 🌟 The Impact
- Empowered global supporters to contribute directly to grassroots recovery and civic technology rebuilding efforts across Puerto Rico with verifiable on-chain wallet transparency.

---

## 🚀 Quick Start (Static Prototype)

```bash
git clone https://github.com/eresfavolosx/TokenFund.git
cd TokenFund
npx serve public
```
