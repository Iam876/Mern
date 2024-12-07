/*
Node.js includes the `fs` module to access the **physical file system**.  
The `fs` module is responsible for all **asynchronous** or **synchronous** file I/O (Input/Output) operations.

---

## Synchronous Operations:
- **Behavior**: Waits for the task to complete before moving to the next operation.  
  Example: Loading a file where the system waits for the operation to finish before proceeding.

### Common Methods:
1. **`fs.readFileSync(fileName[, options])`**: Reads an existing file.
2. **`fs.writeFileSync(fileName, data[, options])`**: Writes to the file. Overwrites if the file exists; creates a new file otherwise.
3. **`fs.renameSync(oldPath, newPath)`**: Renames an existing file.
4. **`fs.existsSync(path)`**: Checks whether the specified file exists.
5. **`fs.unlinkSync(path)`**: Deletes a file.
6. **`fs.appendFileSync(file, data[, options])`**: Appends new content to an existing file.
7. **`fs.openSync(path, flags[, mode])`**: Opens a file for reading and writing.
8. **`fs.mkdirSync(path[, mode])`**: Creates a new directory.
9. **`fs.rmdirSync(path)`**: Removes an existing directory.
10. **`fs.readdirSync(path)`**: Reads the contents of a specified directory.

---

## Asynchronous Operations:
- **Behavior**: Does not block the execution of other tasks.  
  Example: Uploading a YouTube video while performing other operations.

### Common Methods:
1. **`fs.readFile(fileName[, options], callback(error,data))`**: Reads an existing file.
2. **`fs.writeFile(fileName, data[, options], callback(error))`**: Writes to the file. Overwrites if the file exists; creates a new file otherwise.
3. **`fs.rename(oldPath, newPath, callback)`**: Renames an existing file.
4. **`fs.access(path,fs.constants.F_OK, callback(boolean))`**: Checks whether the specified file exists.
5. **`fs.unlink(path, callback)`**: Deletes a file.
6. **`fs.appendFile(file, data[, options], callback)`**: Appends new content to an existing file.
7. **`fs.open(path, flags[, mode], callback)`**: Opens a file for reading and writing.
8. **`fs.mkdir(path[, mode], callback)`**: Creates a new directory.
9. **`fs.rm(path,[recursive: true, force: true] callback)`**: Removes an existing directory.
10. **`fs.readdir(path, callback)`**: Reads the contents of a specified directory.


 ** callback has two parameters : 
    i) error : to catch the error.
    ii) data : to read/write the data.

---

## When to Use Synchronous vs. Asynchronous Operations?

### **Synchronous**:
- Suitable for simple processes that require immediate execution without the involvement of long-running tasks.
- Example: Reading a small text file to display its content on the console.

### **Asynchronous**:
- Ideal for tasks that take a significant amount of time to complete without blocking other operations.
- Example: Uploading a video to YouTube.

---

### Summary:
- Use **synchronous methods** for small, quick tasks where blocking is acceptable.
- Use **asynchronous methods** for time-consuming tasks to ensure the application remains responsive.
*/
