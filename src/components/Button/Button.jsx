import React from "react";

const Button = ({
  children, // This will be the text or content inside the button
  onClick,
  type = "button", // Default type is "button"
  variant = "primary", // Primary, secondary, or other variants
  size = "medium", // Small, medium, or large
  disabled = false,
  className = "",
}) => {
  const baseStyle =
    "rounded-full px-4 py-2 font-semibold focus:outline-none transition-transform transform hover:scale-105";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    small: "text-sm px-2 py-1",
    medium: "text-md px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  // Fallback for variant if it doesn't exist in variantStyles
  const buttonVariant = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${buttonVariant} ${
        sizeStyles[size]
      } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children} {/* The button text/content */}
    </button>
  );
};

export default Button;
