Sure! Below is the **ARIA Roles Cheat Sheet** converted into a **README** format that you can use in an IntelliJ IDEA project. This format includes Markdown syntax for easy readability.

---

# ARIA Roles Cheat Sheet for Playwright

This cheat sheet provides a list of ARIA roles and how to use them with Playwright's `getByRole` method. Playwright supports various ARIA roles to help you target elements based on their accessible roles, which are especially useful for accessibility testing.

---

## Common Roles

| Role        | Description                                               | Example HTML                                     |
|-------------|-----------------------------------------------------------|--------------------------------------------------|
| `button`    | Represents a clickable button.                           | `<button>Click Me</button>`                      |
| `checkbox`  | Represents a checkbox.                                   | `<input type="checkbox">`                        |
| `textbox`   | Represents a text input field.                            | `<input type="text">`                            |
| `searchbox` | Represents a search input field.                          | `<input type="search">`                          |
| `combobox`  | Represents a combobox (input with options, like a select).| `<input list="options">` (with a `<datalist>`)   |
| `radio`     | Represents a radio button.                               | `<input type="radio">`                           |
| `link`      | Represents a hyperlink.                                  | `<a href="#">Link</a>`                           |
| `listbox`   | Represents a listbox (select element).                   | `<select><option>Item</option></select>`         |
| `option`    | Represents an option in a listbox or optgroup.            | `<option>Item</option>`                          |
| `listitem`  | Represents an item in a list.                            | `<ul><li>Item</li></ul>`                          |
| `alert`     | Represents an alert message.                             | `<div role="alert">Message</div>`                |
| `dialog`    | Represents a dialog window.                              | `<div role="dialog">Dialog content</div>`        |
| `heading`   | Represents a heading element.                            | `<h1>Heading 1</h1>`                             |
| `progressbar`| Represents a progress bar.                              | `<progress value="50" max="100"></progress>`     |
| `slider`    | Represents a slider.                                     | `<input type="range">`                           |
| `tabpanel`  | Represents a tab panel (usually with tab navigation).     | `<div role="tabpanel">Tab content</div>`         |
| `tab`       | Represents a single tab in a tab list.                    | `<div role="tab">Tab</div>`                      |

---

## Container Roles

| Role           | Description                                                | Example HTML                                      |
|----------------|------------------------------------------------------------|---------------------------------------------------|
| `form`         | Represents a form.                                         | `<form>...</form>`                                 |
| `group`        | Represents a generic group of elements.                    | `<div role="group">...</div>`                     |
| `region`       | Represents a section of the page that is important.        | `<section role="region">...</section>`            |
| `presentation` | Represents an element used purely for layout purposes.     | `<div role="presentation">...</div>`              |
| `banner`       | Represents a page's banner region (typically header).      | `<header role="banner">Header content</header>`   |
| `navigation`   | Represents a section of navigation links.                  | `<nav role="navigation">...</nav>`                |
| `main`         | Represents the main content of the page.                   | `<main role="main">Main content</main>`           |
| `complementary`| Represents content related but not essential to the main content.| `<aside role="complementary">...</aside>`        |
| `footer`       | Represents a footer section.                               | `<footer role="contentinfo">Footer content</footer>` |

---

## Live Region Roles

| Role         | Description                                                | Example HTML                                      |
|--------------|------------------------------------------------------------|---------------------------------------------------|
| `alert`      | Represents an alert message that should be announced.      | `<div role="alert">Alert message</div>`           |
| `status`     | Represents a status message (e.g., loading indicator).     | `<div role="status">Loading...</div>`             |
| `marquee`    | Represents a scrolling text or similar effect.             | `<div role="marquee">Scrolling text</div>`        |

---

## Form Control Roles

