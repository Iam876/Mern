/*
What is Module in Node Js?
=> In Node.js, a module is a reusable block of code that organizes functionality into small, manageable parts. It can be as simple as a utility or as complex as a full feature. Modules make your code easier to use and maintain.

Types of Modules in Node.js
  1) Core Modules : These are built-in modules provided by Node.js. They don't require installation and can be used directly in your code by importing them.
        
    Examples of core modules:
        http: For creating web servers.
        url: For parsing and working with URLs.
        querystring: For parsing query strings.
        path: For working with file and directory paths.
        fs: For handling the file system (reading, writing, etc.).
        util: For utility functions.

    2. Local Modules : These are modules we create ourself to organize our application's code. For example, a file named math.js could contain custom math functions, which we can then import and use.

    3. Third Party Modules : These are modules created by others and available through the npm (Node Package Manager). We can install them into our project using npm install.

        Examples:
            express: A popular web framework.
            lodash: A utility library for JavaScript.

Why Use Modules?
    Reusability: Write code once, use it anywhere.
    Maintainability: Keep your codebase clean and organized.
    Scalability: Divide code into separate files to handle growing projects.
*/