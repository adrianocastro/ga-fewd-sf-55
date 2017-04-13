# Coding Conventions

## File and Folder Naming Conventions

The following conventions should be observed when naming files and folders:

- all lowercase
- no whitespace
- use underscore instead of spaces (e.g. `hello_world.html`)
- opening page should be named `index.html`

## Folder Structure

The basic site folder structure should be organized as such:

    .
    ├── images              # Images, icons and other graphical assets
    ├── styles              # CSS files
    ├── scripts             # JavaScript files
    ├── index.html          # Opening page for the site
    └── ...

## Whitespace and Indentation

- use spaces instead of tabs
- use two spaces for indentation

Use the following preferences in Sublime Text:

    // Number of spaces a tab is considered equal to
    "tab_size": 2,
    // Insert spaces when tab is pressed
    "translate_tabs_to_spaces": true,
    // Force indentation rules instead of detecting pre-existing ones
    "detect_indentation": false,
    // Draw all white space and invisible characters
    "draw_white_space": "all",

## Language Specific Conventions

### HTML

#### DOCTYPE declaration

The DOCTYPE should always be included as the very first line in every HTML file and written as such:

```html
  <!DOCTYPE html>
  <html>
    ...
  </html>
```

Although the [DOCTYPE is case insensitive](https://www.w3.org/TR/html5/syntax.html#the-doctype), for matters of [backwards compatibility with XML](https://mathiasbynens.be/notes/xhtml5#doctype), it should be uppercased.

#### Declaring language and character set

##### Language declaration

**Always use a [language attribute](https://www.w3.org/International/questions/qa-html-language-declarations) on the `html` element**. This is inherited by all other elements, and so will set a default language for the text in the document `head` element.

Note that you should use the `html` element rather than the `body` element, since the `body` element doesn't cover the text inside the document's `head` element.

```html
  <!DOCTYPE html>
  <html lang="en">
    ...
  </html>
```

##### Character encoding declaration

**Always define the character encoding via the `meta` [`charset`](https://www.w3.org/International/questions/qa-what-is-encoding) in the `head`**. It’s best to declare it right after opening the `head` tag so it’s done before any content on the page (note: the `title` in the `head` is already considered content for the page).

The **preferred character encoding is UTF-8**. This encoding can support many languages and can accommodate pages and forms in any mixture of those languages.

```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Page Title After Charset</title>
    ...
  </html>
```

#### Closing Tags

Don’t use closing tags for void elements.

e.g. `<img src="foo.jpg">` and `<hr>`

As per the [W3C’s spec](https://www.w3.org/TR/html5/syntax.html#void-elements):

> Void elements only have a start tag; end tags must not be specified for void elements.”

#### Attributes

Use double quotes when adding content to attributes.

e.g. `<img src="foo.jpg">` instead of `<img src='foo.jpg'>`

Don’t include unnecessary type attributes.

All browsers expect scripts to be JavaScript and styles to be CSS, as such, you can leave off the `type` attribute. This should suffice:

```html
  <link rel="stylesheet" href="css/styles.css">
  <script src="scripts/scripts.js"></script>
```

#### Images

Images should **always** have textual alternatives. These are provided via the `alt` attribute.

The textual alternatives should make sense considering the purpose of the image in the context of the page. Phrases like “Image of …” should be avoided.

For iconic images that are redundant with text next to them or purely decorative please use `alt=""`.
