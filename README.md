My Next.js Project
This project is a Next.js application that renders items from a JSON file in a well-designed and responsive UI. It allows users to edit the displayed data and features support for dark mode. The project is bootstrapped with create-next-app.

Features
Dynamic rendering of a JSON data file.
Editing capability for data items.
Dark mode support using Tailwind CSS.
Responsive design with SCSS for styling.
Getting Started
Prerequisites
Make sure you have Node.js and npm installed. You can download them from Node.js official website.

Installation
Clone the Repository: Clone the repository from GitHub and navigate into the project directory.

Install Dependencies: Run the installation command to set up the project dependencies.

Running the Development Server
To start the development server, run the appropriate command for your package manager. Once the server is running, open your browser and navigate to http://localhost:3000 to view the application.

Project Structure
The main project structure is as follows:

my-app/
├── public/
│   └── data.json              # Sample JSON data file
├── src/
│   ├── components/
│   │   └── ItemList.tsx       # Component for rendering and editing items
│   ├── hooks/
│   │   └── useApi.ts          # Custom hook for API requests (future expansion)
│   ├── pages/
│   │   ├── _app.tsx           # App-level configurations
│   │   └── index.tsx          # Main page component
│   ├── styles/
│   │   └── globals.scss       # Global SCSS styling
├── package.json
└── tsconfig.json
Implementation Details
JSON Data Rendering
The ItemList component is responsible for rendering the JSON data in a visually appealing format. It parses the JSON string and displays the key-value pairs in a structured layout. Each item can be edited directly in the UI.

When a user clicks the "Edit" button, the corresponding item's value is displayed in a textarea, allowing the user to modify it.Enter the values in a JSON Format. Upon clicking "Save," the application attempts to validate the JSON format. If the format is valid, the changes are applied; if not, an error message is displayed.

Dark Mode Support
The application utilizes CSS variables and Tailwind CSS to provide dark mode support. When the user's system preferences indicate a dark color scheme, the application adjusts the colors of the background and text accordingly.

Responsive Design
The layout is designed to be responsive, utilizing a grid system that adjusts to the size of the screen. The application is structured to look good on various devices, enhancing user experience across desktops, tablets, and mobile phones.


Deployed Link - https://wtv-front-end-assignment.vercel.app/
