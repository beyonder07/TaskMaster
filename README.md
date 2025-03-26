# Task Management Application

A full-stack task management application built with React, Redux Toolkit, and Chakra UI.

## Features

- User authentication (login/register)
- Create, read, update, and delete tasks
- Task filtering and sorting
- Dark/light mode support
- Responsive design
- Protected routes

## Tech Stack

### Frontend
- React
- Redux Toolkit for state management
- React Router for navigation
- Chakra UI for styling
- Axios for API calls

### Backend
- Node.js
- Express
- MongoDB
- JWT for authentication

## Deployment Instructions

### Frontend Deployment (Vercel)

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Navigate to the client directory:
   ```bash
   cd client
   ```
5. Deploy to Vercel:
   ```bash
   vercel
   ```
6. For production deployment:
   ```bash
   vercel --prod
   ```

### Backend Deployment (Railway)

1. Create a Railway account at https://railway.app
2. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```
3. Login to Railway:
   ```bash
   railway login
   ```
4. Navigate to the server directory:
   ```bash
   cd server
   ```
5. Initialize Railway project:
   ```bash
   railway init
   ```
6. Deploy to Railway:
   ```bash
   railway up
   ```

### Environment Variables

#### Frontend (.env.production)
```
REACT_APP_API_URL=https://your-api-domain.com/api
```

#### Backend
Required environment variables in Railway:
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Port number (default: 5000)
- `NODE_ENV`: Set to "production"

## Post-Deployment Steps

1. Update the frontend environment variable `REACT_APP_API_URL` with your actual backend URL
2. Ensure CORS is properly configured in the backend to accept requests from your frontend domain
3. Test the application thoroughly in production environment

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. Create `.env` files in both client and server directories
4. Start the development servers:
   ```bash
   # Terminal 1 - Frontend
   cd client && npm start

   # Terminal 2 - Backend
   cd server && npm run dev
   ```

## Support

For issues and feature requests, please create an issue in the repository. 