# Portfolio Plan — Mohammad Aosaf

> Working document. **Read this fully before any build phase.** Take all content from here —
> do not invent copy, metrics, projects, or claims. If something is missing, ask.
>
> **Live visual reference (build to match this):**
> https://claude.ai/code/artifact/e4aeb711-9d2d-4cb3-9a33-01222110be67

---

## 1. Goal

A polished, deployed personal portfolio positioning Mohammad Aosaf as an engineer who builds
**production agentic AI systems end to end** — and that is itself a work sample.

**Audience:** hiring managers, engineering leads, founders at AI/product companies.

**Success =** live URL, real case studies, Lighthouse ≥95, and it reads as a senior engineer's
credential — not a template, and not a creative-agency showreel.

---

## 2. Positioning

**H1 (sentence case, exact copy):**
> I build **production AI systems** — from multi-agent reasoning to the platform underneath.

("production AI systems" is the only phrase in the accent colour.)

**Supporting paragraph (exact copy):**
> Currently at MindHYVE.ai, where I architected and shipped **ChironOM** — a multi-tenant
> healthcare AI platform coordinating five specialised reasoning agents across six clinical
> pathways, with retrieval grounded in medical-legal guidelines. Before that I led engineering
> across three platforms at **QLU.ai**.

**Voice:** specific, plain, understated. Lead with systems and real numbers, never adjectives.
Banned: "passionate developer", "cutting-edge", "innovative solutions", "tech enthusiast".

---

## 3. Design direction — professional editorial

The register is **restrained, evidence-forward, high-contrast, generously spaced.** Motion lives
in how *content* is presented, never in decorative background or type tricks.

### Rejected — do not build these

Each of these was tried and explicitly rejected. Do not reintroduce any of them:

- ❌ Animated canvas backgrounds — dot fields, scan bands, aurora, plasma, galaxy, iridescence.
- ❌ Scramble/decode or cycling kinetic headlines.
- ❌ Hub-and-spoke node graphs, orbit diagrams, "AI brain" imagery.
- ❌ Centered mega-caps poster heroes (no 8–9rem all-caps display type).
- ❌ Scroll-velocity marquees that accelerate with scroll.
- ❌ Floating glassy pill nav.

### Reference DNA

**skiper-ui.com** and **reactbits.dev** are the sources — dark, type-led, restrained chrome, and
the component patterns in §4. Take their *component patterns*, not their poster-scale heroes.
**motionsites.ai is a paid AI-prompt marketplace, not a component source — ignore it.**

### Hero spec (exact)

- Plain **hairline top bar**, sticky, translucent ground + blur. Name left in mono; Work /
  Numbers / Contact right. Not a floating pill.
- **Left-aligned, single column**, 1120px max wrapper.
- Mono eyebrow: `AI & FULL-STACK ENGINEER — ISLAMABAD, PK`
- **H1:** sentence case, display serif, `clamp(2.1rem, 4.7vw, 3.6rem)`, line-height `1.1`,
  letter-spacing `-.014em`, `max-width: 24ch`, `text-wrap: balance`.
- Supporting paragraph: `max-width: 62ch`, in `--prose`. "ChironOM" and "QLU.ai" in `--type`
  at weight 600.
- CTA row: filled accent button "View work" (**border-radius 2px, not a pill**), then two mono
  hairline-underlined links: "Résumé", "Get in touch".
- **Credential strip** — the professional differentiator. Four columns divided by vertical
  hairlines, each a mono label + a line of `--type` text:

  | Label | Value |
  |---|---|
  | Current | MindHYVE.ai — AI & Full-Stack Engineer |
  | Previously | QLU.ai — Senior Full Stack, led a team of 3 |
  | In production | 500K+ users on a live product |
  | Education | BS Computer Science, FAST-NUCES |

- Never `100vh`. No background animation.

### Type & colour — the four-tier text system (CRITICAL)

| Token | Value | Used for |
|---|---|---|
| `--type` | `#EAF3ED` | headings, H1, big figures, emphasised words |
| `--prose` | `#C4D3CC` | **all body copy** |
| `--dim` | `#7F9A93` | mono labels, eyebrows, meta, captions — **only** |
| `--accent` | `#3FBF9E` | one phrase in the H1, section labels, CTA, hovers, focus rings |
| `--ground` | `#05100E` | page ground (green-shifted, not neutral black) |
| `--ground2` | `#081916` | raised surface (preview panel) |
| `--hair` | `#16302C` | hairline rules |

