import type { AxiosInstance } from "axios";
import type { KibType } from "../../types/kib.types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const printKib = (kib: KibType) => {
    const printable = <> 
      <p>id: {kib._id} </p>
      <p>kibName: {kib.kibName}</p>
      <p>shmoozerId: {kib.shmoozerId}</p>
      <p>text: {kib.text}</p>
      {kib.media && (<p>media: {kib.media}</p>)}
      <p>likes: {kib.likes}</p>
      {kib.createdAt && (<p>created on: {kib.createdAt.toString()}</p>)}
    </>
    return printable
}

export const editKib = async (
  editedKib: KibType,
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>) => {
    try {
      //next line is to send a kib without the _id field as this should not be part of th ejson sent in the patch
      const { _id, ...kibData } = editedKib;
      await api.patch(`/kibs/${editedKib._id}`, kibData);
      // 2. Update local state
      setKibs(prev => prev.map(kib => kib._id === editedKib._id ? { ...kib, ...editedKib } : kib));
      console.log("Kib updated!");
      toast.success("Kib updated successfully!");
    } catch (error) {
        console.log("Failed to update kib.");
        console.error(error);
        toast.error("Failed to update kib. Please try again.");
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
  toast.success("Kib deleted successfully!");
  } catch (error) {
    console.error("Failed to delete kib:", error);
    toast.error("Failed to delete kib. Please try again.");
  }
};

export const filterKibs = (kibs: KibType[], query: string) => {
  if (!query) return kibs;
  return kibs.filter(kib => kib.kibName.includes(query));
}

export const createNewKib = async (
  kibDataToCreate: KibType,
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>) => {
  try {
    const response = await api.post("/kibs", kibDataToCreate);
    const newKib = response.data.data; 
    setKibs(prev => [...prev, newKib]);
    console.log("New kib created:", newKib);
    toast.success("New kib created successfully!");
  } catch (error) {
    console.error("Failed to create new kib:", error);
    toast.error("Failed to create new kib. Please try again.");
  }
}