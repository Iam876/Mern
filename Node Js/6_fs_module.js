/*

    Node.Js Includes fs modules to access `physical file system`
    -> The `fs` module is responsible for all the asynchronous or synchronous file I/O (Input/Output) operations.

        Synchronous: Loading ... Loading ... We have to wait for the system to finish the loading ... After finish loading we can move.
            Modules for Asynchronous:
                i) fs.readFileSync(fileName,[,options]) : Reads existing file.
                ii) fs.writeFileSync(fileName, data[,options]) : Writes to the file. If file exists then overwrite otherwise creates new file.
                ii) fs.renameSync(oldPath,newPath) : Renames an existing file.
                ii) fs.existSyncs(path) : Determines whether the soecified file exists or not.
                ii) fs.unlinkSync(path) : File Delete
                ii) fs.appendFileSync(file,data[,options]) : Appends new content to the existing file. 
                ii) fs.openSync(path,flags[,mode]) : Opens file for reading and writing.
                ii) fs.mkdirSync(path[,mode]) : Create a new directory.
                ii) fs.rmdirSync(path) : Remove an existing directory.
                ii) fs.readdirSync(path) : Reads the content of the specified directory.

        Asynchronous: No Loading ... No Loading ... No need to wait for anything to complete a task ... we can move freely without loading. 
            Modules for Asynchronous:
                i) fs.readFile(fileName,[,options],callback) : Reads existing file.
                ii) fs.writeFile(fileName, data[,options],callback) : Writes to the file. If file exists then overwrite otherwise creates new file.
                ii) fs.rename(oldPath,newPath,callBack) : Renames an existing file.
                ii) fs.exists(path,callback) : Determines whether the soecified file exists or not.
                ii) fs.unlink(path,callback) : File Delete
                ii) fs.appendFile(file,data[,options],callback) : Appends new content to the existing file. 
                ii) fs.open(path,flags[,mode],callback) : Opens file for reading and writing.
                ii) fs.mkdir(path[,mode],callback) : Create a new directory.
                ii) fs.rmdir(path,callback) : Remove an existing directory.
                ii) fs.readdir(path,callback) : Reads the content of the specified directory.


    When Synchronous & Asynchronous is suitable: 
        Synchronous:
            -> If a task require simple process to execute. example : 
            -> 
        ASynchronous:
            -> If a task require more time to execute.example : youtube video upload.
*/