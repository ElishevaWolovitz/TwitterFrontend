import type { AxiosInstance } from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { KibType } from "../../types/kib.types";
import PrintKib from '../../structures/Print/PrintKib';
import { handleError } from "../../functions";
import { map, filter, includes } from 'lodash/fp';

export const getKibs = async(
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  api: AxiosInstance) => {
    setLoading(false);
    const kibs = await api.get('kibs').catch(handleError("Failed to get kibs from database"))
    if(kibs)
      setKibs(kibs.data.data);
      setLoading(false);
}

export const printKib = (kib: KibType) => {
  return <PrintKib kib={kib} />;
}

const findAndEditKib = (editedKib: KibType) => (kib: KibType) =>
  kib._id === editedKib._id ? { ...kib, ...editedKib } : kib;

const handleMapKibs = (editedKib: KibType) =>
  map(findAndEditKib(editedKib));

export const editKib = async (
  editedKib: KibType,
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>) => {
    const { _id, ...kibData } = editedKib;
    const updatedKibResults = await api.patch(`/kibs/${editedKib._id}`, kibData)
      .catch(handleError("Failed to update kib. Please try again."));
    if (updatedKibResults)
      {
        //convert prev.map to functional programing style
        setKibs(handleMapKibs(editedKib));
        toast.success("Kib updated successfully!");
        console.log("Kib updated!");
      }
};

const findKibToDeleteById = (kibToDelete: KibType) => (kib: KibType) =>
  kib._id !== kibToDelete._id

const handleFilterKibsById = (kibToDelete: KibType) => 
  filter(findKibToDeleteById(kibToDelete));

export const deleteKib = async (
  kibToDelete: KibType,
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>) => {
  const deleteKibResults = await api.delete(`/kibs/${kibToDelete._id}`).catch(handleError("Failed to delete kib. Please try again."));
  if(deleteKibResults) {
    setKibs(handleFilterKibsById(kibToDelete));
    console.log(`Deleted kib with id: ${kibToDelete._id}`);
    toast.success("Kib deleted successfully!");
  }
};
const findKibNameIncludesQuery = (query: string) => (kib: KibType) =>
  includes(query)(kib.kibName);

export const filterKibsByName = (kibs: KibType[], query: string) => {
  if (!query) return kibs;
  return filter(findKibNameIncludesQuery(query))(kibs);
}

const appendKib = (newKib: KibType) => (kibs: KibType[]) => [...kibs, newKib];

export const createNewKib = async (
  kibDataToCreate: KibType,
  api: AxiosInstance,
  setKibs: React.Dispatch<React.SetStateAction<KibType[]>>) => {
    const createNewKibResults = await api.post("/kibs", kibDataToCreate).catch(handleError("Failed to create new kib. Please try again."));
  if(createNewKibResults){
      const newKib = createNewKibResults.data.data; 
      setKibs(appendKib(newKib));
      console.log("New kib created:", newKib);
      toast.success("New kib created successfully!");
  }
}