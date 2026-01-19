export declare class LOG {
    static Colors: {
        reset: string;
        bright: string;
        dim: string;
        underscore: string;
        blink: string;
        reverse: string;
        hidden: string;
        text: string;
        number: string;
        action: string;
        warning: string;
        error: string;
        fg: {
            black: string;
            red: string;
            green: string;
            yellow: string;
            blue: string;
            magenta: string;
            cyan: string;
            white: string;
            gray: string;
            crimson: string;
        };
        bg: {
            black: string;
            red: string;
            green: string;
            yellow: string;
            blue: string;
            magenta: string;
            cyan: string;
            white: string;
            gray: string;
            crimson: string;
        };
    };
    static fmt(name: string, value: any): string;
    static line(name: string, value: any): void;
    static info(value: any): void;
    static action(name: string, str?: string): void;
    static error(name: string, str?: string): void;
    static warn(name: string, str?: string): void;
    static lines(items: any[]): void;
}
//# sourceMappingURL=Logger.d.ts.map