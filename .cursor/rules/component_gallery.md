---

## title: "Component Gallery (Refactoring UI)"

description: "A curated breakdown of commonly used UI components with visual, spacing, and usability guidance. Based on Refactoring UI by Adam Wathan & Steve Schoger." tags: ["components", "refactoring-ui", "design-system", "ui-library"]

# 🧩 Component Gallery — Refactoring UI

This guide showcases commonly used UI components and how to visually polish them for modern design systems.

---

## 🔘 1. Buttons

### ✅ Tips

- Make them **big, obvious, tappable**
- Use consistent padding (e.g. `.px-4 py-2`, `.rounded-lg`)
- Don't rely solely on color — **include icons, text, or border**

```tsx
<Button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
```

### ❌ Common Mistakes

- Tiny click areas
- Ambiguous colors
- Lack of hover or disabled states

---

## 📥 2. Inputs & Forms

### ✅ Tips

- Always pair with **clear labels**
- Add focus state (`outline`, `ring`, etc.)
- Use descriptive placeholders sparingly
- Group fields with spacing, not borders

```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">Email</label>
  <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-2" />
</div>
```

---

## 🏷️ 3. Badges / Tags

### Use for:

- Status (`Active`, `New`)
- Categorization (`Design`, `Dev`)

```tsx
<span className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2 py-1 text-xs font-medium">Active</span>
```

---

## 📦 4. Cards

### ✅ Tips

- Use **padding + shadow + rounded corners**
- Provide **clear hierarchy**: title → body → CTA
- Keep them simple, don’t cram info

```tsx
<Card>
  <CardHeader>Starter Plan</CardHeader>
  <CardBody>$29/mo - Best for freelancers</CardBody>
  <CardFooter>
    <Button>Choose Plan</Button>
  </CardFooter>
</Card>
```

---

## 🧭 5. Navigation Menus

- Vertical menus: Good for sidebars
- Horizontal: Ideal for headers

> Use consistent spacing, active indicators, and hover states.

```tsx
<nav className="flex gap-6 text-sm text-gray-700">
  <Link className="hover:text-black" href="/pricing">Pricing</Link>
  <Link className="hover:text-black" href="/about">About</Link>
</nav>
```

---

## 💬 6. Testimonials

- Use **real human names and photos**
- Highlight a short, punchy quote
- Add subtle design: shadow, quote icon, or gradient

```tsx
<div className="bg-white p-6 rounded-xl shadow-md">
  <p className="italic">“ClickRevamp transformed our site — 2x more leads!”</p>
  <div className="mt-4 text-sm text-gray-600">— Anna R., SaaS Founder</div>
</div>
```

---

## 🧱 7. Sections & Layout Blocks

- Use consistent max-width (e.g. `max-w-7xl mx-auto`)
- Combine `grid`, `flex`, `space-y-*` or `gap-*` utilities

```tsx
<section className="py-16 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold">Why Choose Us</h2>
    <p className="mt-4 text-gray-600">Beautiful design + serious performance</p>
  </div>
</section>
```

---

## 🧠 Design Reminders

- **Whitespace = clarity**
- Group related elements visually (not just semantically)
- Use soft shadows + subtle borders (no harsh `#000` outlines)

---

## ✅ Final Checklist for Components

-

---

## 📚 Source

- *Refactoring UI* — Adam Wathan & Steve Schoger
- [https://refactoringui.com/book/](https://refactoringui.com/book/)

