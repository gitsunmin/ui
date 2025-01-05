import { cn } from '@/utils/classname';
import { useRef, useState } from 'react';

type Variant = 'primary' | 'secondary';

type Props = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
  }
>;

export const Button = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}: Props) => {
  const [ripples, setRipples] = useState<{ x: number; y: number }[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRipples((prev) => [...prev, { x, y }]);

      setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 300);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        className,
        'px-4 py-2 rounded overflow-hidden relative',
        'light-border dark:dark-border',
        'font-bold',
        'light-text-shadow dark:dark-text-shadow',
        {
          'bg-light-button-background-primary dark:bg-dark-button-background-primary text-light-button-foreground-primary dark:text-dark-button-foreground-primary':
            variant === 'primary',
        }
      )}
      {...props}
    >
      {children}
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className={cn(`absolute rounded-full opacity-50 animate-ripple`, {
            'bg-light-button-foreground-primary dark:bg-dark-button-foreground-primary':
              variant === 'primary',
          })}
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50,
          }}
        />
      ))}
    </button>
  );
};
