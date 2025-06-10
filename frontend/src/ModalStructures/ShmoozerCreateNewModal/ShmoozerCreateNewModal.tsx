import type { ShmoozerCreateNewModalProps } from "./types"
import { useForm } from "react-hook-form"
import type { ShmoozerType } from '../../types/shmoozer.type';

const ShmoozerCreateNewModal =({onClose, createNewShmoozer}: ShmoozerCreateNewModalProps) => {
    const {
            register,
            handleSubmit,             
            formState: { errors } 
        } = useForm<ShmoozerType>();

        const onSubmit = (newShmoozer: ShmoozerType) => {
            console.log("Submitting new shmoozer:", newShmoozer);
            createNewShmoozer(newShmoozer);
            onClose();
        };
    
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3> Create New Shmoozer </h3>
                <label>
                    Shmoozer Name:
                    <input
                        type="text"
                        {...register("shmoozerName", { required: true })}
                        placeholder="Shmoozer Name"
                    />
                    {errors.shmoozerName && <span>This field is required</span>}
                </label>
                <label>
                    Display Name:
                    <input
                        type="text"
                        {...register("displayName", { required: true })}
                        placeholder="Display Name"
                    />
                    {errors.displayName && <span>This field is required</span>}
                </label>
                <button type="submit">Submit</button>
            </form>
        )
}

export { ShmoozerCreateNewModal }
