"use client";

import plusIcon from "@/icons/plus-circle.svg";
import Image from "next/image";
import { Button } from "../Button/Button";
import { EmptyMenuBoxProps } from "./EmptyMenuBox.types";

export const EmptyMenuBox = ({ onClick }: EmptyMenuBoxProps) => {
    return (
        <div className="rounded-lg border border-border-secondary bg-bg-secondary py-6 flex flex-col items-center">
            <span className="font-semibold leading-6 mb-1">
                Menu jest puste
            </span>
            <span className="text-sm leading-5 text-text-tertiary">
                W tym menu nie ma jeszcze żadnych linków.
            </span>
            <Button className="mt-6" onClick={onClick}>
                <div className="flex">
                    <Image src={plusIcon} alt="plus" className="mr-1" />
                    Dodaj pozycję menu
                </div>
            </Button>
        </div>
    );
};
