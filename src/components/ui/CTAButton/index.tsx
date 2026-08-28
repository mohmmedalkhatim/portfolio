import { motion, HTMLMotionProps } from "framer-motion";

interface CTAButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  ...props
}: CTAButtonProps) {
  // Base styles
  const baseStyles = `
    font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sky-500
    disabled:opacity-50 disabled:cursor-not-allowed
    rounded-lg inline-flex items-center justify-center gap-2
  `;

  // Size variants
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Color variants
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-sky-600 to-sky-500
      text-white hover:from-sky-500 hover:to-sky-400
      shadow-lg shadow-sky-500/20
      hover:shadow-sky-500/30
    `,
    secondary: `
      border-2 border-sky-600 bg-transparent
      text-sky-300 hover:bg-sky-600/10
      hover:border-sky-500
    `,
    outline: `
      border-2 border-white/20 bg-white/5 backdrop-blur-md
      text-white hover:bg-white/10 hover:border-white/30
    `,
    ghost: `
      bg-transparent text-sky-400
      hover:bg-sky-500/10 hover:text-sky-300
    `,
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <motion.button
      {...props}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${widthStyle}
        ${props.className}
      `}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          />
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}