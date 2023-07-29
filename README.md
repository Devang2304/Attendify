# Attendance Tracker

**Under development => progress- backend completed frontend 60% done**

The Attendance Tracker is a simple tool designed to help users maintain their attendance records and ensure they achieve a minimum attendance percentage of 75%. This project provides a web-based interface where users can easily log their attendance and track their progress.

## Features

- User registration and login: Users can create an account and log in to access their attendance records.
- Attendance logging: Users can log their attendance by providing the date and marking themselves as present or absent.
- Attendance statistics: The system calculates and displays the user's attendance percentage and provides visual indicators to track progress towards the target.
- Reminder notifications: Users receive periodic reminders to log their attendance and stay on track.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/attendance-tracker.git
   ```

2. Navigate to the project directory:

   ```
   cd attendance-tracker
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up the environment variables:
   
   - Rename the `.env.example` file to `.env`.
   - Update the values in the `.env` file with your configuration settings (e.g., database credentials, SMTP server details).

5. Start the application:

   ```
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to access the application.

## Usage

1. Create an account by clicking on the "Sign Up" button on the login page.
2. Log in with your credentials.
3. On the dashboard, you can see your attendance statistics, including the current percentage and progress towards the target.
4. To log attendance, click on the "Log Attendance" button and provide the date and attendance status (present or absent).
5. You will receive reminder notifications if your attendance drops below 80% in any subject.
6. Created with React-redux

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please create an issue on the project's GitHub repository.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
