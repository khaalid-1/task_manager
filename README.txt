# Task Manager

A web application built with the MERN stack (MongoDB, Express, React, Node.js) designed to help users efficiently create, manage, and organize their tasks. The application features user authentication, allowing secure access to personal task lists, and offers various functionalities to enhance productivity.
 

## Features

- **User Authentication**: Secure sign-up and login functionality with JSON Web Tokens (JWT).
- **Create Tasks**: Users can add tasks with essential details such as titles, descriptions, due dates, and priority levels.
- **Manage Tasks**: Update task statuses (Pending, In Progress, Completed) with a simple click.
- **Filter and Sort Tasks**: Easily filter tasks by status or due date and sort them based on priority or creation time.
- **Responsive Design**: A user-friendly interface that adapts to different screen sizes for desktop and mobile devices.
- **State Management**: Efficient state management using Zustand for seamless updates and reactivity.
- **Error Handling**: User-friendly error messages for form validation and other issues.

## Technologies Used

- **Frontend**: 
  - **React**: For building the user interface.
  - **Chakra UI**: A modular and accessible component library for React, providing pre-styled components for rapid development.
  - **Zustand**: A small, fast, and scalable state management solution for React.
  - **React Router**: For routing within the application.
  - **Axios**: For making HTTP requests to the backend API.

- **Backend**: 
  - **Node.js**: JavaScript runtime for the server.
  - **Express**: Web framework for building APIs.
  - **Mongoose**: ODM for MongoDB, simplifying database interactions.

- **Database**: 
  - **MongoDB**: NoSQL database for storing tasks and user data.

- **Authentication**: 
  - **JSON Web Tokens (JWT)**: For secure authentication and authorization.

## Installation

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB server running locally or a MongoDB Atlas account for cloud storage.

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
