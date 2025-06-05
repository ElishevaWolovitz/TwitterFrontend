import type { KibType } from "./types";

export const printKib = (kib: KibType) => {
    const printable = <> 
    <p>id: {kib._id} </p>
    <p>kibName: {kib.kibName}</p>
    <p>shmoozerId: {kib.shmoozerId}</p>
    <p>text: {kib.text}</p>
    {kib.media && (<p>media: {kib.media}</p>)}
    {kib.likes && (<p>likes: {kib.likes}</p>)}
    {kib.createdAt && (<p>created on: {kib.createdAt.toString()}</p>)}</>
    return printable
}

export const editKib = (kibToEdit: KibType) => {
    console.log(`edit kib with id: ${kibToEdit._id}`);
};


export const deleteKib = (kibToDelete: KibType) => {
    console.log(`delete kib with id: ${kibToDelete._id}`);
};

export const filterKibs = (kibs: KibType[], query: string) => {
    if (!query) return kibs;
    return kibs.filter(kib => kib.kibName == query);
}
