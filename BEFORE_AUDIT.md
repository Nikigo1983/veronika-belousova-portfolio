# BEFORE AUDIT — Veronika Belousova Portfolio

**Audited URL:** https://veronika-belousova-portfolio.vercel.app/  
**Source:** `c:\Users\Nika\Desktop\Site Nika` @ `17c36a5` (`main`)  
**Date:** 2026-10-08  
**Locales:** English (`/`) · Russian (`/ru`) via next-intl

---

## 1. Site inventory (as rendered + source)

### Pages / routes
| Route | Role |
|-------|------|
| `/` | English single-page marketing site |
| `/ru` | Russian locale of the same page |
| No other marketing pages | One long scroll only |

### Navigation (header)
- Brand: `VB` · Veronika Belousova · tagline **AI for Business**
- Links: Solutions · Work · Process · Deployment · About · Contact
- Language: EN | RU
- Header CTA: **Get Started** → `#contact`

### Sections (top → bottom)
1. **Hero** — badge “AI for Business”; H1 “Launch AI automation that moves real business metrics”; CTAs Schedule Consultation / View Solutions; portrait `nika2.jpg`; cards Focus / Scope  
2. **Solutions** (`#solutions`) — accordion of 12 enterprise AI items (Sales, Service, Marketing, Agent CX, Quoting, Finance, HR, Contract management, Order management, Salesforce AI, Strategy & support, Platforms)  
3. **Work** (`#portfolio`) — 5 website project cards (Golden Horse, KITCHEN, Sudfinex, Sharp & Spice, s:stebler) with live links  
4. **Process** (`#process`) — Discovery → Strategy → Implementation → Optimization (AI framing)  
5. **Deployment** (`#deployment`) — Public cloud / Private cloud / On-premise packages + Contact us  
6. **About** (`#about`) — journalism + marketing + code narrative; education; 3 certificates  
7. **Testimonials** — 4 quotes (gallery, finance center, café, agency) — all about **websites**  
8. **Contact** (`#contact`) — email, LinkedIn, phone, WhatsApp, Telegram + Formspree form (`https://formspree.io/f/xzdorkwo`)

### Contact mechanisms (working)
- Formspree POST `xzdorkwo` (Name, Email, Message)
- `mailto:virineya1983@gmail.com`
- LinkedIn profile link
- `tel:+351912768611`, WhatsApp, Telegram

### Visual assets retained today
- Portrait: `/nika2.jpg`
- Portfolio screenshots under `/public/portfolio/*` (websites / forms)
- Certificates: `/public/certificates/Ser1–3.jpg`
- Generated icons: `icon.tsx` / `apple-icon.tsx` (purple VB mark)

### Unused / leftover in repo
- Root untracked `anketa2.png`, `app_emigrant.jpg`
- Unused components: `Results.tsx`, `Advantages.tsx`, `HeroVisualCluster.tsx`, motion helpers for old hero
- Digital Tools section already removed from page (prior change)

### SPIORA evidence (outside this repo)
- No SPIORA assets or copy inside Site Nika
- Documented capabilities exist in Desktop `spiora demo` (`SPIORA_ROUTE_INVENTORY.md`): clients/CRM, AI workspace, knowledge base, tasks, calendar, team chat, analytics, settings/MFA; LiveKit video routes present but often gated off in demo
- **No approved public product screenshots** are currently in this marketing repo

---

## 2. Audit findings

### Clarity of offer (5 seconds)
**Fail.** First screen sells “Launch AI automation” and enterprise CRM/sales/service language. An SMB owner looking for a custom digital workspace for their company does not see that promise. Tagline “AI for Business” reads like a generic AI consultancy, not a builder of tailored business platforms.

### Target customer relevance
**Misaligned.** Copy and accordion mirror enterprise AI agency positioning (Salesforce Agentforce, quoting, fraud detection, on-prem air-gap). Portfolio and testimonials are website projects. Neither matches “custom digital workspace for small/growing businesses.”

### Confusing terminology
- Agent CX, deal scoring, air-gapped, vendor lock-in, Salesforce AI, pipeline forecasting — heavy B2B enterprise jargon
- “Deployment” packages feel like enterprise IT procurement, not SMB founders
- Role is not stated as Founder & AI Product Engineer

### Information hierarchy
- Solutions accordion is long (12 items) before any proof of a custom platform
- Website portfolio sits above process but does not support the AI enterprise claim
- Testimonials reinforce web design, contradicting the AI hero
- Deployment section adds length without clarifying the core product

### Repetitive / irrelevant
- Deployment overlaps Platforms accordion item
- Website case cards do not support the stated AI offer
- Testimonials are real but category-mismatched for the new positioning

### Design consistency
- Light purple SaaS look (glow, pills, gradient CTA) is polished but generic
- Mobile: header collapses; accordion usable; long page without clear SMB story
- Typography (Literata + Manrope) is fine; hierarchy competes with purple accent over brand

### CTA & friction
- Multiple CTAs (Get Started, Schedule Consultation, View Solutions, Contact us ×3) — okay volume, unclear primary action for “discuss my workspace”
- Contact form works; contact details are clear
- No single “Discuss your project” framing tied to a custom platform

### Accessibility / performance / SEO
- Semantic headings mostly present; accordion buttons have aria-expanded
- OG/Twitter metadata exist (title/description) but **no dedicated OG image**
- `robots: index, follow` set
- Framer Motion on several sections — no explicit `prefers-reduced-motion` policy in CSS
- No automated test suite in `package.json` (only `lint`)

### Assets to keep
- Portrait `nika2.jpg`
- Certificates (credibility)
- Contact channels + Formspree endpoint
- EN/RU i18n infrastructure
- Selected website work only if reframed as secondary proof of shipping — **not** as the core offer

---

## 3. Recommendations (implemented in redesign branch)

1. Reposition around **custom digital workspaces for SMBs** with human, concrete language  
2. Replace enterprise AI accordion + cloud deployment packages with: Problem → What I can build → Why custom → SPIORA case study → Process → About → FAQ → Contact  
3. Title role: **Founder & AI Product Engineer**  
4. Case study: SPIORA as custom immigration-business workspace; claim only verified capabilities; **no fake metrics/testimonials**; screenshots only if approved public demos exist (currently none in-repo → capability-led case study)  
5. Soften design toward premium minimal product-studio (restrained palette, whitespace, strong type)  
6. Primary CTAs: **Discuss your project** + **See a real project**  
7. Preserve Formspree and contact links; keep bilingual EN/RU  

---

## 4. Scope note for SPIORA claims

| Claim | Status |
|-------|--------|
| Client records / CRM | Verified in demo inventory |
| Tasks, calendar, team chat, knowledge base, AI workspace | Verified in demo inventory |
| Analytics, settings / MFA | Verified |
| Video meetings (LiveKit) | Present in codebase; often demo-gated — describe as available capability, not always-on demo feature |
| Finance integrations | Present in related Spiora modules; treat carefully / as optional capability |
| Client portal (external customer login) | Partially evidenced; avoid over-claiming without approved screenshots |
| Metrics / ROI / client quotes for SPIORA | **None verified — do not invent** |
