import type { KibCreateNewModalProps } from "./types"
import { useForm } from "react-hook-form"
import type { KibType } from '../../../types/kib.types'
import { emptyToUndefined, emptyToZeroOrNumber } from "../functions"
import SubmitButton from '../../../components/Button/SubmitButton';
import CancelButton from '../../../components/Button/CancelButton';
import { Styles } from './styles'
import { onSubmit } from "./functions";

const KibCreateNewModal =({onClose, createNewItem}: KibCreateNewModalProps) => {
    const classes = Styles();
    const {
            register,
            handleSubmit,             
            formState: { errors } 
        } = useForm<KibType>();

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modalContent}>
                <button className={classes.closeButton} onClick={onClose}>
                ×
                </button>
                <div className={classes.header}>Create New Shmoozer</div>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit({onClose, createNewItem}))}>
                    <label className={classes.label}>
                        Kib Name:
                        <input
                            className={classes.input}
                            type="text"
                            {...register("kibName", { required: true })}
                            placeholder="Kib Name"
                        />
                        {errors.kibName && <span className={classes.error}>This field is required</span>}
                    </label>
                    <label className={classes.label}>
                        Shmoozer ID:
                        <input
                            className={classes.input}
                            type="text"
                            {...register("shmoozerId", { required: true })}
                            placeholder="Shmoozer ID"
                        />
                        {errors.shmoozerId && <span className={classes.error}>This field is required</span>}
                    </label>
                    <label className={classes.label}>
                        Text:
                        <textarea
                            className={classes.textarea}
                            {...register("text", { required: true })}
                            placeholder="Kib Text"
                        />
                        {errors.text && <span className={classes.error}>This field is required</span>}
                    </label>
                    <label className={classes.label}>
                        Media:
                        <input
                            className={classes.input}
                            type="text"
                            {...register("media",
                                {setValueAs: emptyToUndefined}
                            )}
                            placeholder="Media URL"
                        />
                    </label>
                    <label className={classes.label}>
                        Likes:
                        <input
                            className={classes.input}
                            type="number"
                            {...register("likes",
                                {setValueAs: emptyToZeroOrNumber}
                            )}
                            placeholder="Number of Likes"
                        />
                    </label>
                    <label className={classes.label}> 
                        Created At:
                        <input
                            className={classes.input}
                            type="text"
                            {...register("createdAt",
                                {setValueAs: emptyToUndefined}
                            )}
                            placeholder="Creation Date"
                        />
                    </label>
                    <div className={classes.actions}>
                        <SubmitButton />
                        <CancelButton onClick={onClose}/>
                    </div>
                </form>
            </div>
       </div>
    )
}

export {KibCreateNewModal}
