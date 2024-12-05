import searchIcon from "@/icons/search-lg.svg";
import deleteIcon from "@/icons/trash-03.svg";
import Image from "next/image";
import { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { CreationBoxProps, FormDataType } from "./CreationBox.types";

export const CreationBox: FC<CreationBoxProps> = ({
    position,
    defaultName,
    defaultLink,
    onDelete,
    onCancel,
    onAdd,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormDataType>({
        defaultValues: {
            name: defaultName,
            link: defaultLink,
        },
    });

    const handleCancel = useCallback(() => {
        onCancel(position);
    }, [onCancel, position]);

    const handleDelete = useCallback(() => {
        onDelete(position);
    }, [onDelete, position]);

    const onSubmit = useCallback(
        (data: FormDataType) => {
            onAdd(position, data.name, data.link);
        },
        [position, onAdd]
    );

    return (
        <form
            className="bg-bg-primary border border-border-primary py-5 px-6 rounded-lg flex w-full"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="w-full flex flex-col gap-2">
                <div>
                    <Label className="inline-block mb-1.5">Nazwa</Label>
                    <Input
                        placeholder="np. Promocje"
                        error={errors.name?.message as string}
                        {...register("name", {
                            required: "Nazwa jest wymagana",
                        })}
                    />
                </div>
                <div>
                    <Label className="inline-block mb-1.5">Link</Label>
                    <Input
                        placeholder="Wklej lub wyszukaj"
                        icon={<Image src={searchIcon} alt="search icon" />}
                        error={errors.link?.message as string}
                        {...register("link", {
                            required: "Link jest wymagany",
                            pattern: {
                                value: /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
                                message: "Nieprawidłowy link",
                            },
                        })}
                    />
                </div>
                <div className="mt-5 flex gap-x-2">
                    <Button
                        variant="secondary"
                        onClick={handleCancel}
                        type="button"
                    >
                        Anuluj
                    </Button>
                    <Button variant="tertiary" type="submit">
                        Dodaj
                    </Button>
                </div>
            </div>
            <div>
                <button
                    className="w-10 h-10 ml-4 flex justify-center items-center transition-opacity hover:opacity-80"
                    onClick={handleDelete}
                    type="button"
                >
                    <Image src={deleteIcon} alt={"delete"} />
                </button>
            </div>
        </form>
    );
};
