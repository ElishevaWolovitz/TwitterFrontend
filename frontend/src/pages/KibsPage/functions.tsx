import type { AxiosInstance } from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { KibType } from "../../types/kib.types";
import PrintKib from '../../structures/Print/PrintKib';

export const printKib = (kib: KibType) => {
  return (
    <PrintKib kib={kib} />
  );
}

export const editKib = async (
  editedKib: KibType,
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>) => {
    const { _id, ...kibData } = editedKib;
    const updatedKibResults = await api.patch(`/kibs/${editedKib._id}`, kibData).catch((error) => {
        console.error("Error updating kib:", error)
        toast.error("Failed to update kib. Please try again.");
      });
    if (updatedKibResults)
      {
        //convert prev.map to functional programing style
        setKibs(prev => prev.map(kib => kib._id === editedKib._id ? { ...kib, ...editedKib } : kib));
        toast.success("Kib updated successfully!");
        console.log("Kib updated!");
      }
};


export const deleteKib = async (
  kibToDelete: KibType,
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>) => {
  const deleteKibResults = await api.delete(`/kibs/${kibToDelete._id}`).catch((error) => {
    console.error("Error deleting kib:", error);
    toast.error("Failed to delete kib. Please try again.");
  });
  if(deleteKibResults) {
    setKibs(prev => prev.filter(kib => kib._id !== kibToDelete._id));
    console.log(`Deleted kib with id: ${kibToDelete._id}`);
    toast.success("Kib deleted successfully!");
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
    const createMewKibResults = await api.post("/kibs", kibDataToCreate).catch((error) => {
    console.error("Error creating new kib:", error);
    toast.error("Failed to create new kib. Please try again.");
  });
  if(createMewKibResults){
      const newKib = createMewKibResults.data.data; 
      setKibs(prev => [...prev, newKib]);
      console.log("New kib created:", newKib);
      toast.success("New kib created successfully!");
  }
}