# Form Backend API

This is a TypeScript-based backend server using Express.js to handle form submissions.

## Setup
1. **Clone the repository:**

  ```bash
  git clone https://github.com/daulatojha17/FormBackendAPI.git
  cd formBackend
  ```
2. **Install dependencies:**

  ```bash
  npm install
  ```
3. **Create a .env file**

  ```bash
  PORT=3000
  CORS_ORIGIN=*
  ```
4. **Start the server**

  ```bash
  npm run dev
  ```

## Endpoints

### Ping

- **Endpoint:** `/ping`
- **Method:** GET
- **Description:** Checks if the server is running.
- **Example:** `http://localhost:3000/ping`

### Submit Form

- **Endpoint:** `/submit`
- **Method:** POST
- **Description:** Submits a form with parameters `name`, `email`, `phone`, `github_link`, `stopwatch_time`.
- **Example:** `http://localhost:3000/submit`
- **Body:** JSON format with fields:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "github_link": "https://github.com/johndoe",
    "stopwatch_time": "1:30:00"
  }
  ```
### Read Form Submission
- **Endpoint:** `/read`
- **Method:** GET
- **Description:** Reads a form submission by index (0-indexed).
- **Example:** `http://localhost:3000/read?index=0`
