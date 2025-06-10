import type { CardProps } from './types';
import { useCardStyles } from './styles';
import { useState } from 'react';
import EditModal from '../Modal/EditModal';


const Card = <T extends object>({ post, printItem, editItem, deleteItem, ModalChildrenComp }: CardProps<T>) => {
  const classes = useCardStyles()
  const [openEditModal, setOpenEditModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<T | null>(null);

  const handleEditClick = (item: T) => {
      setItemToEdit(item);
      setOpenEditModal(true);
  };

  return (
    <div className={classes.card}>
      {printItem(post)}
      {editItem && (
        <button type="button" className={classes.button} onClick={() => handleEditClick(post)}>
          Edit
        </button>
      )}
      {deleteItem && (
        <button type="button" className={classes.button} onClick={() => deleteItem(post)}>
          Delete
        </button>
      )}
      {openEditModal && itemToEdit && ModalChildrenComp && editItem && (
        <EditModal 
            openModal={openEditModal} 
            setOpenModal={setOpenEditModal} 
            editItem={editItem}
            children={ModalChildrenComp} 
            itemToEdit={itemToEdit}
        />
      )}
    </div>
  )
}

export { Card }