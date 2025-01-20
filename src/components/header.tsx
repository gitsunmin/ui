import Text from '@/components/Text';
import { cn } from '@/utils/classname';

type Props = React.PropsWithChildren<{
  logo?: React.ReactNode;
  title?: React.ReactNode;
  href?: string;
  right?: React.ReactNode;
  className?: string;
}>;

const Header = (props: Props) => {
  const {
    title = '',
    href = '#',
    logo = <></>,
    right = <></>,
    className,
    children,
  } = props;
  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full px-4 py-2 backdrop-blur-sm flex justify-between items-center shadow-xl',
          className
        )}
      >
        <a href={href} className="flex items-center justify-center gap-x-1">
          {logo}
          <Text className="block md:hidden" token="heading-6">
            {title}
          </Text>
          <Text className="hidden md:block" token="heading-3">
            {title}
          </Text>
        </a>
        {right}
      </header>
      {children}
    </>
  );
};

export default Header;
