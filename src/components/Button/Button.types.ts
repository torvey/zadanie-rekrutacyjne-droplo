import { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonProps = ComponentProps<"button"> & {
    variant?: ButtonVariant;
};
