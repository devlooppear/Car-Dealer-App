# Car Dealer App 🚗

Welcome to the Car Dealer App! This web application allows users to browse and filter vehicles. Built with Next.js, styled with Tailwind CSS, and developed using TypeScript for robust type-checking.

## Getting Started 🚀

Follow these steps to set up and run the application locally:

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone <repository-name>
   cd <dir-name>
   ```

2. Set Up Environment Variables

    Copy the example environment variables file and create a local environment configuration:

    ```bash
    cp .env.example .env.local
    ```

3. Edit .env.local to configure any necessary environment-specific variables.

4. Install Dependencies

    Install the project's dependencies using npm:

    ```bash
    npm install
    ```

5. Run the Development Server

    Start the development server:

    ```bash
    npm run dev
    ```

Access the application at http://localhost:3000/.

## Directory Structure 🗂️

- `src/`: Main source code directory.
- `app/`: Core application components and pages.
- `api/`: API-related services and types.
- `common/`: Reusable UI components like footer and navbar.
- `result/`: Pages for displaying vehicle results based on makeId and year.
- `vehicles/`: Page for selecting vehicle types and years.
- `favicon.ico`: Application favicon.
- `globals.css`: Global CSS styles.
- `layout.tsx`: Main layout component for the application.
- `page.tsx`: Default page component.

## Requirements 🛠️

- Node.js: Ensure you have Node.js installed (preferably version 18 or later).
- npm: Node package manager, usually installed with Node.js.
- Tailwind CSS: Used for styling the application.
- TypeScript: Provides static type checking for the project.

## Scripts 📜

- npm run dev: Starts the development server.
- npm run build: Builds the project for production.
- npm run start: Starts the production server.
- npm run lint: Runs ESLint to check for code quality issues.
