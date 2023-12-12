interface ButtonProps extends React.ComponentProps<"button"> {
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  square?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className = "",
  disabled = false,
  loading = false,
  onClick = () => {},
  leftIcon,
  rightIcon,
  square = false,
}) => {

  return (
    <button
      type={type}
      className={` 
           shadow-md flex items-center justify-center px-8 py-3
           border border-transparent text-base
           font-medium rounded-md text-background bg-primary
           hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10
           ${className}
           ${
             disabled &&
             "bg-gray-50 text-gray-200 hover:cursor-not-allowed hover:bg-gray-500"
           }
           ${square && "aspect-square"}
            rounded 
           `}
      disabled={loading || disabled}
      onClick={onClick}
    >
      <span className="flex h-full items-center justify-center gap-1">
        {leftIcon && leftIcon}
        {/* {loading && <Loading />} */}
        {loading && <div>loading...</div>}
        <span>{children}</span>

        {rightIcon && rightIcon}
      </span>
    </button>
  );
};

export default Button;
