
export class LOG {

    public static Colors = {
        reset: "\x1b[0m",
        bright: "\x1b[1m",
        dim: "\x1b[2m",
        underscore: "\x1b[4m",
        blink: "\x1b[5m",
        reverse: "\x1b[7m",
        hidden: "\x1b[8m",
        text: "\x1b[32m",
        number: "\x1b[33m",
        action: "\x1b[34m",
        warning: "\x1b[33m", 
        error: "\x1b[31m",       
        
        fg: {
            black: "\x1b[30m",
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m",
            blue: "\x1b[34m",
            magenta: "\x1b[35m",
            cyan: "\x1b[36m",
            white: "\x1b[37m",
            gray: "\x1b[90m",
            crimson: "\x1b[38m" 
        },
        bg: {
            black: "\x1b[40m",
            red: "\x1b[41m",
            green: "\x1b[42m",
            yellow: "\x1b[43m",
            blue: "\x1b[44m",
            magenta: "\x1b[45m",
            cyan: "\x1b[46m",
            white: "\x1b[47m",
            gray: "\x1b[100m",
            crimson: "\x1b[48m"
        }
    };
    
    public static fmt(name: string, value: any) {
        if (typeof(value) === "number") {
            return name + ': ' + LOG.Colors.number + value + " " + LOG.Colors.reset;
        } else {
            return name + ': ' + LOG.Colors.text + value + " " + LOG.Colors.reset;
        }
    }

    public static line(name: string, value: any) {
        console.log(LOG.fmt(name, value));
    }

    public static info(value: any) {
        console.log(value, LOG.Colors.reset);
    }

    public static action(name: string, str?: string) {
        if (str === undefined)
            console.log(LOG.Colors.action + name + LOG.Colors.reset);  
        else 
            console.log(LOG.Colors.action + name + LOG.Colors.reset + " " + str + LOG.Colors.reset);
    }

    public static error(name: string, str?: string) {
        if (str === undefined)
            console.log(LOG.Colors.error + "ERROR: " + name + LOG.Colors.reset);  
        else 
            console.log(LOG.Colors.error + "ERROR: " + name + LOG.Colors.reset + " " + str + LOG.Colors.reset);
    }

    public static warn(name: string, str?: string) {
        if (str === undefined)
            console.log(LOG.Colors.warning + " WARNING: " + name + LOG.Colors.reset);  
        else 
            console.log(LOG.Colors.warning + " WARNING: " + name + LOG.Colors.reset + " " + str + LOG.Colors.reset);
    }

    public static lines(items: any[]) {
        var output = '';
        for (const item of items) { 
            output += LOG.fmt(item.name, item.value); 
        }
        console.log(output);
    }
}