# Visual Assets for Module 02: JavaScript Fundamentals

This directory contains visual assets referenced in the module lessons.

## Required Assets

### async-diagram.png
**Referenced in:** Lesson 04 - Async & Promises (04-async-promises.md)

**Description:** A visual diagram illustrating the JavaScript event loop and asynchronous execution flow.

**Suggested content:**
- Call stack visualization
- Event loop cycle
- Callback queue
- Web APIs (setTimeout, fetch, etc.)
- Microtask queue vs Macrotask queue
- Visual flow showing how async operations are processed

**Dimensions:** Recommended 800x600px or larger for clarity

**Style notes:**
- Use clear arrows to show flow
- Color-code different components (e.g., stack in blue, queue in green)
- Include simple code examples alongside the diagram
- Make it age-appropriate for 7th-9th graders (not too technical)

---

### array-methods.png
**Referenced in:** Lesson 02 - Functions & Arrays (02-functions-arrays.md)

**Description:** A visual reference showing how different array methods work.

**Suggested content:**
- Map: Shows transformation of array elements (e.g., [1,2,3] -> [2,4,6])
- Filter: Shows selection of elements (e.g., [1,2,3,4] -> [2,4])
- Reduce: Shows aggregation (e.g., [1,2,3,4] -> 10)
- Find: Shows searching (highlights found element)
- ForEach: Shows iteration over elements

**Dimensions:** Recommended 1000x800px for comprehensive view

**Style notes:**
- Use visual representations (boxes, arrows)
- Include simple before/after examples
- Use consistent colors for input arrays vs output
- Label each method clearly
- Include return value types

---

## Creating These Assets

If you need to create these assets, consider using:
- Drawing tools: Figma, Sketch, Adobe Illustrator
- Diagramming tools: Lucidchart, Draw.io, Excalidraw
- Code-to-diagram tools: Carbon (for code screenshots)

## File Naming Convention

- Use lowercase with hyphens
- Use descriptive names
- Use PNG format for diagrams (supports transparency)
- Use JPG for photographs if needed

## Accessibility

When creating assets:
- Use high contrast colors
- Include alt text references in the lesson markdown
- Ensure text in images is readable at different sizes
- Consider color-blind friendly palettes

## Usage in Lessons

These assets are referenced using relative paths:
```markdown
![Async Diagram](assets/async-diagram.png)
```

Make sure all references in lesson files match the actual filenames in this directory.
