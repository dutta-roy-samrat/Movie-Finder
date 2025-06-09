import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/classname";

import styles from "./main.module.css";

type ButtonVariant = "default" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const classNameMapping: Record<ButtonVariant, string> = {
  default: styles.defaultBtnClass,
  danger: styles.dangerBtnClass,
};

const Button = ({ className = "",children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        classNameMapping[props.variant || "default"],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
