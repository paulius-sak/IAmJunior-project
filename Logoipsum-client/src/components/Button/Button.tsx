import styles from "./Button.module.scss";
import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  rounded?: boolean;
}

const Button = ({ className, rounded, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        rounded && styles.rounded,
        className
      )}
      {...props}
    />
  );
};

export default Button;
