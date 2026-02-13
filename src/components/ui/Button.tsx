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
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform active:scale-95";

  const variants = {
    primary: "bg-cta text-white hover:bg-ctaHover shadow-lg hover:shadow-xl hover:scale-105",
    outline: "border-2 border-cta text-cta hover:bg-cta hover:text-white hover:scale-105",
    white: "bg-white text-cta hover:bg-gray-100 shadow-md hover:scale-105"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], fullWidth && "w-full", className)}
      type={props.type || 'button'}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
};
