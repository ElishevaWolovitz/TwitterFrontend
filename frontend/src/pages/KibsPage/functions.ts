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

export const useEditKib = (idToEdit: string) => {
    console.log(`edit kib with id: ${idToEdit}`);
};


export const deleteKib = ( idToDelete: string) => {
    console.log(`delete kib with id: ${idToDelete}`);
};
