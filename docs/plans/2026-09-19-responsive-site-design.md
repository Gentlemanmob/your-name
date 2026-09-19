# Responsive Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make every page usable on phones, tablets, short screens, and desktop displays without changing the site's content.

**Architecture:** Add one shared responsive stylesheet and one shared navigation script, then keep page-specific layout rules in each existing stylesheet. Preserve the current static HTML/CSS/JavaScript structure and existing desktop appearance.

**Tech Stack:** HTML5, CSS media queries, vanilla JavaScript

---

### Task 1: Shared mobile navigation

**Files:**
- Create: `css/responsive.css`
- Create: `js/navigation.js`
- Modify: `index.html`, `story.html`, `characters.html`, `music.html`, `gallery.html`

1. Add an accessible menu button at runtime for pages with a header navigation.
2. Collapse navigation below 768px and provide 44px minimum touch targets.
3. Close the menu on link selection, outside click, Escape, and viewport expansion.

### Task 2: Page-specific responsive layouts

**Files:**
- Modify: `css/home.css`, `css/story.css`, `css/characters.css`, `css/music.css`, `css/gallery.css`
- Modify: `index.html`

1. Replace the homepage media embed with a responsive video element.
2. Stack story, player, and character content on small screens.
3. Make character and gallery collections touch-scrollable or fluid.
4. Add short-screen and reduced-motion handling.

### Task 3: Interactive story mobile support

**Files:**
- Modify: `css/story-interactive.css`
- Modify: `js/story-interactive.js`
- Modify: `story-interactive.html`

1. Fit controls within dynamic viewport and safe-area insets.
2. Make subtitles scroll safely on short screens.
3. Repair invalid quote characters that prevent the interactive story from loading.

### Task 4: Verification

1. Run JavaScript syntax checks for all scripts.
2. Check local asset references and whitespace errors.
3. Review the resulting diff to ensure only intended site files changed.
