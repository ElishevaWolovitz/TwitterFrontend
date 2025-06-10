import type { ShmoozerType } from '../../../types/shmoozer.types';

export type ShmoozerCreateNewModalProps = {
    onClose: () => void;
    createNewItem: (item: ShmoozerType) => void;
}