| Role        | Description                                                | Example HTML                                      |
|-------------|------------------------------------------------------------|---------------------------------------------------|
| `input`     | Represents an input field (same as `textbox` but more general). | `<input>`                                        |
| `select`    | Represents a dropdown/select list.                         | `<select><option>Item</option></select>`          |
| `textarea`  | Represents a multi-line text input field.                  | `<textarea></textarea>`                          |
| `button`    | Represents a clickable button.                             | `<button>Click Me</button>`                       |
| `checkbox`  | Represents a checkbox input.                               | `<input type="checkbox">`                         |
| `radio`     | Represents a radio button input.                           | `<input type="radio">`                            |

---

## Widget Roles

| Role        | Description                                                | Example HTML                                      |
|-------------|------------------------------------------------------------|---------------------------------------------------|
| `slider`    | Represents a slider (range input).                         | `<input type="range">`                            |
| `progressbar`| Represents a progress bar.                                 | `<progress value="70" max="100"></progress>`      |
| `spinbutton`| Represents a spin button (numeric input with up/down controls). | `<input type="number">`                          |
| `menu`      | Represents a menu of items.                                | `<ul role="menu">...</ul>`                        |
| `menuitem`  | Represents an item in a menu.                              | `<li role="menuitem">Item</li>`                   |
| `tabpanel`  | Represents a panel within a tab set.                       | `<div role="tabpanel">Tab content</div>`          |

---

## Complex Widget Roles

| Role        | Description                                                | Example HTML                                      |
|-------------|------------------------------------------------------------|---------------------------------------------------|
| `combobox`  | Represents a combo box (input with a dropdown).            | `<input list="options">`                          |
| `listbox`   | Represents a list box (multi-select input).                | `<select multiple><option>Item</option></select>` |
| `grid`      | Represents a grid of items (like a table).                 | `<div role="grid">...</div>`                      |
| `table`     | Represents a table.                                        | `<table>...</table>`                               |
| `row`       | Represents a row in a table.                               | `<tr role="row">...</tr>`                         |
| `cell`      | Represents a cell in a table.                              | `<td role="cell">Data</td>`                       |

---

## Document Structure Roles

| Role        | Description                                                | Example HTML                                      |
|-------------|------------------------------------------------------------|---------------------------------------------------|
| `heading`   | Represents a heading for a section.                        | `<h1>Heading</h1>`                                |
| `section`   | Represents a generic section.                              | `<section>...</section>`                          |
| `article`   | Represents an independent piece of content.                | `<article>...</article>`                          |
| `nav`       | Represents a navigation section (links).                   | `<nav>...</nav>`                                   |
| `footer`    | Represents footer content.                                 | `<footer>...</footer>`                            |

---

## Miscellaneous Roles

| Role        | Description                                                | Example HTML                                      |
|-------------|------------------------------------------------------------|---------------------------------------------------|
| `link`      | Represents a hyperlink (anchor tag).                       | `<a href="#">Link</a>`                            |
| `tooltip`   | Represents a tooltip (help text).                          | `<div role="tooltip">Help text</div>`             |
| `document`  | Represents a document.                                     | `<div role="document">Document content</div>`     |

---

## How to Use `getByRole` in Playwright

To use `getByRole` with Playwright, you can pass the `role` as an argument to `locator()`. You can also filter by name, level, and other attributes. Here are some examples:

```javascript
// Example: Locate a button by role
const buttonLocator = page.locator('role=button[name="Submit"]');

// Example: Locate a text input field by role
const inputLocator = page.locator('role=textbox[name="Username"]');

// Example: Locate a checkbox by role
const checkboxLocator = page.locator('role=checkbox[name="Accept terms"]');

// Example: Locate a link by role
const linkLocator = page.locator('role=link[name="Go to Home"]');
```

---

### Conclusion

This cheat sheet lists the key ARIA roles you can use with Playwright to locate elements based on their semantic roles. Using roles provides more robust and reliable selectors, especially for accessible content.

Let me know if you'd like more examples or further details on how to use these roles effectively!

---
