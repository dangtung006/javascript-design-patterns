// logLevel config 
const LogLevel = {
    "err" : 3,
    "debug" : 2,
    "info" : 1
}
// class abtract
class AbstractLogger {
    constructor(opt){
        for(let key in opt){
            this[key] = opt[key];
        }
    }

    setNextLogger(nextLogger){
        this.nextLogger = nextLogger;
    }

    logMessage(level , msg){
        if(this.level < level){
            console.log("next");
            return  this.nextLogger.logMessage(level, msg);
        }
        this.write(msg);
    }
}

//implement

function ConsoleLogger(logLevel){
    return new AbstractLogger({
        level : logLevel,
        write : (message)=>{
            console.log("Debug::Logger: " + message);
        }
    })
}

function FileLogger(logLevel){
    return new AbstractLogger({
        level : logLevel,
        write : (message)=>{
            console.log("File::Logger: " + message);
        }
    })
}

function ErrorLogger(logLevel){
    return new AbstractLogger({
        level : logLevel,
        write : (message)=>{
            console.log("Error::Logger: " + message);
        }
    })
}

function main(){
    function initLoggerChain(){
        const consoleLogger = new ConsoleLogger(LogLevel["info"]);
        const fileLogger    = new FileLogger(LogLevel["debug"]);
        const errorLogger   = new ErrorLogger(LogLevel["err"]);

        consoleLogger.setNextLogger(fileLogger);
        fileLogger.setNextLogger(errorLogger);
        return consoleLogger;
    }

    let chainlogger = initLoggerChain();
    //chainlogger.logMessage(LogLevel["info"], "this is an info log");
    chainlogger.logMessage(LogLevel["debug"], "This is an debug log");
    chainlogger.logMessage(LogLevel["err"], "This is an error log");
    //chainlogger.logMessage(LogLevel["err"], "This is an error log");
}
main();
