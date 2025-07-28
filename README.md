# Mono Repo MERN App Deployment Guide

### Overview
This guide explains how to deploy a monolithic MERN application on Render.com.

Prerequisites
 - Node.js installed locally
 - Git repository setup
 - Render.com account
 - MongoDB Atlas account

### Deployment Steps
1. MongoDB Atlas Setup
    1. Create a free cluster on MongoDB Atlas
    2. Create a database user and get your connection string
    3. Add your IP address to the network access list (or allow all IPs)

2. Prepare Your Application
Make sure your environment variables are set up:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

3. Update ```package.json```
Ensure your package.json has the correct build and start scripts:
```
{
  "scripts": {
    "start": "node server.js",
    "build": "cd frontend && npm install && npm run build"
  }
}
```

4. Deploy on Render
Log in to Render Dashboard

Click "New +" and select "Web Service"

Connect your GitHub repository

Configure the service:

Name: mono-repo-mern-app
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
Plan: Free
Add Environment Variables:

MONGODB_URI: Your MongoDB connection string
JWT_SECRET: Your JWT secret key
NODE_ENV: production
5. Build Settings
Auto-Deploy: Enable
Branch: main/master
Testing Your Deployment
Wait for the initial deploy to complete
Click on the generated domain URL
Test all features of your application
Troubleshooting
Check Render logs for deployment errors
Ensure all environment variables are set correctly
Verify MongoDB connection string is correct
Check if the build process completes successfully
Additional Notes
Free tier may sleep after 15 minutes of inactivity
Configure health check endpoint if needed
CORS settings should include Render domain
Keep sensitive data in environment variables
### Local Development
```
npm install
npm run dev
```
For more details, visit Render's Documentation