# opencode Prompts — P0 → P6

Paste one block per session. **Every prompt assumes `PLAN.md` is in the repo root.**

**Model:** run **MiniMax M2.7** (`/models`) for every phase, P0 through P6. It handles all of this
comfortably. Review every diff.

**Budget note:** M2.7 is $0.21/$0.84 per 1M tokens. If the $5 OpenRouter credit runs short, move
P0, P1, P4 and P5 — the boring bulk — to **DeepSeek V4 Flash** ($0.05/$0.16, same quality tier,
~5× cheaper on output) and keep M2.7 for P2, P3 and P6. Do not bother with MiniMax M3.

**Standing rules:** take all content from `PLAN.md`, never invent copy or metrics, obey the
"Rejected — do not build these" list in §3, and ask before adding a dependency that isn't listed.

**Run one phase per session.** Review the diff before moving to the next. Do not paste two phases
at once, and do not ask opencode to "follow the plan" open-endedly — it will attempt all seven and
skip every checkpoint.

---

## START HERE — ONLY if P0 has not run yet

> **P0 is already done** (commit `0d31bc1`, Next 16.3.4 scaffolded, deployed on Vercel from
> branch `master`). Skip this block and the P0 block — go straight to **P1**.
>
> Kept for reference in case the project is ever rebuilt from scratch:

```
Read these three files in full before doing anything:
  PLAN.md        - the spec: positioning, design direction, and all real content
  COMPONENTS.md  - which components to use and where; which are paid (never install those)
  PROMPTS.md     - the build phases, P0 through P6

Context: this is a NEW site, built from scratch in this directory. There is NO existing app to
update. The only files here are those three specs plus hero-concept.html, which is a STATIC
VISUAL REFERENCE ONLY - do not edit it, do not import from it, do not treat it as the app.

All content comes from PLAN.md. Never invent copy, metrics, company names or claims.

Then execute ONLY phase P0 from PROMPTS.md. Do not begin P1 or any later phase.
When P0 is complete, stop and report:
  - the exact commands you ran
  - anything I must do manually to deploy to Vercel
  - confirmation that all three fonts load with no silent fallback
  - confirmation that all seven colour tokens are defined in globals.css
```

After that, paste P0's own block if it asks for more detail, then P1, P2 ... one at a time.

**Visual reference to match:** https://claude.ai/code/artifact/e4aeb711-9d2d-4cb3-9a33-01222110be67

---

## P0 — Scaffold, tokens, deploy

```
Read PLAN.md fully before doing anything, especially §3.

1. Create a Next.js 16 app in the current directory: App Router, TypeScript, Tailwind CSS,
   ESLint, pnpm. Do not create a nested subfolder.
2. Install: framer-motion (motion), next-mdx-remote, gray-matter, lucide-react.
3. Initialise shadcn/ui (default style, CSS variables enabled).
4. Fonts via next/font/google, exposed as CSS variables:
   - Bricolage Grotesque (variable, 400..800) -> --font-display  (headings)
   - IBM Plex Sans (400, 500, 600)            -> --font-body     (all prose)
   - IBM Plex Mono (400, 500)                 -> --font-mono    (labels only)
5. In globals.css define the SEVEN "Teal" tokens from PLAN.md §3 as CSS custom properties:
   --ground #04121A, --ground2 #071C25, --hair #143038, --type #E6F2F3, --prose #BFD2D6,
   --dim #7B979E, --accent #2FC9C2. Map them into the Tailwind theme.
   This is a committed dark design: set body background to --ground and body color to --prose.
6. Replace the default page with a token/type proof: all three faces at a few sizes, and swatches
   of all seven colours with their token names, so I can confirm fonts load and nothing falls
   back silently.
7. git init, .gitignore, initial commit.

Constraints: no hardcoded hex outside globals.css. No lorem. Report the exact commands you ran
and what I must do manually to deploy to Vercel.
```

---

## P1 — Design system & shell

