# Auth App

This is a full-stack authentication app with a backend built using Express.js and a frontend built using Next.js.

## Project Structure

- **Backend:** Express.js (API & Authentication)
- **Frontend:** Next.js (Client-side UI)
- **Database:** MongoDB (MongoDB Atlas)
- **Authentication:** JWT-based authentication
- **Email Service:** Mailtrap for email verification

## Environment Variables

### Backend (.env)
```env
MONOGO_URI=mongodb+srv://username:password@your-cluster.mongodb.net/your-db
PORT=5001
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development # Change this to production when deploying
MAILTRAP_TOKEN="your_mailtrap_token_here"
NEXT_PUBLIC_URL=https://fe-auth-app-v1.vercel.app/
```

### Frontend (.env)
```env
NEXT_PUBLIC_BACKEND_URL=https://be-auth-app-v1.vercel.app/api/auth
```

## Setup Instructions

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/mehul79/auth-app-v1
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Add a `.env` file in the `backend` directory with the above variables.
4. Start the server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Add a `.env` file in the `frontend` directory with the above variables.
4. Start the Next.js development server:
   ```sh
   npm run dev
   ```

## Deployment

### Backend Deployment
- The backend is deployed on Render (`https://auth-app-v1.onrender.com/api/auth`).
- Make sure to update `NODE_ENV=production` in `.env` before deploying.

### Frontend Deployment
- The frontend is deployed on Vercel (`https://fe-auth-app-v1.vercel.app`).

## API Endpoints
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/forgot-password` - Request password reset email
- `POST /api/auth/reset-password` - Reset user password with token
- `POST /api/auth/verifyEmail` - Send verification email with OTP for account activation
- `POST /api/auth/verifyUser` - Verify user identity with JWT stored in a cookie named 'token'

## Tech Stack
- **Backend:** Express.js, MongoDB, JWT, Mailtrap
- **Frontend:** Next.js, React, Tailwind CSS
- **Deployment:** Render (Backend), Vercel (Frontend)

## License
This project is licensed under the MIT License.
