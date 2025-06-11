import type { KibEditModalProp } from './types';
import type { KibType } from '../../../types/kib.types'
import { useForm } from "react-hook-form";
import { emptyToUndefined, emptyToZeroOrNumber } from "../functions";


const KibEditModal = ({ _id, kibName, shmoozerId, text, media, likes, createdAt, onClose, editItem}: KibEditModalProp) => {
    const {
        register,
        handleSubmit,             
        formState: { errors } 
    } = useForm<KibType>({
        defaultValues: {
            kibName: kibName,
            shmoozerId: shmoozerId,
            text: text,
            media: media,
            likes: likes,
            createdAt: createdAt 
        }
    });
    const onSubmit = (kib: KibType) => {
        editItem(kib);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3> Edit Kib </h3>
            <div>
                <input type="hidden" {...register("_id")} value={_id} />
                <strong>ID:</strong> {_id}
            </div>
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
                        {setValueAs: emptyToUndefined}
                    )}
                    placeholder="Media URL"
                />
            </label>
            <label>
                Likes:
                <input
                    type="number"
                    {...register("likes",
                        {setValueAs: emptyToZeroOrNumber}
                    )}
                    placeholder="Number of Likes"
                />
            </label>
            <label> 
                Created At:
                <input
                    type="text"
                    {...register("createdAt")}
                    placeholder="Creation Date"
                    disabled
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export { KibEditModal };