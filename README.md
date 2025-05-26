# Project E-commerce Electronics Website

This repository contains a full-stack e-commerce website project with separate backend and frontend directories.

## Project Structure

- `backend/`: Node.js/Express backend API server
  - Handles user authentication, product management, orders, and payments.
  - Contains configuration, controllers, models, routes, and middleware.
  - Uses environment variables for sensitive data (see `env.sample`).
  - Includes `vercel.json` for deployment configuration.

- `frontend/`: React frontend application
  - Built with React and Tailwind CSS.
  - Contains components, pages, context, helpers, and assets.
  - Uses environment variables for API endpoints and keys.
  - Includes a `README.md` specific to the frontend.

## Setup Instructions

### Backend

1. Copy `backend/env.sample` to `backend/.env` and fill in your environment variables (e.g., database URI, Stripe keys).
2. Install dependencies:
   ```
   cd backend
   npm install
   ```
3. Start the backend server:
   ```
   npm start
   ```

### Frontend

1. Copy `frontend/.env.example` (if exists) to `frontend/.env` and configure API URLs.
2. Install dependencies:
   ```
   cd frontend
   npm install
   ```
3. Start the frontend development server:
   ```
   npm start
   ```

## Important Notes

- Make sure to never commit your `.env` files or any sensitive information to the repository.
- Use the `.gitignore` files in both backend and frontend to exclude environment files and node_modules.
- The backend API endpoints are consumed by the frontend React app for a seamless ecommerce experience.

## Deployment

- The backend is configured for deployment on Vercel (see `backend/vercel.json`).
- The frontend can be deployed on platforms like Vercel, Netlify, or any static hosting service.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---

Thank you for checking out this ecommerce project! If you have any questions or need help setting it up, please reach out.
