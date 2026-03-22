# Assignment 13: UC Component Library

## Build project
1. Ensure Docker Desktop is running.
2. In the WSL2 Terminal, run the following code in the project root directory.
```bash
docker compose -f docker-compose.prod.yml up
```
3. Open your browser and access:
`http://127.0.0.1:8018`

4. Stop the container:
In the WSL2 Terminal, run the following code in the project root directory.
```bash
docker compose -f docker-compose.prod.yml down
```

## Step by Step Workflow
### Install Development Dependencies
```bash
npm install --save-dev husky lint-staged prettier eslint-config-prettier
```
husky: Runs scripts automatically during Git actions (e.g., before commit)
lint-staged: Runs linters only on staged files (faster and efficient)
prettier: Formats code consistently
eslint-config-prettier: Prevents conflicts between ESLint and Prettier

### Initialize Husky
```bash
npx husky install
```
Creates a .husky/ folder
Enables Git hooks in the project

### Enable Husky on Install
Update `package.json`:
```json
"scripts": {
  "prepare": "husky"
}
```
Then run:
```bash
npm run prepare
```
Automatically sets up Husky after npm install
Ensures hooks work for all developers on the project

### Create Pre-commit Hook
```bash
mkdir -p .husky
nano .husky/pre-commit
```
Add the following:
```bash
#!/bin/sh
npx lint-staged
npm test -- --watchAll=false
```
Then make it executable:
```bash
chmod +x .husky/pre-commit
```
Runs before every commit
Ensures:
Code is linted and formatted
Tests pass before committing

### Configure lint-staged
Add this to `package.json`:
```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint",
    "prettier --check"
  ]
}
```

### Configure ESLint
Create `.eslintrc.js`:
```json
module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn'],
    'react/prop-types': 'off',
  },
};
```
Enforces code quality rules
Custom rules include:
Require semicolons
Use single quotes
Warn on unused variables
Warn on console logs

### Configure Prettier
Create `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true
}
```
Ensures consistent formatting across the project
Works together with ESLint (no conflicts)

### Setup GitHub Actions CI/CD
Create `.github/workflows/ci.yml`:
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ assignment13 ]
  pull_request:
    branches: [ assignment13 ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Run Prettier
        run: npx prettier --check "src/**/*.{js,jsx,ts,tsx}"

      - name: Run ESLint
        run: npx eslint "src/**/*.{js,jsx,ts,tsx}"

      - name: Run tests
        run: npm test -- --watchAll=false --bail
```
Automatically runs on:
Push to assignment13
Pull requests to assignment13
Ensures:
Code is formatted correctly
No lint errors
Tests pass

### Step 7: Create Dockerfile
Create a file named `Dockerfile.prod` in the root directory.
Open the `Dockerfile.prod` file in VS Code, copy the following content into it, and save it.
```dockerfile
# Development environment
FROM node:24.12.0 as build

WORKDIR /huang_yirui_ui_garden_build_checks

# Copy package.json and package-lock.json
COPY package*.json .

# Copy Project File
COPY . .

# install npm
RUN npm install

RUN npm run build

FROM nginx:1.25.3
COPY --from=build /huang_yirui_ui_garden_build_checks/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start the app
CMD ["nginx", "-g", "daemon off;"]
```

### Create .dockerignore
Create a file named `.dockerignore` in the root directory.
This file prevents Docker from copying large files, thus reducing the image size.
Open the `.dockerignore` file in VS Code, copy the following content into it, and save it.
```
**/node_modules
**/npm-debug.log
build
```

### Create docker-compose.prod.yml (production environments)
Create a file named `docker-compose.prod.yml` in the root directory.
The `volumes` property maps to the `src` folder, enabling hot updates.
Open the `docker-compose.prod.yml` file in VS Code, copy the following content into it, and save it.
```yaml
version: "3.8"

services:
  app-prod:
    container_name: huang_yirui_coding_assignment13
    build:
      context: .
      dockerfile: Dockerfile.prod
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - 8018:80
```
### Running development containers
1. Ensure Docker Desktop is running.
2. In the WSL2 Terminal, run the following code in the project root directory.
```bash
docker compose -f docker-compose.prod.yml up
```
3. Open your browser and access:
`http://127.0.0.1:8018`

### Stop the container:
In the WSL2 Terminal, run the following code in the project root directory.
```bash
docker compose -f docker-compose.prod.yml down
```

### Push to GitHub
1. Add all files and commit
```bash
git add .
git commit -m "Initial commit"
```
2. Push to GitHub
```bash
git push -u origin assignment13
```

