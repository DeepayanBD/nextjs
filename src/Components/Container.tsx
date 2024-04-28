type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function Container({ children, className }: Props) {
  return (
    <div className={`container px-8 mx-auto xl:px-5 ${className}`}>
      {children}
    </div>
  );
}
