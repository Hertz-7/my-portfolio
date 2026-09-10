---
name: Mohammad Aosaf Portfolio
description: Dark teal-accented editorial portfolio for a senior AI/full-stack engineer
colors:
  ground: "#04121A"
  ground2: "#071C25"
  hair: "#143038"
  type: "#E6F2F3"
  prose: "#BFD2D6"
  dim: "#7B979E"
  accent: "#2FC9C2"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Georgia, serif"
    fontSize: "clamp(2.1rem, 4.7vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Bricolage Grotesque, Georgia, serif"
    fontSize: "clamp(1.45rem, 2vw, 2.05rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.014em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.74
    letterSpacing: "0.005em"
  label:
    fontFamily: "IBM Plex Mono, Courier New, monospace"
    fontSize: "9–10px"
    fontWeight: 400
    letterSpacing: "0.16–0.22em"
    case: uppercase
rounded:
  sm: "2px"
  card: "12px"
spacing:
  sm: "0.25rem"
  md: "0.5rem"
  lg: "1rem"
  xl: "1.5rem"
  2xl: "2rem"
  3xl: "3rem"
  4xl: "4rem"
components:
  button-filled:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-ghost:
    textColor: "{colors.dim}"
    borderColor: "{colors.hair}"
    borderWidth: "1px"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-ghost-hover:
    textColor: "{colors.accent}"
    borderColor: "{colors.accent}"
  tag:
    textColor: "{colors.dim}"
    borderColor: "{colors.hair}"
    borderWidth: "1px"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  card:
    backgroundColor: "{colors.ground2}"
    borderColor: "{colors.hair}"
    borderWidth: "1px"
    rounded: "{rounded.card}"
    padding: "1.5rem–2rem"
  nav-link:
    textColor: "{colors.dim}"
    hoverTextColor: "{colors.accent}"
    fontFamily: "IBM Plex Mono, Courier New, monospace"
    fontSize: "10px"
    letterSpacing: "0.18em"
    case: uppercase
---

# Design System: Mohammad Aosaf Portfolio

## Overview

**Creative North Star: "The Deep Station"**

A subterranean control room where every signal earns its place. Dark teal depths create a focused, engineered atmosphere — the portfolio of someone who builds production systems, not presentations. The aesthetic is evidence-logged and deliberate: no decoration without function, no flair without proof.

The visual grammar is editorial and restrained. A near-black ground anchors everything; a single cool teal accent (`#2FC9C2`) operates as a precision tool — applied to exactly one phrase in the H1, section labels, CTAs, and focus rings. Its rarity is the point. Typography mixes a distinctive display grotesque (Bricolage Grotesque) for headlines with a workhorse body sans (IBM Plex Sans) and an information-dense mono label face (IBM Plex Mono). The four-tier text colour system (`--type` / `--prose` / `--dim` / `--accent`) is a strict codebase rule that shapes every text decision.

**Key Characteristics:**
- Abyssal teal-black palette with single luminous accent — no secondary colour dilution
- Flat surfaces with tonal layering (ground → ground2 → hair) — zero decorative shadows
- Mono uppercase labels at tight tracking (0.16–0.22em) create technical authority
- Display headline in Bricolage Grotesque with strong negative tracking (-0.028em)
- Four-tier text system enforced across all components: `--type` headings / `--prose` body / `--dim` labels / `--accent` CTAs

## Colors

Deep teal-black palette anchored by a single luminous accent. The palette is deliberate and narrow — every colour has a specific role with no redundancy.