> **Body copy must never be set to `--dim`.** That mistake shipped twice in earlier drafts and is
> the single biggest reason body text looked poorly styled. Prose gets `--prose`; muted is for
> labels only.

**Faces — three roles, strictly separated:**

| Role | Face | Settings |
|---|---|---|
| **Display** — H1, project names, figures | **Newsreader** 500 (serif) | sentence case, line-height `1.1`, letter-spacing `-.014em` |
| **Body** — all prose | **Instrument Sans** 400 | `1.06rem`, line-height `1.72`, letter-spacing `.003em`, max `62ch` |
| **Mono** — labels only | **IBM Plex Mono** 400/500 | 9.5–10.5px, letter-spacing `.16–.24em`, uppercase |

Serif display + sans body. **Do not set body prose in a serif:** a text serif on a dark ground
optically thins and reads weak. That is why the body face is a sans. Mono is never used for prose.

Approved palette alternates (swap all seven values as a set):
- **Teal** — ground `#04121A` · ground2 `#071C25` · hair `#143038` · type `#E6F2F3` · prose `#BFD2D6` · dim `#7B979E` · accent `#2FC9C2`
- **Emerald** — `#061410` · `#0A1E17` · `#17332A` · `#EBF4ED` · `#C5D5C9` · `#829C8D` · `#34D399`
- **Moss** — `#0A1210` · `#101A16` · `#1E2C26` · `#EDF2EB` · `#CBD5C8` · `#8B9A8B` · `#8FBF6A`

Headline face alternates: Instrument Serif, Bricolage Grotesque, Schibsted Grotesk, Syne.
Body face alternates: Schibsted Grotesk, IBM Plex Sans.
**Upgrade path:** on the real site, self-hosting **Switzer** or **General Sans** (Fontshare, free)
via `next/font/local` beats Instrument Sans for body.

### Motion budget — three behaviours on the home page, total

1. **Stack strip** — slow constant leftward drift (~0.3px/frame). No scroll coupling, no boost.
2. **Metrics count-up** — once, on entering view, ~950ms ease-out.
3. **Projects grid reveal** — staggered scroll reveal on the Projects cards only (the free
   skiper104 replacement). Not on Skills, Experience, the work index or the hero.

Static grain overlay at 3% opacity is permitted and optional. Everything else on the home page is
static. Case-study pages may add **one** scroll composition from §4. Sites read as generated when
every section animates differently.

All motion must disable under `prefers-reduced-motion`, and figures must render their real values
with JavaScript disabled.

---

## 4. Component patterns

**`COMPONENTS.md` is the single source of truth for this — read it before P2, P3 or P4.**
It lists every component, the exact section it belongs to, its tier, how to install it, licence
obligations, and an explicit "never install" list. Summary:

| Section | Component | Source | Tier |
|---|---|---|---|
| Home — Selected work index | hover/click index + preview panel (the skiper80 pattern) | **hand-build** | free |
| Home — Stack strip | slow constant marquee | **hand-build** | free |
| Home — In numbers | **Count Up** | React Bits free | free |
| /work/[slug] — highlights | **Scroll Stack** | React Bits **free catalog** | free |
| Home — Projects grid | **Animated Content** (staggered reveal, replaces skiper104) | React Bits free | free |

Only **three** third-party components get installed in v1: Count Up, Scroll Stack and
Animated Content. Animated Content needs `gsap`.

**skiper104 replacement:** skiper104 is confirmed **Pro-only** (requires a licence key). Its effect
— a grid of cards revealing on scroll — is reproduced free with a plain CSS grid plus React Bits
`AnimatedContent` around each card, staggered 60ms by index (distance 24, duration 0.5,
threshold 0.15). Exact settings in `COMPONENTS.md` §1. `FadeContent` is the quieter opacity-only
option.

