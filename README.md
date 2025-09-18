
## Overview

This document outlines the steps to create, set up, and deploy a portfolio website using React.

## 1. Setting Up Your Portfolio Website

### 1.1 Create React App

To create your React application, run the following command:


npx create-react-app my-portfolio


### 1.2 Install Dependencies

Install the necessary packages for your project:

- **React Router for navigation**
  npm install react-router-dom
- **Font Awesome for social icons**:
  npm install font-awesome

- **Simple React Animation**:
  npm install simple-react-animate
- **React Icons**:
  npm install react-icons
  
- **Vertical Timeline Component for resume pages**:
  
  npm install react-vertical-timeline-component
- **Particles for visual effects**:
  
  npm install react-tsparticles tsparticles
  
- **Bootstrap for styling**:
  npm install bootstrap
## 2. Running the Application

### 2.1 Default Port

To run the application on the default port (3000), use:

npm start
### 2.2 Changing the Port

To run the app on a different port (e.g., 4000), modify the `scripts` section in your `package.json` as follows:
"scripts": {
  "start": "set PORT=4000 && react-scripts start"
}
## 3. 2. Import Project to Vercel

Go to Vercel
.

Sign up (or log in) with your GitHub account.

Click “New Project” and import your repository.

Vercel will detect React automatically.


## 4. Accessing Your Website

After deployment, your portfolio will be available at:  in vercel deployed like this

https://portfolio-website-ten-mocha.vercel.app/
