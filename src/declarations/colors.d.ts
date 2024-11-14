import 'colors';

declare module 'colors' {
    interface String {
        // Text colors
        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        gray: string;
        grey: string;

        // Bright text colors
        brightRed: string;
        brightGreen: string;
        brightYellow: string;
        brightBlue: string;
        brightMagenta: string;
        brightCyan: string;
        brightWhite: string;

        // Background colors
        bgBlack: string;
        bgRed: string;
        bgGreen: string;
        bgYellow: string;
        bgBlue: string;
        bgMagenta: string;
        bgCyan: string;
        bgWhite: string;
        bgGray: string;
        bgGrey: string;

        // Bright background colors
        bgBrightRed: string;
        bgBrightGreen: string;
        bgBrightYellow: string;
        bgBrightBlue: string;
        bgBrightMagenta: string;
        bgBrightCyan: string;
        bgBrightWhite: string;

        // Styles
        reset: string;
        bold: string;
        dim: string;
        italic: string;
        underline: string;
        inverse: string;
        hidden: string;
        strikethrough: string;

        // Extras
        rainbow: string;
        zebra: string;
        america: string;
        trap: string;
        random: string;
    }
}