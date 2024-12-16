type Props = React.PropsWithChildren<{ title: React.ReactNode }>;

export const Button = ({ title, ...props }: Props) => {
  return <button {...props}>{title}</button>;
};
