
type DefinedColor = `var(--${string}-color)`;

type ColorTheme = {
    primary: DefinedColor;
    foreground: {
        primary: DefinedColor;
    }
    background: {
        primary: DefinedColor;
    },
    border: {
        primary: DefinedColor;
    };
    button: {
        foreground: {
            primary: DefinedColor;
        };
        background: {
            primary: DefinedColor;
        };
    };
};

export const dark: ColorTheme = {
    primary: 'var(--dark-primary-color)',
    foreground: {
        primary: 'var(--dark-foreground-primary-color)',
    },
    background: {
        primary: 'var(--dark-background-primary-color)',
    },
    border: {
        primary: 'var(--dark-border-primary-color)'
    },
    button: {
        foreground: {
            primary: `var(--dark-button-foreground-primary-color)`,
        },
        background: {
            primary: `var(--dark-button-background-primary-color)`,
        },
    },
};

export const light: ColorTheme = {
    primary: 'var(--light-primary-color)',
    foreground: {
        primary: 'var(--light-foreground-primary-color)',
    },
    background: {
        primary: 'var(--light-background-primary-color)',
    },
    border: {
        primary: 'var(--light-border-primary-color)'
    },
    button: {
        foreground: {
            primary: `var(--light-button-foreground-primary-color)`,
        },
        background: {
            primary: `var(--light-button-background-primary-color)`,
        },
    },
};

export const colors = {
    dark,
    light,
};