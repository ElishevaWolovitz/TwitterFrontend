import type { KibType } from "./types";

export const printKib = (kib: KibType): string => {
    const printable = `id: ${kib._id},
    kibName: ${kib.kibName},
    shmoozerId: ${kib.shmoozerId},
    text: ${kib.text},
    media: ${kib.media},
    likes: ${kib.likes},
    created on: ${kib.createdAt}`
    return printable
}

export const editKib = (kibToEdit: KibType) => {
    console.log(`edit kib with id: ${kibToEdit._id}`);
};


export const deleteKib = (kibToDelete: KibType) => {
    console.log(`delete kib with id: ${kibToDelete._id}`);
};

export const filterKibs = (kibs: KibType[], query: string) => {
    console.log(`filter all kibs so only kibs matching sting query ${query} from kibs: ${kibs}`);
    return kibs;
}
