
type ColorTheme = {
    primary: string;
    foreground: {
        primary: string;
    }
    background: {
        primary: string;
    }
};

export const dark: ColorTheme = {
    primary: 'hsl(30, 100%, 50%)',
    foreground: {
        primary: 'hsl(30, 100%, 10%)',
    },
    background: {
        primary: 'hsl(30, 100%, 100%)',
    },
};

export const light: ColorTheme = {
    primary: 'hsl(240, 80%, 50%)',
    foreground: {
        primary: 'hsl(240, 100%, 10%)',
    },
    background: {
        primary: 'hsl(240, 100%, 100%)',
    },
};

export const colors = {
    dark,
    light,
};