import type { ShmoozerCreateNewModalProps } from "./types";
import type { ShmoozerType } from "../../../types/shmoozer.types";

export const onSubmit = ({onClose, createNewItem}: ShmoozerCreateNewModalProps) => (newShmoozer: ShmoozerType) => {
        console.log("Submitting new shmoozer:", newShmoozer);
        createNewItem(newShmoozer);
        onClose();
    };