```
Read PLAN.md §3. System and shell only — no page content.

1. FOUR-TIER TEXT COLOUR. Implement it as the rule of the codebase:
   --type   headings, H1, big figures, emphasised words
   --prose  ALL body copy
   --dim    mono labels, eyebrows, meta, captions ONLY
   --accent one phrase in the H1, section labels, CTA, hovers, focus rings
   Body copy must NEVER be --dim. This bug shipped twice in earlier drafts and is the main reason
   text looked poorly styled. Add a short comment in globals.css stating this rule.

2. THREE TYPE ROLES, strictly separated:
   - DISPLAY (Bricolage Grotesque 700): H1, project names, figures. Sentence case — NOT uppercase.
     line-height 1.08, letter-spacing -.028em, text-wrap: balance. It is a variable font — leave
     the width axis at its default, do not stretch it.
   - BODY (IBM Plex Sans 400): all prose. 1.02rem, line-height 1.74, letter-spacing .005em,
     max-width 62ch, text-wrap: pretty.
   - MONO (IBM Plex Mono): eyebrows, nav, buttons, ticker, captions, tags ONLY. 9.5-10.5px,
     letter-spacing .16-.24em, uppercase.
   Never set prose in the mono. Display and body are BOTH sans, so hierarchy comes from character,
   weight and tracking — Bricolage 700 at -.028em against Plex Sans 400 at .005em. Keep that gap
   wide or they read samey. IBM Plex Sans and IBM Plex Mono are one family, so body and labels
   already agree with each other.

3. Spacing: one 8px-based scale. Sibling layout uses flex/grid with gap, never per-element margins.

4. Components: Container (max-width 1120px, responsive padding), Section (with a mono eyebrow
   label in --accent), Rule (hairline), Button (filled --accent, --ground text, border-radius 2px
   — NOT a pill), PlainLink (mono, hairline underline, hover -> --accent).

5. Header: a plain sticky HAIRLINE TOP BAR — 62px tall, 1px --hair bottom border, translucent
   --ground background with backdrop blur. "MOHAMMAD AOSAF" left in mono; Work / Numbers /
   Contact right in mono. Do NOT build a floating glassy pill nav — that was rejected.

6. Footer: hairline top, mono, email + GitHub + LinkedIn left, "Islamabad, PK" right.
   No phone number — deliberate.

7. Global reduced-motion utility; visible --accent focus rings everywhere.

Do not add cards with a default radius+shadow on every block, accent rails, or gradients.
```

---

## P2 — Professional hero

```
Read PLAN.md §2 and §3 ("Hero spec") and follow the exact copy and values there.

DO NOT BUILD, under any circumstances: an animated canvas background (dot field, scan band,
aurora, plasma), a scramble/decode or cycling headline, a node graph or orbit diagram, a centered
mega-caps poster hero, or a scroll-velocity marquee. All of these were built and rejected.

Build:

1. Hero section, LEFT-ALIGNED, single column, inside the 1120px Container. Size it to its
   content — never 100vh.

2. Mono eyebrow: "AI & FULL-STACK ENGINEER — ISLAMABAD, PK"

3. H1 in the DISPLAY face (Bricolage Grotesque 700), SENTENCE CASE, clamp(2.1rem, 4.7vw, 3.6rem),
   line-height 1.08, letter-spacing -.028em, max-width 24ch, colour --type:
   "I build production AI systems — from multi-agent reasoning to the platform underneath."
   Wrap ONLY "production AI systems" in the accent colour (an <em> with font-style: normal).

4. Supporting paragraph in the BODY sans, max-width 62ch, colour --prose. Exact copy from
   PLAN.md §2. Set "ChironOM" and "QLU.ai" in --type at weight 600.

5. CTA row: Button "View work" (border-radius 2px), then PlainLinks "Résumé" and "Get in touch"
   (mailto:mohammadaosaf@gmail.com).

6. CREDENTIAL STRIP — four columns separated by vertical 1px --hair borders, with a --hair top
   border above the whole strip. Each column: a mono --dim label and a line of --type text.
   Use the exact four pairs in PLAN.md §3 (Current / Previously / In production / Education).
   On screens under 880px collapse to two columns and keep the hairlines coherent.

7. Stack strip below the hero: full-width inside the Container, 1px --hair top and bottom,
   the stack list from PLAN.md §5 in mono --dim, duplicated once and drifting left at a slow
   constant ~0.3px per frame. NO scroll coupling, no acceleration. Clip the overflow.

Optional: a static SVG-turbulence grain overlay at 3% opacity, fixed, pointer-events none.
Nothing else ambient.

Under prefers-reduced-motion the stack strip stops. Everything is fully visible at rest on load.
```

---

## P3 — Selected work: index + case studies

