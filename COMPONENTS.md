# Component Manifest — what to use, where, and whether it costs money

> Single source of truth for third-party components. **Read this before P2, P3 or P4.**
> If a component is not in the "Build" table below, do not install it.

---

## 1. Build these (v1)

| # | Section / Route | Component | Source | Tier | How to get it |
|---|---|---|---|---|---|
| 1 | **Home — Selected work index** | Hover/click project index with a preview panel *(the skiper80 "Projects Showcase" pattern)* | **Hand-build** | free | Write it with Framer Motion + React state. ~40 lines. Spec is in `PROMPTS.md` P3 item 2. **Do not buy skiper80 for this.** |
| 2 | **Home — Stack strip** | Slow constant marquee | **Hand-build** | free | A `requestAnimationFrame` translateX loop, list duplicated once. ~15 lines. No library. |
| 3 | **Home — In numbers** | **Count Up** | React Bits (free) | free | Manual copy, see §3 |
| 4 | **/work/[slug] — highlights** | **Scroll Stack** — pinned cards that stack and dissolve | React Bits (free catalog) | free | Manual copy, see §3. ⚠️ The URL Mohammad sent (`pro.reactbits.dev/docs/components/scroll-stack`) is the **Pro** docs. The free catalog at `reactbits.dev` has Scroll Stack under **Components** — use that one. |
| 5 | **Home — Projects grid** | **Animated Content** — scroll reveal wrapper, one per card, staggered *(replaces skiper104)* | React Bits (free) | free | Manual copy, see §3. Requires `npm install gsap`. |

That's the whole v1 component budget. Items 1 and 2 are hand-built, so only **three** third-party
components get installed: Count Up, Scroll Stack and Animated Content.

### The skiper104 replacement, in detail

skiper104 is "a grid of cards that reveal content as you scroll". The free way to get exactly that:
a plain CSS grid, with each card wrapped in React Bits **`AnimatedContent`** and given a staggered
delay by index. Same effect, MIT-licensed, no attribution, no licence key.

Settings — restrained on purpose (the 100px default slide reads gimmicky at this scale):

```tsx
<AnimatedContent
  direction="vertical"
  distance={24}        // NOT the 100 default
  duration={0.5}
  ease="power3.out"
  initialOpacity={0}
  animateOpacity
  threshold={0.15}
  delay={i * 0.06}     // 60ms stagger per card
>
  {card}
</AnimatedContent>
```

Dependency: **`npm install gsap`** (React Bits states 1 required package).

Quieter alternative if the slide is still too much: **`FadeContent`** — opacity only, no movement,
optional `blur`. Confirm its dependency list on its own Code tab before installing.

**Engineering requirement:** the animation runs client-side, so the server-rendered markup must sit
at full opacity. Content must never be left permanently invisible if the IntersectionObserver never
fires, and the grid must read correctly with JavaScript disabled.

---

## 2. Deferred — not in v1

| Component | Why deferred |
|---|---|
| **skiper80 — Projects Showcase** | Skiper **Pro** (paid). The pattern is cheap to hand-build (item 1), so paying for it buys nothing. |
| **skiper29 — Siena parallax** (case-study opener) | Skiper **Pro** (paid), *and* a full-bleed parallax needs a strong hero image. The case studies currently have placeholder screenshot slots. Revisit once real screenshots exist. Free stand-in if wanted later: Skiper free *Oliver parallax* (skiper30). |
| **skiper104 — Scroll reveal grid cards** | **Confirmed Pro-only** — its page states "INSTALL VIA PRO CLI [REQUIRES A PRO LICENSE KEY]". **Replaced by a free equivalent** — see §1 item 5. Do not buy it. |

**Contradiction note:** an older draft mapped skiper104 onto the Projects/Skills grid while P4 said
"add no new animation types". Resolved as follows — the **Projects grid** gets the free scroll reveal
(§1 item 5), the **Skills** section stays **static**, and the home-page motion budget is raised from
two behaviours to three. That raise is deliberate and documented, not a drift.

If Mohammad does buy in: React Bits Pro is currently **50% off lifetime for Pakistan**, and Skiper
Pro would cover skiper80/29/104 in one licence.

---

## 3. How to install a React Bits component (free catalog)

There is no single install command — it's per-component copy-paste:

1. Open the component page on **reactbits.dev** (not pro.reactbits.dev) and switch to its **Code** tab.
2. Set the stack toggles to **TS** and **TW** (TypeScript + Tailwind) so the snippet matches this project.
3. Copy the source into `components/` as its own file.
4. Install whatever external deps that component's Code tab lists — some need `gsap`, some only
   `motion`. Install only what the component actually names.
5. Import and render it.

A CLI method also exists on the same page if preferred. Either way: **check the Code tab's
dependency list before installing anything.**

---

## 4. Licence obligations

- **React Bits** — MIT. No attribution required.
- **Skiper UI free components** — free for personal and commercial use, **but attribution to
  Skiper UI is required when using the free version.** Since v1 uses no Skiper components, no
  attribution is currently needed. **If any free Skiper component is added later, a credit must go
  in the site footer.** (Pro removes the attribution requirement.)
- Skiper's own note: most of its components are recreations of other people's work, not originals.

---

## 5. Motion budget (hard cap)

- **Home page: three behaviours, total** — the stack-strip drift, the count-up, and the Projects
  grid reveal. Nothing else. The work index is an *interaction*, not an animation, and doesn't count
  against this.
- The grid reveal is used on the **Projects grid only**. Do not apply it to Skills, Experience, the
  work index or the hero — one reveal, one section.
- **Each case-study page: one scroll composition** — Scroll Stack. Nothing else.
- Everything must disable under `prefers-reduced-motion`, and all content must read correctly with
  JavaScript disabled.

## 6. Never install

From React Bits' background catalog, these produce exactly the generated look being avoided:
**Aurora, Soft Aurora, Plasma, Plasma Wave, Galaxy, Iridescence, Liquid Chrome, Prismatic Burst,
Hyperspeed, Balatro, Ballpit.**

Also banned regardless of source: any animated canvas page background, any scramble/decode or
cycling headline (Decrypted Text, Scrambled Text, Rotating Text, Text Loop), any node-graph or
orbit visual, Magic Bento / Chroma Grid style bento grids, and cursor effects (Splash Cursor,
Blob Cursor, Ghost Cursor, Target Cursor).
