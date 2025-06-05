import type { ShmoozerType } from "./types";

export const printShmoozer = (shmoozer: ShmoozerType) => {
    return (<>
        <p>id: {shmoozer._id}</p>
        <p>shmoozer name: {shmoozer.shmoozerName}</p>
        <p>display name: {shmoozer.displayName}</p>
    </>)
}