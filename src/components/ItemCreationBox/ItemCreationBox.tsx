import searchIcon from "@/icons/search-lg.svg";
import deleteIcon from "@/icons/trash-03.svg";
import Image from "next/image";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";

export const ItemCreationBox = () => {
    return (
        <div className="bg-bg-primary border border-border-primary py-5 px-6 rounded-lg flex">
            <div className="w-full flex flex-col gap-2">
                <div>
                    <Label className="inline-block mb-1.5">Nazwa</Label>
                    <Input placeholder="np. Promocje" />
                </div>
                <div>
                    <Label className="inline-block mb-1.5">Link</Label>
                    <Input
                        placeholder="Wklej lub wyszukaj"
                        icon={<Image src={searchIcon} alt="search icon" />}
                    />
                </div>
                <div className="mt-5 flex gap-x-2">
                    <Button variant="secondary">Anuluj</Button>
                    <Button variant="tertiary">Dodaj</Button>
                </div>
            </div>
            <div>
                <button className="w-10 h-10 ml-4 flex justify-center items-center transition-opacity hover:opacity-80">
                    <Image src={deleteIcon} alt={"delete"} />
                </button>
            </div>
        </div>
    );
};
