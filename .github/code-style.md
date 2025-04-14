**Last Updated:** April 14, 2025

**1. Code Formatting:**

- **Objects and Arrays:** Always single-line unless it will exceed our defined line length limit (to be determined, e.g., 100 characters). For longer objects and arrays, use multi-line formatting with consistent indentation, placing each property or element on a new line.
- **Functions:** Always use arrow functions (`const fn = () => {}`) except when `this` binding or hoisting is specifically needed (e.g., object methods, constructors if not using classes).
- **Imports:** Group import statements as follows, with alphabetical sorting within each group:

    1. Built-in Node.js modules (e.g., `fs`, `path`).
    2. External packages (from `node_modules`, e.g., `react`, `lodash`).
    3. Internal modules (paths within our project, using absolute or relative paths, potentially with path aliases like `@/`).

- **React Components:**

    - Order within components should prioritize grouping related functionality together. While flexibility is allowed based on the component's logic, a general suggestion is:

        1. Props (implicitly defined).
        2. State (using `useState` or class `this.state`).
        3. Event handlers (functions to handle user interactions).
        4. Side effects/Lifecycle methods (`useEffect` or class lifecycle methods).
        5. Utility functions (helper functions used within the component).
        6. `render` method (for class components) or the `return` statement (for functional components).

    - **JSX Formatting:** Always single-line unless it will exceed our defined line length limit. For longer elements, break props onto new lines with consistent indentation.
    - **Self-Closing Tags:** Always use the explicit closing tag (`<MyComponent></MyComponent>`).
    - **Curly Braces in JSX:** If the expression inside curly braces for dynamic values is long or complex, break it onto a new line with indentation.
    - **Conditional Rendering in JSX:** Always use ternary operators (`condition ? <A /> : <B />`).
    - **Inline Styles:** Avoid inline styles as much as possible. Prefer CSS Modules or styled-components for managing component styling.

**2. Variables:**

- Always use `const` for variables that will not be reassigned.
- Use `let` for variables that need to be reassigned.
- Never use `var`.

**3. Asynchronous Operations:**

- Primarily use `async/await` for handling asynchronous operations.

**4. Error Handling:**

- Use `try...catch` blocks within `async` functions to handle potential errors.

**5. Comments:**

- Minimize comments as much as possible. Aim for self-documenting code through clear naming and well-structured logic. Comment complex or non-obvious logic sparingly.

**6. Naming Conventions:**

- Use camel case (`camelCase`) for variables and function names.
- Use Pascal case (`PascalCase`) for React component names and class names.
- Use prefixes like `is`, `has`, `should`, `will` for boolean variable names (e.g., `isActive`, `hasError`).
- Use all uppercase with underscores separating words (`UPPER_SNAKE_CASE`) for constant variables (e.g., `MAX_VALUE`, `API_KEY`).

**7. Project Structure:**

- Organize project directories and files using a feature-based grouping.
- Maintain a dedicated `utils` folder for common utility functions.
- Maintain a dedicated `components` folder for reusable UI components.
