import { cn } from "@/utils";
import { Box, BoxProps } from "../Box";

type StackProps = BoxProps;

export const Stack = ({ className, ...props }: StackProps) => {
  return (
    <Box {...props} className={cn("flex flex-col items-start", className)} />
  );
};
