# Project Overview

This project is a [Next.js](https://nextjs.org) application designed to manage a dynamic menu system. It allows users to add, edit, delete, and reorder menu items through an intuitive drag-and-drop interface. The project leverages modern web technologies and libraries to provide a seamless user experience.

## Features

-   **Dynamic Menu Management**: Add, edit, delete, and reorder menu items with ease.
-   **Drag-and-Drop Interface**: Utilize the `@dnd-kit` library for intuitive drag-and-drop functionality.
-   **Form Handling**: Use `react-hook-form` for efficient form management and validation.
-   **TypeScript**: Ensure type safety and code quality with TypeScript.
-   **Tailwind CSS**: Style the application using CSS framework Tailwind CSS.
-   **Testing**: Write and run unit tests using `vitest` to ensure code reliability.

## Getting Started

### Installation

First, install the necessary packages:

```bash
yarn install
```

### Running the Development Server

To start the development server, run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the project

To build the project for production, run:

```bash
yarn build
```

### Testing

To Test project, run:

```bash
yarn test
```

## Project Structure

-   **`src/components`**: Contains reusable UI components such as buttons, input fields, and menu-related components.
-   **`src/utils`**: Utility functions for menu item manipulation and drag-and-drop operations.
-   **`src/types`**: TypeScript type definitions for the project.
-   **`src/app`**: Main application files including the entry point and global styles.
