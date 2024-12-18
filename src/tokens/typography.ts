
export const typographyVariant = ['heading', 'body'] as const;

export type TypographyVariant = typeof typographyVariant[number];

export const typographySize = [1, 2, 3, 4, 5, 6] as const;

export type TypographySize = typeof typographySize[number];

export const typographyWeight = {
    normal: '400',
    bold: '700',
};

export type TypographyTokenKey = `${TypographyVariant}-${TypographySize}`;

export const TypographyToken: Record<TypographyTokenKey, string> = {
    'heading-1': '3.000rem',
    'heading-2': '2.750rem',
    'heading-3': '2.500rem',
    'heading-4': '2.000rem',
    'heading-5': '1.750rem',
    'heading-6': '1.500rem',
    'body-1': '1.125rem',
    'body-2': '1.375rem',
    'body-3': '1.625rem',
    'body-4': '1.875rem',
    'body-5': '2.125rem',
    'body-6': '2.375rem',
};
