import type { KibType } from '../../types/kib.types'

export type KibCreateNewModalProps = {
    onClose: () => void;
    createNewItem: (item: KibType) => void;
}