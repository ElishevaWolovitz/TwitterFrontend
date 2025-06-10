import type { ShmoozerType } from '../../types/shmoozer.type';

export type ShmoozerCreateNewModalProps = {
    onClose: () => void;
    createNewShmoozer: (item: ShmoozerType) => void;
}