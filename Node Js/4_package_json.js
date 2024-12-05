/*
# Understanding `package.json`

## What is `package.json`?
- **`package.json`** is like a notebook for your application.  
  It contains important metadata and configuration for your project.

### Key Features of `package.json`:
1. **Holds Metadata**: Stores details about the project (e.g., name, version, description).
2. **Manages Dependencies**: Keeps track of all the libraries and packages your project depends on.
3. **Identifies the Project**: Helps to uniquely identify the project in an ecosystem.
4. **Holds Application Information**: Stores scripts, author details, and more.

---

## How to Create `package.json`
To generate a `package.json` file for your project, follow these steps:

1. Open your terminal.
2. Run the following command:
   ```bash
   npm init --y

## Configuring package.json for Your Project

Add a Start Script:
    1. Open the package.json file.
    2. Locate the "scripts" block. It looks like this by default:

    ``` 
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    }
    ```
    3. Add a new property inside the "scripts" block:

    ```
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node fileName.js"
        }
    ```

    4. To start your application using the start script:
        In the terminal, execute: ` npm start `

*/