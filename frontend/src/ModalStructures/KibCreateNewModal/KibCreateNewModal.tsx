import type { KibCreateNewModalProps } from "../KibCreateNewModal/types"
import { useForm } from "react-hook-form"
import type { KibType } from '../../types/kib.types'

const KibCreateNewModal =({onClose, createNewItem}: KibCreateNewModalProps) => {
    const {
            register,
            handleSubmit,             
            formState: { errors } 
        } = useForm<KibType>();

        const onSubmit = (kib: KibType) => {
            console.log("Submitting new kib:", kib);
            createNewItem(kib);
            onClose();
        };
    
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3> Create New Kib </h3>
                <label>
                    Kib Name:
                    <input
                        type="text"
                        {...register("kibName", { required: true })}
                        placeholder="Kib Name"
                    />
                    {errors.kibName && <span>This field is required</span>}
                </label>
                <label>
                    Shmoozer ID:
                    <input
                        type="text"
                        {...register("shmoozerId", { required: true })}
                        placeholder="Shmoozer ID"
                    />
                    {errors.shmoozerId && <span>This field is required</span>}
                </label>
                <label>
                    Text:
                    <textarea
                        {...register("text", { required: true })}
                        placeholder="Kib Text"
                    />
                    {errors.text && <span>This field is required</span>}
                </label>
                <label>
                    Media:
                    <input
                        type="text"
                        {...register("media",
                            {setValueAs: v => v === "" ? undefined : v}
                        )}
                        placeholder="Media URL"
                    />
                </label>
                <label>
                    Likes:
                    <input
                        type="number"
                        {...register("likes",
                            {setValueAs: v => v === "" ? undefined : Number(v)}
                        )}
                        placeholder="Number of Likes"
                    />
                </label>
                <label> 
                    Created At:
                    <input
                        type="text"
                        {...register("createdAt",
                            {setValueAs: v => v === "" ? undefined : v}
                        )}
                        placeholder="Creation Date"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
}

export {KibCreateNewModal}
