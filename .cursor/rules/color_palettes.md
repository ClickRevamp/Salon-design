---

## title: "Color Palettes (Refactoring UI)" description: "A distilled reference on choosing, combining, and applying color in modern UI design. Based on Refactoring UI by Adam Wathan & Steve Schoger." tags: ["design", "color", "refactoring-ui", "visual-design"]

# 🎨 Color Palettes — Refactoring UI

A no-fluff breakdown of how to craft modern, beautiful, and functional color palettes. This system helps you:

- Avoid harsh colors
- Build scalable UI token systems
- Maintain accessibility and elegance

---

## 🌈 1. Base Color Principles

- **Avoid bright, saturated base colors.**

  - Use **muted versions** (less saturation, lower brightness).
  - e.g., instead of `#00FF00`, use something like `#22C55E`.

- **Pick your base color**, then derive tints/shades using opacity or lightness.

- **Use HSL for control** over lightness & saturation.

> "Muted ≠ dull. Muted = flexible + modern."

---

## 🪄 2. Color Roles in UI

| Role        | What it does                   | Example Use          |
| ----------- | ------------------------------ | -------------------- |
| **Primary** | Brand highlight, main actions  | Buttons, links       |
| **Accent**  | Optional flair / brand flavor  | Tags, callouts       |
| **Gray**    | Structure, readability         | Backgrounds, borders |
| **Success** | Positive feedback              | Alerts, badges       |
| **Error**   | Destructive or invalid states  | Errors, warnings     |
| **Warning** | Caution or intermediate states | Banners, toasts      |

---

## 🎯 3. The Grayscale Backbone

- Use a **well-spaced grayscale ramp** — not just white to black.

- Build with **4–6 levels**:

  ```text
  #F9FAFB → #F3F4F6 → #E5E7EB → #D1D5DB → #9CA3AF → #6B7280 → #374151
  ```

- Use the lightest shades for backgrounds, darker ones for text.

> Don’t use pure black `#000` or pure white `#FFF`. They’re too harsh.

---

## 🎨 4. Building a Palette from One Color

✅ Steps:

1. Choose a **desaturated, darker base** color (e.g. `#3B82F6`).
2. Adjust lightness to make:
   - Lighter version (hover background, highlights)
   - Darker version (hover text, active state)
3. Add a transparent variant (e.g. `rgba(59,130,246,0.1)`) for subtle UI effects.

🧠 Use Tailwind's HSL scale or tools like:

- [Coolors](https://coolors.co/)
- [Leonardo](https://leonardocolor.io/)
- [Tailwind Shades](https://javisperez.github.io/tailwindcolorshades/)

---

## 🧪 5. Tips for Applying Color

- Use **color sparingly** — let layout and spacing do most of the work.
- Limit vivid colors to **1 or 2 places per screen** (CTA, highlight).
- Avoid colored text for large paragraphs.

### 💡 Functional Use > Decorative Use

Color should guide and communicate — not decorate without purpose.

---

## 🔒 6. Accessibility & Contrast

### Minimum contrast ratios:

- 4.5:1 for normal text
- 3:1 for large text (18pt+ or bold 14pt)

Use tools like:

- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Tanaguru Contrast Finder](https://contrast-finder.tanaguru.com/)

> Rule of thumb: Light bg → dark text. Dark bg → light text.

---

## 🧰 7. Practical Color Systems (Tailwind Example)

```ts
export const colors = {
  primary: '#3B82F6',
  primaryLight: '#60A5FA',
  primaryDark: '#1D4ED8',
  primaryTransparent: 'rgba(59,130,246,0.1)',

  grayLight: '#F3F4F6',
  gray: '#9CA3AF',
  grayDark: '#374151',

  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
};
```

---

## ✍️ Notes from Refactoring UI

- "Start from a single strong color. Then let desaturation and spacing do the rest."
- You can have a beautiful UI with just 3 colors and well-crafted spacing & typography.
- Use semi-transparent white/black layers (`rgba()`) to blend or darken areas.

---

## ✅ Final Checklist

-

---

## 📚 Sources

- *Refactoring UI* — Wathan & Schoger
- [https://refactoringui.com/book/](https://refactoringui.com/book/)
- [https://tailwindcss.com/docs/customizing-colors](https://tailwindcss.com/docs/customizing-colors)

