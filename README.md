# Task Management Application

A modern task management application built with React, Redux Toolkit, and Chakra UI.

## Features

- User authentication (login/register)
- Create, read, update, and delete tasks
- Filter tasks by status and priority
- Search tasks
- Sort tasks by various criteria
- Responsive design
- Dark/light mode support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the root directory and add:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Technologies Used

- React
- Redux Toolkit
- Chakra UI
- React Router
- Axios
- React Icons

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── store/         # Redux store configuration
  │   ├── slices/    # Redux slices
  │   └── hooks.js   # Custom Redux hooks
  ├── theme.js       # Chakra UI theme configuration
  ├── App.js         # Main App component
  └── index.js       # Entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