```
Read PLAN.md §4 ("Component patterns") and §5 ("Work"). Use the content verbatim.

1. MDX pipeline: case studies in content/work/*.mdx via gray-matter + next-mdx-remote/rsc.
   Typed frontmatter: title, roleLabel, period, summary, tags[], links[], order.

2. HOME "SELECTED WORK" INDEX — the skiper80 Projects Showcase pattern, two columns
   (1.1fr / 0.9fr):
   - Left: a list of hairline-separated rows. Each row is a <button> showing the project name in
     the DISPLAY face (clamp 1.45rem-2.05rem, colour --dim by default) and the ROLE LABEL beneath
     it in mono.
   - Right: a preview panel — 1px --hair border, --ground2 background — containing a 16:10
     screenshot slot, the project name in the display face (--type), a summary in the BODY sans
     (--prose), and the tags as mono bordered chips.
   - Selecting a row swaps the panel contents, sets that row's name to --type, its role label to
     --accent, and nudges it 14px right.
   - IT MUST RESPOND TO HOVER, CLICK, TAP AND KEYBOARD. Bind pointerenter, click and focus. Use
     role="tablist" / role="tab" / aria-selected. Keep the last selection — do NOT reset on
     mouse-out. Hover-only breaks on touch and in narrow panes.
   - Default the first item (ChironOM) selected on load.
   - Under 880px collapse to one column with the list first and the panel after it.
   - Four entries in this order: ChironOM, QLU.ai, TheoAI, NewsBiasDetect. Use the "Index summary",
     "Role label" and "Tags" lines from PLAN.md §5 exactly.

3. Case-study pages at /work/[slug], structured Problem -> Approach -> What I built -> Stack ->
   Impact. Prose in the body sans at 62ch; figures and labels in mono.
   Write two, from PLAN.md §5 "Case-study detail":
   - content/work/chironom.mdx  (role label: "MindHYVE.ai — architected & shipped")
   - content/work/qlu.mdx       (role label: "Senior Full Stack Engineer — led a team of 3")

4. LIVE LINKS — see PLAN.md §5 "Live links". All FIVE must render as real anchors. Do not omit
   any, and do not collapse the QLU sub-pages into the root URL:
     https://chirongrid.ai/om/        -> ChironOM index row AND its case-study header
     https://www.qlu.ai/              -> QLU index row AND its case-study header
     https://www.qlu.ai/outreach      -> inside the QLU case study, on the Outreach automation section
     https://www.qlu.ai/dialer        -> inside the QLU case study, on the Dialer / AI Voice SDR section
     https://chat.theogrid.ai/        -> TheoAI index row only
   The `links[]` frontmatter field is REQUIRED and must be non-empty for every entry; the template
   renders each as a mono "Visit ↗" affordance with target="_blank" rel="noopener noreferrer".
   Mohammad owned the Outreach architecture and the Twilio Dialer specifically, which is why those
   two features get their own live links rather than only the root domain.

5. TheoAI is an INDEX ENTRY ONLY — no case-study page, and its row must not link anywhere except
   https://chat.theogrid.ai/. Describe it as MAINTAINED, never "built".

6. Read COMPONENTS.md before installing anything. For case-study pages install EXACTLY ONE
   third-party component: React Bits "Scroll Stack", taken from the FREE catalog at reactbits.dev
   (Components section) — NOT from pro.reactbits.dev, which is the paid docs. Use it for the
   "What I built" highlights: pinned cards that stack and dissolve on scroll.
   Install it by the manual copy method: open its Code tab, set the toggles to TS + TW, copy the
   source into components/, and install only the dependencies that its Code tab lists.
   Do not install skiper80, skiper29 or skiper104 — all three are Pro/paid. skiper80 is hand-built
   in item 2 above; skiper104's effect is delivered free in P4 item 5b; skiper29 is deferred.
   The work index in item 2 is hand-built with Framer Motion, not purchased.

Critical: every entry displays the ROLE LABEL. These are employer products — nothing may imply
ownership or founding.
```

---

## P4 — In numbers, About, Skills, Experience, Projects

