import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  fullWidth = false,
  onClick,
  type,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95 relative overflow-hidden";

  const variants = {
    primary: "bg-cta text-white hover:bg-ctaHover shadow-lg hover:shadow-2xl before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-300",
    outline: "border-2 border-cta text-cta hover:bg-cta hover:text-white shadow-md hover:shadow-lg before:absolute before:inset-0 before:bg-cta before:opacity-0 hover:before:opacity-5 before:transition-opacity before:duration-300",
    white: "bg-white text-cta hover:bg-gray-50 shadow-md hover:shadow-lg before:absolute before:inset-0 before:bg-gray-100 before:opacity-0 hover:before:opacity-50 before:transition-opacity before:duration-300"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], fullWidth && "w-full", className)}
      type={type || 'button'}
      onClick={onClick}
      {...(props as any)}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
