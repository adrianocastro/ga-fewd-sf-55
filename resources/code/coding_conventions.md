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
  - use the following preferences in Sublime Text:

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

`<!DOCTYPE html>`

Although the [DOCTYPE is case insensitive](https://www.w3.org/TR/html5/syntax.html#the-doctype), for matters of [backwards compatibility with XML](https://mathiasbynens.be/notes/xhtml5#doctype), it should be uppercased.

#### Closing Tags

Don’t use closing tags for void elements.

e.g. `<img src="foo.jpg">` and `<hr>`

As per the [W3C’s spec](https://www.w3.org/TR/html5/syntax.html#void-elements):

> Void elements only have a start tag; end tags must not be specified for void elements.”
