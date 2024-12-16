import { cn } from '@/utils/classname';

type Props = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: React.ReactNode;
  }
>;

export const Button = ({ title, className = '', ...props }: Props) => {
  return (
    <button className={cn(className)} {...props}>
      {title}
    </button>
  );
};
