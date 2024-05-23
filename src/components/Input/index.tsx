import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva([
  "w-full",
  "p-3",
  "border-gray-200",
  "rounded-lg",
  "outline-none",
  "placeholder:text-sm",
  "placeholder: text-gray-400",
  "focus:border-transparent",
  "transition-all",
  "duration-100",
  "hover:border-primary-300",
  "focus:outline-primary-400",
  "border",
]);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        className={cn(inputStyles({ className }))}
        {...props}
      />
    );
  }
);
