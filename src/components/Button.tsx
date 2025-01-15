import { cn } from '@/utils/classname';
import { useRef, useState } from 'react';

type Variant = 'primary' | 'secondary';

type Props = React.PropsWithChildren<{
  variant: Variant;
  className?: string;
}>;

const Button = ({
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
        'font-bold',
        'outline outline-1',
        {
          'bg-light-button-background-primary dark:bg-dark-button-background-primary text-light-button-foreground-primary dark:text-dark-button-foreground-primary light-text-shadow dark:dark-text-shadow':
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
            'bg-light-button-ripple-primary dark:bg-dark-button-ripple-primary':
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

export default Button;
