export const typographyVariant = ['heading', 'body'] as const;

export type TypographyVariant = typeof typographyVariant[number];

export const typographyHeadingSize = [1, 2, 3, 4, 5, 6] as const;
export const typographyBodySize = [1, 2, 3] as const;

export type TypographyHeadingSize = typeof typographyHeadingSize[number];
export type TypographyBodySize = typeof typographyBodySize[number];

export type TypographySize = TypographyHeadingSize | TypographyBodySize;


export type TypographyToken =
    | `heading-${TypographyHeadingSize}`
    | `body-${TypographyBodySize}`;

export const typographyWeight = {
    thin: '100',
    normal: '400',
    bold: '700',
};

export const fontFamily = {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
}

export const typography = {
    fontSize: {
        'heading-1': '3.000rem',
        'heading-2': '2.750rem',
        'heading-3': '2.500rem',
        'heading-4': '2.000rem',
        'heading-5': '1.750rem',
        'heading-6': '1.500rem',
        'body-1': '1.125rem',
        'body-2': '1.375rem',
        'body-3': '1.625rem',
    },
    fontWeight: {
        thin: '100',
        normal: '400',
        bold: '700',
    },
} as const;
