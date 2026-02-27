# Assignment 12: Web Component Library

This project completes Coding Assignment 12, which requires creating a React UI Component Library with Storybook, testing components, and deploying it via Docker.
This README documents the step-by-step workflow, including creating project folders, components, tests, Dockerfile, docker-compose.dev.yml, and running the site on localhost:8083.

# Table of Contents
1. [Project Initialization](#project-initialization)
2. [Install and Configure Dependencies](#install-and-configure-dependencies)
3. [Build Component Library Structure](#build-component-library-structure)
4. [Project Documentation & Version Control](#project-documentation--version-control)

## Project Initialization
The following is a step-by-step operation procedure.

### Step 1: Create React App with TypeScript
Run the code below into WSL2 Terminal; it will take some time, and when it finishes, it will display "Happy hacking!".
```bash
npx create-react-app huang_yirui_ui_garden --template typescript
```

### Step 2: Initialize Git
Enter the project folder and set up version control for the project.
Copy the following content into WSL2 Terminal
```bash
cd huang_yirui_ui_garden
git init
```

## Install and Configure Dependencies
### Step 3: Install Storybook
Copy the following content into WSL2 Terminal
```bash
npx storybook init --type react
```
You may see this prompt:
```
We were not able to detect the right builder for your project. Please
│  │  select one:
```
Use the arrow keys to select `Webpack 5`, then press Enter to confirm.
This will launch a local development server and open a new browser tab with your components rendered in the Storybook UI at:`http://localhost:6006/`
To run Storybook manually, run `npm run storybook`. CTRL+C to stop.

### Step 4: Install Styled Components and dependency:
To add Styled Components to the project, run:
```bash
npm install styled-components
```
Also install the type definitions as a dev dependency:
```bash
npm install --save-dev @types/styled-components
```

### Step 5: Install Jest and testing-library
For testing your React components with Jest, React Testing Library, and Styled Components, run the following commands:
1. Core testing libraries and TypeScript support:
```bash
npm install @testing-library/react jest @types/jest jest-environment-jsdom --save-dev
```
`@testing-library/react`: Utilities for testing React components.

`jest`: JavaScript testing framework.

`@types/jest`: TypeScript types for Jest.

`jest-environment-jsdom`: Provides a browser-like environment for testing DOM in Jest.

2. Babel setup for Jest:
```bash
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest --save-dev
```
`@babel/core`: Babel compiler core.
`@babel/preset-env`: Compile modern JS down to compatible JS.
`@babel/preset-react`: Compile JSX.
`@babel/preset-typescript`: Compile TypeScript.
`babel-jest`: Integrates Babel with Jest for compilation.

3. Jest DOM utilities:
```bash
npm install --save-dev @testing-library/jest-dom
```
Adds custom matchers for Jest, e.g., `.toHaveTextContent()` or `.toBeVisible()`.

4. Styled Components testing helpers:
```bash
npm install --save-dev jest-styled-components
```
`jest-styled-components`: Adds style-specific matchers and snapshot support for styled-components.

### Step 6: Configuring Jest to Include .tests.tsx Files
By default, Jest looks for files with .test.js or .spec.js extensions.
To make Jest to also include files ending with .tests.tsx, add a jest configuration in `package.json`:
```JSON
"jest": {
  "testMatch": [
    "<rootDir>/src/**/*.{test,spec,tests}.{js,jsx,ts,tsx}"
  ]
}
```

### Step 7: TypeScript Configuration for Module Resolution
To ensure proper module resolution, especially when using bundlers like Vite or Webpack 5, change the following to `tsconfig.json`:
```JSON
"moduleResolution": "bundler",
```

## Build Component Library Structure
### Step 8: Create the skeleton structure of the component library
Run the following commands to set up the project’s component folder structure:
```bash
cd src
mkdir components
cd components
mkdir Button Label Text Table Dropdown RadioButton Img HeroImage Card
cd Table
mkdir Table TableHeader TableRow TableCell TableFooter
```

### 9 Create a Button component
Run the following commands to add the files for the new Button component:
```bash
cd ..
cd Button
touch Button.tsx Button.stories.tsx Button.types.ts Button.tests.tsx index.ts
```
1. In `Button.types.ts`, define the props interface for the component:
```TypeScript
export interface ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}
```
2. In `Button.tsx`, implement the button using styled-components:
```TypeScript
import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 0.5rem 1rem;
  font-size: 16px;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? "#cccccc" : backgroundColor || "#007bff"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.9)};
  }
`;

export const Button: React.FC<ButtonProps> = ({ label, disabled, backgroundColor, onClick }) => (
  <StyledButton disabled={disabled} backgroundColor={backgroundColor} onClick={onClick}>
    {label}
  </StyledButton>
);
```
3. In `Button.stories.tsx`, define stories to visualize and interact with the Button component in Storybook:
```TypeScript
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
    disabled: false,
    backgroundColor: "#007bff",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    backgroundColor: "#007bff",
  },
};
```
4. In `Button.tests.tsx`, write Jest tests using React Testing Library and jest-styled-components:
```TypeScript
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Button } from "./Button";

test("Button is visible", () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText("Test Button")).toBeVisible();
});

