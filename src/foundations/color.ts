type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

const hsl = (hue: IntRange<0, 361>, saturation: IntRange<0, 101>, lightness: IntRange<0, 101>) => `hsl(${hue}, ${saturation}%, ${lightness}%)`;

/**
 * Reference: https://hypejunction.github.io/color-wizard/
 */

export const color = {
    orange: {
        0: hsl(30, 100, 94),
        100: hsl(30, 100, 90),
        200: hsl(30, 100, 86),
        300: hsl(30, 100, 77),
        400: hsl(30, 100, 68),
        500: hsl(30, 100, 59),
        600: hsl(30, 100, 50),
        700: hsl(30, 100, 41),
        800: hsl(30, 100, 32),
        900: hsl(30, 100, 23),
    },
    cyan: {
        0: hsl(188, 80, 94),
        100: hsl(188, 80, 90),
        200: hsl(188, 80, 86),
        300: hsl(188, 80, 77),
        400: hsl(188, 80, 68),
        500: hsl(188, 80, 59),
        600: hsl(188, 80, 50),
        700: hsl(188, 80, 41),
        800: hsl(188, 80, 32),
        900: hsl(188, 80, 23),
    },
    teal: {
        0: hsl(162, 80, 94),
        100: hsl(162, 80, 90),
        200: hsl(162, 80, 86),
        300: hsl(162, 80, 77),
        400: hsl(162, 80, 68),
        500: hsl(162, 80, 59),
        600: hsl(162, 80, 50),
        700: hsl(162, 80, 41),
        800: hsl(162, 80, 32),
        900: hsl(162, 80, 23),
    },
    white: hsl(0, 0, 100),
    black: hsl(0, 0, 0),
};