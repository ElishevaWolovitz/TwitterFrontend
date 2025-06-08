import type { KibType } from './types';
import { useForm } from "react-hook-form";


export const KibModalStructure = (kibToEdit: KibType) => {
    const {
        register,            // to connect inputs to form logic
        handleSubmit,        // to handle form submission
        formState: { errors } // to check for validation errors
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
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
                    defaultValue={kibToEdit.kibName}
                    name="kibName"
                    placeholder="Kib Name"
                />
            </label>
            <label>
                Shmoozer ID:
                <input
                    type="text"
                    defaultValue={kibToEdit.shmoozerId}
                    name="shmoozerId"
                    placeholder="Shmoozer ID"
                />
            </label>
            <label>
                Text:
                <textarea
                    defaultValue={kibToEdit.text}
                    name="text"
                    placeholder="Kib Text"
                />
            </label>
            {kibToEdit.media && (
                <label>
                    Media:
                    <input
                        type="text"
                        defaultValue={kibToEdit.media}
                        name="media"
                        placeholder="Media URL"
                    />
                </label>
            )}
            {kibToEdit.likes && (
                <label>
                    Likes:
                    <input
                        type="number"
                        defaultValue={kibToEdit.likes}
                        name="likes"
                        placeholder="Number of Likes"
                    />
                </label>
            )}
            <label> 
                Created At:
                <input
                    type="text"
                    defaultValue={kibToEdit.createdAt?.toString() || ''}
                    name="createdAt"
                    placeholder="Creation Date"
                    disabled
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}