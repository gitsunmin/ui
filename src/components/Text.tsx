import type {
  TypographySize,
  TypographyVariant,
  TypographyTokenKey,
} from '@/tokens/typography';
import { cn } from '@/utils/classname';
import { match, P } from 'ts-pattern';

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLSpanElement> & {
    variant: TypographyVariant;
    size: TypographySize;
    bold?: boolean;
  }
>;

export const Text = ({
  variant,
  size,
  bold = false,
  children,
  ...others
}: Props) => {
  const props = {
    className: cn(
      {
        'font-bold': bold,
        'text-body-1': variant === 'body' && size === 1,
        'text-body-2': variant === 'body' && size === 2,
        'text-body-3': variant === 'body' && size === 3,
        'text-body-4': variant === 'body' && size === 4,
        'text-body-5': variant === 'body' && size === 5,
        'text-body-6': variant === 'body' && size === 6,
      },
      others.className
    ),
    ...others,
  };

  const Components: Record<TypographyTokenKey, JSX.Element> = {
    'heading-1': <h1 {...props}>{children}</h1>,
    'heading-2': <h2 {...props}>{children}</h2>,
    'heading-3': <h3 {...props}>{children}</h3>,
    'heading-4': <h4 {...props}>{children}</h4>,
    'heading-5': <h5 {...props}>{children}</h5>,
    'heading-6': <h6 {...props}>{children}</h6>,
    'body-1': <p {...props}>{children}</p>,
    'body-2': <p {...props}>{children}</p>,
    'body-3': <p {...props}>{children}</p>,
    'body-4': <p {...props}>{children}</p>,
    'body-5': <p {...props}>{children}</p>,
    'body-6': <p {...props}>{children}</p>,
  };

  return match([variant, size])
    .with(
      [P.union('heading', 'body'), P.number.between(1, 6)],
      ([variant, size]) => Components[`${variant}-${size}`]
    )
    .otherwise(() => children);
};
