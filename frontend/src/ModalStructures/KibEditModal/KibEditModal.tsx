import type { KibType } from './types';
import { useForm } from "react-hook-form";


const KibEditModal = ({_id, kibName, shmoozerId, text, media, likes, createdAt}: KibType) => {
    const {
        register,            // to connect inputs to form logic
        handleSubmit,        // to handle form submission
        formState: { errors } // to check for validation errors
    } = useForm<KibType>({
        defaultValues: {
            kibName: kibName || '',
            shmoozerId: shmoozerId || '',
            text: text || '',
            media: media || '',
            likes: likes || 0,
            createdAt: createdAt 
        }
    });

    const onSubmit = (data: KibType) => {
        console.log("Form submitted:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1> Edit Kib </h1>
            <div>
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
            {media && (
                <label>
                    Media:
                    <input
                        type="text"
                        {...register("media")}
                        placeholder="Media URL"
                    />
                </label>
            )}
            {likes && (
                <label>
                    Likes:
                    <input
                        type="number"
                        {...register("likes")}
                        placeholder="Number of Likes"
                    />
                </label>
            )}
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