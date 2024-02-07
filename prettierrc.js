module.exports = {
  // Use single quotes for strings
  singleQuote: true,

  // Use a trailing comma at the end of multiline object and array literals
  trailingComma: "all",

  // Use 2 spaces for indentation
  tabWidth: 2,

  // Use semicolons at the end of statements
  semi: true,

  // Use parentheses around arrow function parameters when there's ambiguity
  arrowParens: "always",

  // Format embedded HTML in Markdown files
  overrides: [
    {
      files: ["*.md"],
      options: {
        parser: "markdown",
      },
    },
  ],
};
