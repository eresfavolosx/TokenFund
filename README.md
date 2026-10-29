# TokenFund — Hurricane María Relief Crowdfunding (2018)

[![Organization](https://img.shields.io/badge/org-Link%20Puerto%20Rico-0f172a?style=flat-square)](https://linkpuertorico.org)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Hosting%20%26%20RTDB-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Bitcoin](https://img.shields.io/badge/donations-Bitcoin%20%2B%20fiat-F7931A?style=flat-square&logo=bitcoin&logoColor=white)

**TokenFund** is an international crowdfunding platform built after **Hurricane María** (September 2017), the Category 4 storm that left all of Puerto Rico without power. It collected relief donations from around the world in **Bitcoin and traditional currencies** to support the island's immediate and long-term recovery.

> Built by **Fabián Vélez Vicente** with [Link Puerto Rico](https://linkpuertorico.org) · Part of the [NovuWorks portfolio](https://novu.works)

---

## Highlights

- **Multi-currency giving:** Bitcoin (with QR code) alongside USD, EUR, CAD, and other currencies
- **Live progress bar:** shows fundraising progress toward the campaign goal
- **Storytelling landing page:** hurricane impact imagery, mission statement, and team section
- **"Featured In" press section:** media coverage credibility strip
- **FAQ:** answers common donor questions, with in-line *Donate Now* calls to action
- **SEO & social:** Open Graph and social meta tags, iPhone home-screen icon
- **Firebase:** static hosting and Realtime Database rules

## Tech Stack

- HTML5, CSS3, JavaScript
- Firebase Hosting + Realtime Database (`firebase.json`, `database.rules.json`)

## Running Locally

```bash
git clone https://github.com/eresfavolosx/TokenFund.git
cd TokenFund/public
python3 -m http.server 8080
# or, with the Firebase CLI from the repo root:
firebase serve
```

## Project Structure

```text
public/
├── index.html        # Campaign landing page
├── Pages/            # Secondary pages
└── Assets/
    ├── CSS/          # Styles
    └── IMG/          # Imagery, currency icons, QR, press logos
database.rules.json   # Firebase RTDB rules
firebase.json         # Hosting config
```

## Impact & Legacy

TokenFund was an early piece of Link Puerto Rico's disaster-response technology work. That work later grew into the **Puente a Puente** initiative in the Loíza Municipality: 100+ computers and 50+ tablets sourced, and 3 community centers turned into digital libraries. More at [novu.works](https://novu.works).

## Author

**Fabián Vélez Vicente**: [novu.works](https://novu.works) · [GitHub @eresfavolosx](https://github.com/eresfavolosx)
