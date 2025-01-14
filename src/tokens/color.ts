import { FOUNDATION } from './../foundations';

type DefinedColor = string;

type ColorTheme = {
    primary: DefinedColor;
    foreground: {
        primary: DefinedColor;
    }
    background: {
        primary: DefinedColor;
    },
    button: {
        foreground: {
            primary: DefinedColor;
        };
        background: {
            primary: DefinedColor;
        };
        ripple: {
            primary: DefinedColor;
        }
    };
};

export const dark: ColorTheme = {
    primary: FOUNDATION.color.orange[500],
    foreground: {
        primary: FOUNDATION.color.white,
    },
    background: {
        primary: FOUNDATION.color.black,
    },
    button: {
        foreground: {
            primary: FOUNDATION.color.orange[500],
        },
        background: {
            primary: FOUNDATION.color.white,
        },
        ripple: {
            primary: FOUNDATION.color.orange[300],
        },
    },
};

export const light: ColorTheme = {
    primary: FOUNDATION.color.teal[900],
    foreground: {
        primary: FOUNDATION.color.black,
    },
    background: {
        primary: FOUNDATION.color.white,
    },
    button: {
        foreground: {
            primary: FOUNDATION.color.teal[900],
        },
        background: {
            primary: FOUNDATION.color.white,
        },
        ripple: {
            primary: FOUNDATION.color.teal[300],
        },
    },
};

export const color = {
    dark,
    light,
};