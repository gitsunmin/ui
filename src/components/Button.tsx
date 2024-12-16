type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLButtonElement> & {
    title: string;
  }
>;

export const Button = ({ title, className, ...props }: Props) => {
  return (
    <button className={className} {...props}>
      {title}
    </button>
  );
};
