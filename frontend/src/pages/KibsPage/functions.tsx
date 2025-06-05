import type { KibType } from "./types";
import type { AxiosInstance } from "axios";

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


export const deleteKib = async (
    kibToDelete: KibType,
    api: AxiosInstance,
    setKibs: React.Dispatch<React.SetStateAction<KibType[]>>) => {
    try {
    await api.delete(`/kibs/${kibToDelete._id}`);
    setKibs(prev => prev.filter(kib => kib._id !== kibToDelete._id));
    console.log(`Deleted kib with id: ${kibToDelete._id}`);
  } catch (error) {
    console.error("Failed to delete kib:", error);
  }
};

export const filterKibs = (kibs: KibType[], query: string) => {
    if (!query) return kibs;
    return kibs.filter(kib => kib.kibName == query);
}
