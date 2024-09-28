import {
  Button as HeadlessButton,
  type ButtonProps as HeadlessButtonProps,
} from "@headlessui/react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = HeadlessButtonProps & {
  className?: string;
  kind?: "default" | "primary" | "secondary" | "warning" | "danger";
};

const baseClass = "px-4 py-2 rounded-md data-[disabled]:cursor-not-allowed";

const kindClasses: Record<NonNullable<ButtonProps["kind"]>, string> = {
  default:
    "bg-gray-300 data-[disabled]:bg-gray-200 data-[active]:bg-gray-400 text-gray-900 data-[disabled]:text-gray-400",
  primary:
    "bg-brand-blue data-[disabled]:bg-brand-blue-200 data-[active]:bg-brand-blue-800 text-white",
  secondary:
    "bg-brand-green data-[active]:bg-brand-green-900 data-[disabled]:bg-green-200 text-white",
  warning:
    "bg-brand-yellow data-[active]:bg-brand-yellow-700 data-[disabled]:bg-brand-yellow-300 text-white",
  danger:
    "bg-brand-red data-[active]:bg-brand-red-900 data-[disabled]:bg-brand-red-100 text-white",
};

export default function Button({
  className,
  disabled,
  kind,
  type: buttonType,
  ...props
}: ButtonProps) {
  buttonType ??= "button";
  kind ??= "default";

  const buttonClass = twMerge(baseClass, kindClasses[kind], className);

  return (
    <HeadlessButton
      className={buttonClass}
      disabled={disabled}
      type={buttonType}
      {...props}
    />
  );
}
