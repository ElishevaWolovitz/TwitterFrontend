import type { KibCreateNewModalProps } from "./types";
import type { KibType } from "../../../types/kib.types";

export const onSubmit = ({onClose, createNewItem}:KibCreateNewModalProps) => (kib: KibType) => {
        createNewItem(kib);
        onClose(); 
    };