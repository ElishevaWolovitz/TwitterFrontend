import type { KibType } from "../../types/kib.types";
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

export const editKib = async (
  editedKib: KibType,
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>) => {
    try {
        // 1. Update the kib in the backend
        await api.put(`/kibs/${editedKib._id}`, editedKib);

        // 2. Optionally update local state (if you have setKibs)
        setKibs(prev => prev.map(kib => kib._id === editedKib._id ? { ...kib, ...editedKib } : kib));

        // 3. Optionally show feedback
        alert("Kib updated!");
    } catch (error) {
        // Optionally show error feedback
        alert("Failed to update kib.");
        console.error(error);
    }
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
