Here’s the updated `README.md` for your backend repository:

```markdown
# Backend Server for Submissions Management

## Description
This backend server supports a Windows Desktop Application for managing submissions. The server is built using Express with TypeScript and uses a JSON file (`db.json`) as a database to store submissions.

## API Endpoints

### GET /ping
Checks server status. Always returns `true`.

### POST /submit
Saves new submissions. Requires the following parameters:
- `name`: String
- `email`: String
- `phone`: String
- `github_link`: String
- `stopwatch_time`: Number

### GET /read
Retrieves the submission at the specified index. Requires the following query parameter:
- `index`: Number (0-based index)

## Technologies Used
- **Backend Server:** Express, TypeScript
- **Database:** JSON file (`db.json`)

## Installation

### Running the Backend Server

1. Clone the backend repository:
   ```sh
   git clone https://github.com/tourist1642/Slidely-AI-Task-2-Backend-.git
   ```
2. Navigate to the project directory.
   ```sh
   cd Slidely-AI-Task-2-Backend-
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Build TypeScript:
   ```sh
   npm run build
   ```
5. Start the server:
   ```sh
   npm start
   ```

### Note
Run the server first and then the Desktop app.

## Usage

### Create New Submission
Fill in the form fields in the Desktop App and submit using the "Submit" button or `Ctrl + S`.

### View Submissions
Navigate through entries in the Desktop App using the "Previous" and "Next" buttons.

## Database Structure

The JSON file (`db.json`) is used to store submissions with a suitable structure. An example structure might be:

```json
{
  "submissions": [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890",
      "github_link": "https://github.com/johndoe",
      "stopwatch_time": 120
    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "phone": "987-654-3210",
      "github_link": "https://github.com/janesmith",
      "stopwatch_time": 300
    }
  ]
}
```

## Contact
If you have any questions or suggestions, feel free to contact me at kesavanvinodkumar0@gmail.com.

