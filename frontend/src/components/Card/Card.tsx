import EditModal from '../EditModal';
import EditButton from '../Button/EditButton';
import DeleteButton from '../Button/DeleteButton';
import type { CardProps } from './types';
import { Styles } from './styles';
import { useState } from 'react';
import { partial } from 'lodash/fp';


const Card = <T extends object>({ post, printItem, editItem, deleteItem, ModalChildrenComp }: CardProps<T>) => {
  const classes = Styles()
  const [openEditModal, setOpenEditModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<T | null>(null);

  const handleEditClick = (item: T) => {
      setItemToEdit(item);
      setOpenEditModal(true);
  };

  return (
    <div className={classes.card}>
      {printItem(post)}
      <div className={classes.buttonGroup}>
        {editItem && (
          <EditButton onClick={partial(handleEditClick, [post])} />
        )}
        {deleteItem && (
          <DeleteButton onClick={partial(deleteItem, [post])} />
        )}
      </div>
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