test("Button background changes when disabled", () => {
  render(<Button label="Disabled" disabled />);
  expect(screen.getByText("Disabled")).toHaveStyle("background-color: #cccccc");
});
```
5. In `index.ts`, export the Button component so it can be easily imported elsewhere in your project:
```TypeScript
export { Button } from "./Button";
```

7. Run Storybook to Test the Button Stories
To view and interact with the Button component stories, run:
```bash
npm run storybook
```

6. Run Tests for the Button Component
After creating `Button.tests.tsx`, run the tests with:
```bash
npm run test
```
The output confirms that Button is visible and that the disabled style works correctly.

### 10 Repeat for Other Components
Follow the same steps in Step 8 for the Button component to create, document, and test other components in the library.

## Dockerize the Project
### Step 10: Create Dockerfile
Create a file named `Dockerfile.prod` in the root directory.
Open the `Dockerfile.prod` file in VS Code, copy the following content into it, and save it.
```dockerfile
# Development environment
FROM node:24.12.0 as build

WORKDIR /huang_yirui_ui_garden

# Copy package.json and package-lock.json
COPY package*.json .

# Copy Project File
COPY . .

# install npm
RUN npm install

RUN npm run build

FROM nginx:1.25.3
COPY --from=build /huang_yirui_ui_garden/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start the app
CMD ["nginx", "-g", "daemon off;"]
```

### Step 11: Create .dockerignore
Create a file named `.dockerignore` in the root directory.
This file prevents Docker from copying large files, thus reducing the image size.
Open the `.dockerignore` file in VS Code, copy the following content into it, and save it.
```
**/node_modules
**/npm-debug.log
build
```

### Step 12: Create docker-compose.dev.yml (dev environments)
Create a file named `docker-compose.prod.yml` in the root directory.
Open the `docker-compose.prod.yml` file in VS Code, copy the following content into it, and save it.
```yaml
version: "3.8"

services:
  app-prod:
    container_name: huang_yirui_coding_assignment12
    build:
      context: .
      dockerfile: Dockerfile.prod
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - 8083:80
    command: npm start
```
### Step 13: Running development containers
1. Ensure Docker Desktop is running.
2. In the WSL2 Terminal, run the following code in the project root directory.
```bash
docker compose -f docker-compose.prod.yml up
```
3. Open your browser and access:
`http://127.0.0.1:8083`

### Step 14: Stop the container:
In the WSL2 Terminal, run the following code in the project root directory.
```bash
docker compose -f docker-compose.prod.yml down
```

## Project Documentation & Version Control
### Step 15: Create README.md
Create a file named `README.md` in the root directory.
This document contains information including the project purpose, each step of the operation process, the Dockerfile content, how to run development and production containers, and the Git commit steps.
Open the `README.md` file in VS Code, write and update all operations from start to finish.

### Step 16: Push to GitHub
1. Create a new repository on GitHub (do not initialize the README)
2. Add a remote repository:
```bash
git remote add origin https://github.com/Yirui-Huang227/huang_yirui_ui_garden.git
```
3. Add all files and commit
```bash
git add .
git commit -m "Initial commit"
```
4. Rename master to main:
```bash
git branch -m master main
```
5. Push to GitHub
```bash
git push -u origin main
```