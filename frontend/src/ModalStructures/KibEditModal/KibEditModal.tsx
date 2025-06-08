import type { KibType } from './types';
import { useForm } from "react-hook-form";


const KibEditModal = (kibToEdit: KibType) => {
    const {
        register,            // to connect inputs to form logic
        handleSubmit,        // to handle form submission
        formState: { errors } // to check for validation errors
    } = useForm<KibType>({
        defaultValues: {
            kibName: kibToEdit.kibName || '',
            shmoozerId: kibToEdit.shmoozerId || '',
            text: kibToEdit.text || '',
            media: kibToEdit.media || '',
            likes: kibToEdit.likes || 0,
            createdAt: kibToEdit.createdAt 
        }
    });

    const onSubmit = (data: KibType) => {
        console.log("Form submitted:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1> Edit Kib </h1>
            <div>
                <strong>ID:</strong> {kibToEdit._id}
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
            {kibToEdit.media && (
                <label>
                    Media:
                    <input
                        type="text"
                        {...register("media")}
                        placeholder="Media URL"
                    />
                </label>
            )}
            {kibToEdit.likes && (
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