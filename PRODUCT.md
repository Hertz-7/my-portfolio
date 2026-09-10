# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** technical hiring decision-makers — engineering leads, hiring managers, and founders at
AI and product companies — evaluating Mohammad Aosaf for a role. They arrive from a résumé, a
LinkedIn profile, a hiring-platform profile, or a referral, usually skimming several candidates in
one sitting, and they are deciding within the first screen whether to keep reading.

**Secondary:** prospective freelance and consulting clients assessing whether he can take on paid
project work. Confirmed as a real audience; the site does not currently serve them.

Both audiences are largely remote and international. Mohammad is based in Islamabad, Pakistan.

## Product Purpose

A personal portfolio site that establishes Mohammad Aosaf as an engineer who builds production
agentic AI systems end to end, and that is itself a demonstration of his front-end capability.

**Success is two outcomes, confirmed by the user:**

1. **Inbound hiring interest** — recruiters and engineering leads find the site, believe the
   evidence, and make contact.
2. **Freelance and consulting leads** — paid project enquiries.

The site is not optimised for a single conversion event; credibility is the mechanism for both.

## Positioning

Two-plus years shipping **agentic AI in regulated domains** — multi-agent orchestration, retrieval
over medical-legal source material, LLM evaluation in production — *combined with* ownership of the
multi-tenant platform and infrastructure underneath it. The pairing is the claim: not a front-end
engineer who has used an LLM API, and not an ML researcher without production ownership.

**Career track is deliberately unresolved.** The user's answer was "either — strongest offer wins."
He is open to both a **senior individual-contributor** role (hands-on AI/full-stack) and an
**engineering manager / lead** role. Both are true of his record: he led and mentored a team of 3 at
QLU.ai while owning architecture and implementation. Future work must not silently collapse this to
one track, and must accept that serving both carries a real risk of reading unfocused.

## Operating Context

- Evaluated in a browser, most often desktop, frequently in a fast skim alongside other candidates.
  Mobile viewing is common from LinkedIn and messaging apps.
- Read alongside the résumé PDF, the GitHub profile, and the live product links — the site must agree
  with all of them.
- Reached via links pasted into applications, hiring-platform profiles, and DMs, so link previews
  (Open Graph) are part of the first impression.
- Reviewers may open the linked live products to verify claims.

## Capabilities and Constraints

**Existing implementation.** Next.js 16.3.4 (App Router, `src/`), TypeScript, Tailwind CSS,
shadcn/ui, Framer Motion, GSAP, MDX case studies via `next-mdx-remote` + `gray-matter`, Vercel
Analytics. Case studies live in `src/content/work/*.mdx`. Sections, the work index, and the three
third-party motion components are already built.

**Deployment.** Vercel (Hobby, team `aosaf`), project `my-portfolio`, deployed from GitHub
`Hertz-7/my-portfolio`, **production branch `master`**.

> **Hard constraint:** the `main` branch of that same repo holds a *different site* — the previous
> Create React App + Firebase portfolio behind `aosafdev.web.app`, including `firebase.json`,
> `my_cv.pdf`, and the old project images. The two histories are unrelated. **Nothing may be pushed
> to `main`, and `main` must never be force-overwritten.** All work ships on `master`.

**Attribution constraints (non-negotiable).**
- ChironOM, TheoAI (MindHYVE.ai) and QLU.ai are **employer products, not products Mohammad owns**.
  Every entry must display his role explicitly. Nothing may imply ownership or founding.
- **TheoAI was maintained, not built.** It is a production-ownership, reliability and observability
  contribution only. Describing it as "built" is a factual error.

**Publication constraint — confirmed this session.** Quantified outcomes (e.g. the 500K+ users
figure, the 90% query improvement) may be published. **Specific internal architecture detail should
not be** — pipeline internals, row-level-security domain counts, and the internal agent breakdown.

> **Open decision:** clearance has not been confirmed with MindHYVE or QLU. The user chose the
> conservative middle path himself. It is also unresolved whether two of the four headline figures
> ("5 reasoning agents", "11 data domains") count as figures or as internals, since they describe
> architecture. **The shipped case studies in `src/content/work/` currently contain the internal
> detail this constraint excludes** and do not yet comply.

**Contact constraint.** The phone number must never appear on the site. Email, GitHub and LinkedIn
only; the phone stays in the résumé PDF.

**Undecided:** custom domain (currently the default Vercel subdomain). A section for Mohammad's own
products is out of scope for v1. The freelance/consulting audience is confirmed but not yet served
by any part of the site.

## Brand Commitments

- **Name:** Mohammad Aosaf. Location shown as Islamabad, PK.
- **Voice:** specific, plain, understated. Lead with systems and real numbers, never adjectives.
  Explicitly banned: "passionate developer", "cutting-edge", "innovative solutions", "tech
  enthusiast".
- **The user's stated hard requirement: the site must not look AI-generated.** He rejected earlier
  attempts on exactly this basis. This is a binding acceptance criterion, not a preference.
- **Binding visual constraints the user chose** (recorded as given, not expanded here): a teal/green
  palette; **Bricolage Grotesque** for display, **IBM Plex Sans** for body copy, **IBM Plex Mono**
  for labels. Body copy must never be set in the mono or in a serif.

## Evidence on Hand

**Real and verifiable:**
- Live employer products: `chirongrid.ai/om/`, `qlu.ai` (plus `/outreach` and `/dialer`),
  `chat.theogrid.ai/`. All five links must appear on the site.
- Résumé PDF at `public/resume.pdf`.
- GitHub `github.com/Hertz-7`; LinkedIn `linkedin.com/in/mohammad-aosaf`.
- Research: NewsBiasDetect — a self-built 1,000-article annotated dataset, four fine-tuned
  transformers, best RoBERTa at 0.796 accuracy / 0.767 F1, written up as an IEEE-format paper.
  SemEval 2024 Task 1 semantic-relatedness system.
- Education: FAST-NUCES, BS Computer Science, 2020–2024, CGPA 3.44.

**Absences future work must not fabricate:**
- **No product screenshots exist yet.** The case-study image slots are placeholders. Do not invent,
  mock up, or generate fake product imagery for employer products.
- No testimonials, references, press, or endorsements.
- No open-source projects or public metrics of his own.
- No pricing, availability, or rates — despite the confirmed freelance audience.
- Every claim must trace to the résumé or a live public page.

## Product Principles

1. **Evidence over assertion.** Real figures, real role labels, real live links. If a claim cannot
   be traced to the résumé or a public page, it does not ship.
2. **Attribution is a correctness requirement, not etiquette.** Role labels on employer work;
   TheoAI maintained, never built.
3. **Credibility is the conversion mechanism.** Both hiring and consulting outcomes depend on a
   reviewer believing the evidence in the first screen, not on persuasion tactics.
4. **The artifact is the argument.** The site's own build quality is a work sample, so
   implementation quality is product value, not polish.
5. **Nothing may read as generated.** The user's binding acceptance criterion.

## Accessibility & Inclusion

No user-specific accessibility need was established. A **WCAG AA** contrast target and full keyboard
operability were adopted as the project's own standard, alongside: all motion must be disabled under
`prefers-reduced-motion`, and all content — including the animated figures — must read correctly
with JavaScript disabled. Reviewers may open the site on any device, so it must hold at 375, 768 and
1440 px with no horizontal scrolling.
