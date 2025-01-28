User Management System
This is a simple User Management System built using Angular 14. The system includes basic functionalities for managing users such as viewing user lists, adding, editing, and deleting users. It also supports role management, validation, and error handling. The app is styled using Angular Material and is responsive, providing a smooth experience across both desktop and mobile devices.

Features
User List:
Displays users with their names, emails, and roles.
Users can be sorted by name and email.
Pagination implemented with 10 users per page.

Add User:
Form to add a new user with fields for name, email, and role.
Email validation with error messages.

Edit User:
Option to edit user details, including name, email, and role.
Email validation with error messages.

Delete User:
Confirmation dialog before deleting a user.

Search:
Search functionality to filter users by name or email.

Data Persistence:
Users are stored using local storage to persist data across app reloads. (Feel free to modify the data storage mechanism if necessary.)

Installation
Prerequisites
Ensure that Node.js (version 14 or higher) and Angular CLI are installed on your machine.

Steps to Run the Application:
Clone the repository to your local machine:

Use this URL: https://github.com/Saurabh-kshirsagar/User-Management-System.git
Navigate into the project directory after cloning the repository.

Install all dependencies (Node modules):

Run npm install to download all required libraries and frameworks.
Start the development server:

Use the command ng serve to run the application locally.
Once the server is running, open a browser and visit http://localhost:4200 to interact with the application.

Project Structure
The project is structured as follows:

src/app: Contains the main application logic, including components for user management.
user-list: Component that displays the list of users with sorting, pagination, and deletion functionalities.
user-form: Component that contains the form to add or edit user details.
user-role: Component for assigning roles (e.g., Admin, User).
src/services/user.service.ts: Contains the logic for managing users (adding, editing, deleting) and interacting with local storage to persist user data.
src/assets: Includes static assets like images and media files.
src/environments: Stores environment configurations for different environments (e.g., development or production).
Styling
The project uses Angular Material for UI components such as forms, buttons, modals, and data tables. The application is styled in a responsive manner, ensuring compatibility with both desktop and mobile screens.

Responsiveness
This application leverages Angular Material’s grid system and layout components to ensure responsiveness. The user interface adapts well to different screen sizes, providing a smooth experience across mobile and desktop devices.

Validation & Error Handling
Form validation is implemented to ensure the accuracy of user inputs. The email field is validated for the correct format, and appropriate error messages are displayed if the user enters invalid data. A confirmation dialog is shown before a user is deleted.

Conclusion
This User Management System provides an intuitive and easy-to-use interface for managing users, including basic CRUD operations, role assignment, and search functionality. Built with Angular 14 and Angular Material, it offers a responsive design with good form validation and error handling.