### Primary / Accent
- **Abyssal Teal** (#2FC9C2): Used on exactly one phrase in the H1 (`production AI systems`), section eyebrows, CTAs, hover states, and `::focus-visible` rings. Its scarcity is structural — not a preference, a rule.

### Neutrals
- **Deep Ground** (#04121A): Page background. The abyss.
- **Surface Ground** (#071C25): Card backgrounds, preview panels, elevated containers. One step tonal above ground.
- **Hairline** (#143038): All borders — 1px hairlines separating sections, cards, nav elements. The only separator language.
- **Type** (#E6F2F3): Headings, emphasized words, strong body text.
- **Prose** (#BFD2D6): All body copy. One step down from type — readable but not competing.
- **Dim** (#7B979E): Mono labels, eyebrows, meta, captions. Never used for body copy.

**The One Voice Rule.** The accent appears on ≤10% of any given screen. Its rarity is the point — it marks what matters.

## Typography

**Display Font:** Bricolage Grotesque (Google Fonts, variable `--font-display`) with Georgia serif fallback.
**Body Font:** IBM Plex Sans (Google Fonts, variable `--font-body`) with system-ui fallback.
**Label/Mono Font:** IBM Plex Mono (Google Fonts, variable `--font-mono`) with Courier New fallback.

**Character:** Editorial authority with engineering precision. The Bricolage Grotesque display face brings distinctive, slightly condensed headlines with strong negative tracking. IBM Plex Sans carries long-form body at a comfortable 1.74 line-height. IBM Plex Mono labels everything operational — nav, tags, metadata — in tight uppercase tracking that signals control and specificity.

### Hierarchy
- **Display** (700, clamp 2.1–3.6rem, line-height 1.08, tracking -0.028em): H1 hero headline only. Used once per page.
- **Headline** (700, clamp 1.45–2.05rem, line-height 1.1, tracking -0.014em): Work entry titles, section headings inside cards.
- **Body** (400, 1.02rem, line-height 1.74, tracking 0.005em): All prose. Max line length 62ch — comfortable reading measure.
- **Label** (400, 9–10px, tracking 0.16–0.22em, uppercase): Mono labels for nav, tags, eyebrows, meta, CTAs.

**The Mono Label Rule.** All UI chrome — nav links, tags, section labels, buttons — uses IBM Plex Mono in uppercase at tight tracking. Body never uses mono. This separation is inviolable.

## Layout

Single-column sections with contained max-width (1120px) on large viewports. 8px base spacing unit. Sections breathe with generous vertical padding (4xl–6xl / 16–24vh) while internal components stay tight (lg–xl / 1–1.5rem).

The **Work Index** is the primary interactive surface: a 1.1fr/0.9fr split grid — left column for tab-style entry list, right column for a live preview panel that updates on selection. Active rows translate 3.5px right on selection. The grid collapses to stacked at lg breakpoint.

Responsive strategy: mobile-first. The header goes full-width with compact padding. The Work Index stacks vertically on mobile. Hero text max-width is 24ch to prevent unwieldy display headlines.

## Elevation & Depth

**No shadows.** Depth is achieved entirely through tonal layering and hairline borders. The palette has three tonal steps (ground → ground2 → hair) that differentiate surfaces without any shadow vocabulary. This is a deliberate choice: a flat, engineered aesthetic that matches the "builds production systems" positioning.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. No shadow under any element by default. When an elevated state is needed, reach for `ground2` background before adding shadow.

## Shapes

Corner radius is deliberately minimal and functional:
- **2px** (`rounded-[2px]`): All buttons, ghost links, focus rings — the default corner language.
- **12px** (`rounded-xl`): Cards and ScrollStack items only — the one exception where slightly softer corners aid scanability.

**The Hairline Border Rule.** All separation uses 1px `--hair` borders. No thicker, no coloured left-border accent on cards, no gradient dividers.

## Components

### Buttons
- **Filled (primary):** Background `#2FC9C2`, text `#04121A`. 2px radius. Padding 10px 20px. Mono uppercase label at 10px / 0.18em tracking. Hover: opacity 0.9. Focus: 2px `--accent` ring with 2px `--ground` offset.
- **Ghost:** Text `--dim`, 1px `--hair` border. Hover: border and text shift to `--accent`. 2px radius. Used for secondary actions and inline text links (PlainLink).

### Navigation
- Sticky top header, 62px height. Mono uppercase labels at 10px / 0.18em tracking. `--dim` at rest, `--accent` on hover/active. 1px `--hair` bottom border. Backdrop blur (`backdrop-blur-md`) on a semi-transparent ground background.

### Tags / Chips
- Mono uppercase text at 9px / 0.16em tracking. `--dim` text on 1px `--hair` border. 2px radius. Used inside work entry preview panels.

### Cards / Containers
- Background: `--ground2`. 1px `--hair` border. 12px radius. Internal padding: 1.5–2rem.
- Preview panel in Work Index: `--ground2` background, 1px `--hair` border, 6–8 padding.

### Work Index
- Two-column grid (1.1fr left tabs, 0.9fr right preview). Active row shifts 3.5px right with `--type` colour on title and `--accent` on role label. Inactive rows: `--dim` for both. Keyboard navigable (arrow keys). Tab-style interaction without tab styling.

### Skip Link
- Screen-reader-only by default. On focus: `--accent` background, `--ground` text, mono 10px uppercase, 2px radius. Positioned top-left.

## Do's and Don'ts

### Do:
- **Do** use the accent `#2FC9C2` exclusively for CTAs, focus rings, active states, and the single emphasized headline phrase.
- **Do** use IBM Plex Mono in uppercase for all UI chrome (nav, tags, labels, buttons).
- **Do** enforce the four-tier text colour system: `--type` for headings, `--prose` for body, `--dim` for labels, `--accent` for active/emphasis.
- **Do** use `--ground2` background to elevate surfaces from `--ground` — this is the only depth mechanism.
- **Do** use 1px `--hair` borders for all separations.

### Don't:
- **Don't** add shadows to any element. Depth comes from tonal layering.
- **Don't** use `--dim` for body copy — it is labels only.
- **Don't** use `--accent` for decorative purposes. Its scarcity is structural.
- **Don't** use gradient text. Emphasis comes from weight, colour, or size — not gradient.
- **Don't** use animated backgrounds, scramble/decode headlines, node graphs, or floating pill nav — explicitly ruled out in the product brief.
- **Don't** use section numbers (01/02/03) or kicker eyebrows above headings.
- **Don't** use more than one accent colour.