**Deferred, not in v1:** skiper80 (Pro — cheap to hand-build instead) and skiper29 parallax
(Pro, and needs real hero screenshots we don't have yet). **Skills stays a static section.**

Note the URL trap: `pro.reactbits.dev/.../scroll-stack` is the paid docs. Scroll Stack also exists
in the **free** reactbits.dev catalog under Components — use that.

Skiper's free tier **requires attribution in the footer**; React Bits is MIT and does not. v1 uses
no Skiper components, so no attribution is needed unless that changes.

**Work index behaviour (important):** it must work on **hover, click, tap and keyboard** — bind
`pointerenter`, `click` and `focus`, use `role="tablist"` / `aria-selected`, and keep the last
selection rather than resetting on mouse-out. Hover-only breaks on touch and in narrow panes.

Other free sources: React Bits **Tools** (Background Studio, Shape Magic, Texture Lab),
Fontshare (free self-hostable faces), Figma (free, optional moodboard).

Avoid AI layout generators (v0 and similar) for the design itself.

---

## 5. Content

### Identity

- **Name:** Mohammad Aosaf
- **Location:** Islamabad, Pakistan
- **Email:** mohammadaosaf@gmail.com
- **GitHub:** https://github.com/Hertz-7
- **LinkedIn:** https://linkedin.com/in/mohammad-aosaf
- **Phone:** DO NOT publish on the site. Résumé PDF only.

### Work — employer products

> Attribution rule: these are **engineering contributions at employers**, not products
> Mohammad owns. Label the role explicitly on every entry. Never imply ownership or founding.

#### 1. ChironOM — MindHYVE.ai  *(flagship case study)*
- **Role label:** `MindHYVE.ai — architected & shipped`
- **Link:** https://chirongrid.ai/om/
- **Index summary:** Multi-tenant healthcare AI platform. Five specialised reasoning agents across
  six clinical pathways, MTUS/ACOEM retrieval, and tenant isolation moved into Postgres row-level
  security across 11 data domains.
- **Case-study detail:**
  - Multi-agent orchestration layer coordinating 5 specialised reasoning agents (medical, legal,
    financial, risk, ethics) across 6 clinical care pathways, invoked conditionally per case
    signals, with human-in-the-loop physician review.
  - MTUS/ACOEM RAG pipeline: PDF ingestion, section-aware chunking, HNSW vector search,
    two-step LLM retrieval.
  - Re-architected multi-tenant isolation from database-per-tenant to shared-database PostgreSQL
    Row-Level Security with JWT-derived tenant context across 11 data domains, validated by
    automated isolation tests.
  - NestJS REST API with JWT tenant context, refresh-token rotation, RBAC, and Server-Sent Events
    for streaming AI responses.
  - Event-driven document pipeline on retrying BullMQ/Redis workers with OCR and structured extraction.
  - LLM evaluation harnesses for production output quality, plus PHI audit logging.
- **Tags:** NestJS · Next.js 15 · PostgreSQL RLS · pgvector · Azure AI Foundry · BullMQ

#### 2. QLU.ai  *(case study)*
- **Role label:** `Senior Full Stack Engineer — led a team of 3`
- **Links:** https://www.qlu.ai/ · https://www.qlu.ai/outreach · https://www.qlu.ai/dialer
- **Index summary:** AI-native executive sourcing platform. Natural-language candidate search over
  millions of profiles, an event-driven outreach system, and a Twilio dialer carrying an autonomous
  voice SDR.
- **Case-study detail:**
  - Led and mentored 3 full-stack engineers across architecture, delivery and code quality.
  - Directed architecture for 3 core platforms; scaled to 1,500+ users, 100+ concurrent sessions.
  - **AI People Search** (core revenue product): natural-language candidate search over millions of
    profiles; optimised complex SQL and Elasticsearch queries for up to **90% performance improvement**.
  - **Outreach automation:** event-driven system with scheduling logic, Redis-backed background jobs,
    pub/sub fan-out for real-time updates.
  - **Twilio Dialer:** high-volume outbound calling — call reliability, call-state handling, status
    webhooks, real-time call events over WebSockets.
  - **AI Voice SDR** built on the Dialer for autonomous outbound recruitment calls.
  - Refactored credit/subscription billing end-to-end; zero-downtime migrations across PostgreSQL,
    MySQL and MS SQL Server.
  - Reusable authentication microservice; admin operations panel.
- **Tags:** React · NestJS · Elasticsearch · Redis · Twilio · WebSockets

#### 3. TheoAI — MindHYVE.ai  *(ownership highlight — NOT a build story)*
- **Role label:** `MindHYVE.ai — maintained in production`
- **Link:** https://chat.theogrid.ai/
- **Index summary:** Live product at 500K+ users. Instrumented observability, and the escalation
  point for production incidents — tracing failures across services, logs, databases and
  third-party APIs.
- Mohammad **did not build this.** Frame strictly as production ownership, reliability and
  observability. Index entry only — **no case-study page.**
- **Tags:** Azure App Insights · LogRocket · Incident response

### Live links — all five MUST appear on the site

Every project entry surfaces its live URL. These are the only five, and none may be omitted:

| Project | URL | Where it must be linked |
|---|---|---|
| ChironOM | `https://chirongrid.ai/om/` | index row **and** case-study page header |
| QLU.ai (platform) | `https://www.qlu.ai/` | index row **and** case-study page header |
| QLU Outreach | `https://www.qlu.ai/outreach` | inside the QLU case study, on the Outreach automation section |
| QLU Dialer | `https://www.qlu.ai/dialer` | inside the QLU case study, on the Dialer / AI Voice SDR section |
| TheoAI | `https://chat.theogrid.ai/` | index row only — no case-study page |

The two QLU sub-pages matter: Mohammad owned the Outreach automation architecture and the Twilio
Dialer specifically, so those features link to their own live pages rather than only the root.

All external links: `target="_blank" rel="noopener noreferrer"`, with a visible affordance (a mono
"Visit ↗" link or equivalent) — never a bare underline the reader can't spot.

### Projects — personal / research

#### NewsBiasDetect (final-year research, FAST-NUCES, 2023–2024)
- **Role label:** `Research — IEEE-format paper`
- **Index summary:** Political bias detection across Pakistani news. A 1,000-article dataset
  annotated with expert journalists, and four fine-tuned transformers compared; RoBERTa best at
  0.796 accuracy.
- Detail: bias toward PTI / PML-N / PPP / neutral; fine-tuned RoBERTa, BERT, DistilBERT,
  DistilRoBERTa (Hugging Face + PyTorch, fp16 on NVIDIA T4); LDA topic modelling and lexical bias
  features; best RoBERTa **0.796 accuracy, 0.767 F1**.
- **Tags:** PyTorch · RoBERTa · Hugging Face · LDA

#### Semantic Similarity in English Sentences — SemEval 2024 Task 1
- BERT-based system for English Semantic Textual Relatedness.

### The four metrics (exact figures and captions)

| Figure | Caption |
|---|---|
| 500K+ | Users on a live product maintained in production |
| 5 | Reasoning agents across six clinical pathways |
| 90% | Faster candidate search after query optimisation |
| 11 | Data domains isolated via Postgres row-level security |

### Stack strip contents (in this order)

NestJS · Next.js 15 · React 19 · PostgreSQL · pgvector · Row-Level Security · Drizzle · Redis ·
BullMQ · Elasticsearch · Azure AI Foundry · Azure Container Apps · Twilio · WebSockets ·
Turborepo · RoBERTa · PyTorch · Hugging Face · Jest · Bicep

### Skills (group exactly like this)

- **Languages:** TypeScript, JavaScript, Python, SQL, HTML, CSS
- **Frameworks & Libraries:** Next.js, React.js, React Native, Node.js, Express, NestJS, GraphQL, Tailwind CSS
- **Databases & Data:** PostgreSQL, MySQL, MS SQL Server, MongoDB, Redis, Elasticsearch, pgvector, Drizzle ORM, Sequelize
- **AI & ML:** PyTorch, Hugging Face Transformers, scikit-learn, pandas, NumPy, Gensim/LDA, RAG,
  LLM integration, vector search, embeddings, fine-tuning, BERT/RoBERTa, multi-agent orchestration,
  NLP, model evaluation
- **Cloud & DevOps:** Azure (Container Apps, AI Foundry, Bicep), GCP (Compute Engine, Cloud Run,
  Cloud Functions, Cloud Storage, Pub/Sub), Docker, Azure DevOps Pipelines, GitHub Actions,
  Turborepo, pnpm, BullMQ, Git
- **Testing & Observability:** Jest (unit, integration, e2e), Azure Application Insights, LogRocket, Cloud Logging

### Experience timeline

| Role | Company | Dates |
|---|---|---|
| AI & Full-Stack Engineer (Agentic Full-Cycle Engineer) | MindHYVE.ai | Jan 2026 — Present |
| Senior Full Stack Engineer | QLU.ai | Jul 2024 — Jan 2026 |
| Full Stack Engineer | Thy Reality | May 2024 — Sep 2024 |
| React Developer Intern | Hexa IT | Jun 2023 — Aug 2023 |

*Thy Reality:* crypto-based property-share trading platform (NestJS, React, TypeScript, Tailwind)
plus a React Native companion app and optimised GraphQL APIs. Timeline entry only.

### Education

FAST-NUCES, Islamabad — 2020–2024. BS Computer Science, CGPA 3.44.

---

## 6. Publishing / honesty checklist

- [ ] TheoAI is described as **maintained**, never "built".
- [ ] Every employer product shows Mohammad's **role label**; no implied ownership.
- [ ] Public metrics (the 500k+ figure) and internal architecture details confirmed OK to state
      publicly — these are employer products and some are pre-launch. When in doubt, describe the
      engineering and drop the number.
- [ ] No internal codenames or unreleased features.
- [ ] Phone number is **not** on the site.
- [ ] Every claim traces to the résumé or a live public page.

---

## 7. Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** (`motion`); GSAP only if a chosen component requires it
- Components per §4, installed per reactbits.dev / skiper-ui.com install docs
- **MDX** case studies: `content/work/*.mdx` + `next-mdx-remote/rsc` + `gray-matter`
- Fonts via `next/font/google`: Newsreader, Instrument Sans, IBM Plex Mono
- **Vercel** (free) hosting; GitHub for source

---

## 8. Site map

```
/                 Hero + credential strip → Stack strip → Selected work (index) → In numbers → About → Skills → Experience → Contact
/work/[slug]      Case study: chironom · qlu   (theoai = index entry only, no page)
/resume.pdf       Résumé download (in /public)
```

---

## 9. Build phases

Each phase = one opencode session. Prompts in `PROMPTS.md`.

| Phase | Scope |
|---|---|
| **P0** | Scaffold: Next 15 + TS + Tailwind + shadcn + Motion; the seven Pine tokens; three fonts; deploy empty to Vercel |
| **P1** | Design system + shell: four-tier text colour, three type roles, spacing scale, hairline top bar, footer |
| **P2** | Professional hero: eyebrow, sentence-case serif H1, supporting paragraph, CTA row, credential strip, slow stack strip |
| **P3** | Selected work: MDX pipeline, hover/click/keyboard work index with preview panel, ChironOM + QLU case-study pages, TheoAI index entry |
| **P4** | In numbers (count-up), About, Skills, Experience, Projects |
| **P5** | Contact + résumé + SEO/metadata + OG image + analytics |
| **P6** | Polish: a11y, performance, responsive, motion audit, custom domain |

Get a live Vercel URL in **P0**.

---

## 10. Model strategy (cost)

- **opencode + MiniMax M2.7** (~$0.21/$0.84 per 1M) — **use this for every phase, P0 through P6.**
  It is agentic-tuned so it behaves well in opencode's tool loop, and at ~78% SWE-bench Verified it
  is comfortably above what this build needs. The spec in these docs is detailed enough that model
  choice is not the bottleneck.
- **Fallback if the $5 OpenRouter credit runs short:** move the boring bulk — P0 (scaffold),
  P1 (tokens), P4 (static sections), P5 (metadata) — to **DeepSeek V4 Flash** ($0.05/$0.16, ~79%,
  roughly 5× cheaper on output) and keep M2.7 for P2, P3 and P6, where the interaction logic and
  audit judgement live.
- **Skip MiniMax M3** — barely above M2.7 and costs more.
- **Claude Code (Opus 5)** — planning, architecture calls, reviewing diffs, the one bug nothing
  else cracks. Do not spend Claude quota on boilerplate.

Output tokens dominate agent-loop cost, so the out-price is the number that matters.

**Review every diff.** You will be asked to explain this code in interviews.

---

## 11. Definition of done

- Live on a custom domain, no console errors, no hydration warnings.
- Lighthouse ≥95 across Performance / Accessibility / Best Practices / SEO.
- Two written case studies (ChironOM, QLU) structured Problem → Approach → Impact.
- Works at 375 / 768 / 1440; nothing scrolls sideways except the clipped stack strip.
- The work index responds to hover, click, tap and keyboard.
- Body copy is `--prose`, never `--dim`. Prose is never set in a serif or a mono.
- Home page has exactly two motion behaviours; both disable under `prefers-reduced-motion`.
- Zero generic filler copy. Zero invented claims. No node graphs, no animated backgrounds.
