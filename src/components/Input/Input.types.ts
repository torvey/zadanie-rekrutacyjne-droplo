import { ComponentProps, ReactNode } from "react";

export type InputProps = ComponentProps<"input"> & {
    icon?: ReactNode;
};