```
Read PLAN.md §5. All content comes from there.

1. "IN NUMBERS" section: the four figures from PLAN.md §5 in the DISPLAY face with
   font-variant-numeric: tabular-nums and colour --type; captions in mono --dim.
   Each counts up once when it enters view (~950ms ease-out) and never re-runs.
   IMPORTANT: render the REAL final value in the HTML and let JS animate from a lower number —
   so with JS disabled, or under prefers-reduced-motion, the correct figures still show.
2. About: 2-3 short first-person paragraphs, BODY sans, --prose, 62ch. Specific and understated.
   Banned: "passionate", "cutting-edge", "innovative solutions", "tech enthusiast".
3. Skills: the six groups from PLAN.md in that order with the exact items. Mono tags under mono
   group labels, hairline-separated. Not cards.
4. Experience: timeline of the four roles with dates. Numbered markers are fine HERE because this
   genuinely is a sequence. Thy Reality is a timeline entry only.
5. Projects: NewsBiasDetect and SemEval 2024 Task 1 per PLAN.md §5. Figures in mono, tabular-nums.
6. Education: FAST-NUCES, BS Computer Science, 2020-2024, CGPA 3.44.

5b. PROJECTS GRID REVEAL — the free replacement for skiper104 (which is Pro-only; do not buy it).
   Lay the Projects cards out as a plain CSS grid and wrap each card in React Bits
   "Animated Content", taken from the free catalog at reactbits.dev/animations/animated-content.
   Install its one dependency: gsap. Props:
     direction="vertical"  distance={24}  duration={0.5}  ease="power3.out"
     initialOpacity={0}  animateOpacity  threshold={0.15}  delay={i * 0.06}
   Use distance 24, NOT the 100px default — 100px reads gimmicky at this scale.
   The server-rendered markup must be at full opacity: content must never stay invisible if the
   IntersectionObserver never fires, and the grid must read correctly with JavaScript disabled.
   Apply this to the PROJECTS GRID ONLY. Skills, Experience and the work index stay static.

Add no OTHER animation types. The home page motion budget is three behaviours total — stack strip,
count-up, and this Projects grid reveal — and it is now fully spent.
```

---

## P5 — Contact, résumé, SEO

```
Read PLAN.md.

1. Contact: email mohammadaosaf@gmail.com, GitHub github.com/Hertz-7,
   LinkedIn linkedin.com/in/mohammad-aosaf. Do NOT include a phone number — deliberate.
2. Résumé PDF in /public; download link in the hero CTA row and the footer.
3. Metadata via the Next.js Metadata API: title, description, canonical, Open Graph, Twitter.
   The title reads as a name, not a slogan.
4. Dynamic OG image with next/og using the tokens: --ground background, the display face
   wordmark, one mono line. TYPE ONLY — no diagram, no graph, no background animation.
5. sitemap.ts, robots.ts, favicon.
6. Vercel Analytics.

Verify the OG image renders and give me the URL to test it at.
```

---

## P6 — Polish & ship

```
Read PLAN.md §11 ("Definition of done") and close every item.

1. Accessibility: check every token pair against WCAG AA — especially --prose on --ground for body
   copy and --dim on --ground for labels. Keyboard-navigable throughout, visible --accent focus
   rings, skip-to-content link, aria-hidden on the grain layer, correct heading order, and the work
   index reachable and operable by keyboard.
2. Performance: next/image everywhere, font-display swap, audit the bundle, drop unused shadcn
   components and dead CSS. Target Lighthouse >=95 in all four categories.
3. Responsive at 375 / 768 / 1440. Nothing scrolls sideways except the clipped stack strip. Check
   the credential strip's hairlines at the 880px breakpoint and the work index's single-column
   collapse.
4. Motion audit: prefers-reduced-motion must stop the stack strip and the count-up, and every
   figure and section must read correctly with JavaScript disabled.
5. Fix all console errors and hydration warnings.
6. Grep the codebase for any hardcoded hex outside globals.css and for any prose set to --dim;
   fix what you find.
7. Run the honesty checklist in PLAN.md §6 against the rendered site and report item by item.

Then tell me exactly how to point a custom domain at this on Vercel.
```

---

## After P6

- Add a real screenshot to each case study, replacing the 16:10 slots.
- Confirm the 500k+ figure and architecture details are OK to state publicly before launch.
- Build a side product you own end to end and make it case study #3.

## Locked design choices

These are decided — do not substitute:
- **Palette: Teal** — `#04121A` / `#071C25` / `#143038` / `#E6F2F3` / `#BFD2D6` / `#7B979E` / `#2FC9C2`
- **Headline: Bricolage Grotesque** 700, line-height 1.08, letter-spacing -.028em
- **Body: IBM Plex Sans** 400, 1.02rem, line-height 1.74, letter-spacing .005em
- **Labels: IBM Plex Mono** (same family as the body face)

If they ever change again, swap only the seven values in `globals.css` and the
`next/font/google` imports plus their line-height / letter-spacing. Palette alternates
(Pine / Emerald / Moss) and face alternates are in PLAN.md §3.
