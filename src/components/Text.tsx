import type { TypographyToken } from '@/tokens/typography';
import { cn } from '@/utils/classname';

type TextVariant = 'bold' | 'normal' | 'bright';

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLSpanElement> & {
    token: TypographyToken;
    variant?: TextVariant;
  }
>;

const Text = ({ token, variant = 'normal', children, ...others }: Props) => {
  const props = {
    className: cn(
      {
        'light-text-shadow dark:dark-text-shadow': variant === 'bright',
        'font-bold': variant === 'bold',
      },
      {
        'text-body-1': token === 'body-1',
        'text-body-2': token === 'body-2',
        'text-body-3': token === 'body-3',
      },
      'text-light-foreground-primary dark:text-dark-foreground-primary',
      others.className
    ),
    ...others,
  };

  const Components: Record<TypographyToken, JSX.Element> = {
    'heading-1': <h1 {...props}>{children}</h1>,
    'heading-2': <h2 {...props}>{children}</h2>,
    'heading-3': <h3 {...props}>{children}</h3>,
    'heading-4': <h4 {...props}>{children}</h4>,
    'heading-5': <h5 {...props}>{children}</h5>,
    'heading-6': <h6 {...props}>{children}</h6>,
    'body-1': <span {...props}>{children}</span>,
    'body-2': <span {...props}>{children}</span>,
    'body-3': <span {...props}>{children}</span>,
  };

  return Components[token] ?? <span>{children}</span>;
};

export default Text;
