import type { ShmoozerType } from "./types";

export const printShmoozer = (shmoozer: ShmoozerType): string => {
    const printable = `id: ${shmoozer._id},<br/>
    shmoozer name: ${shmoozer.shmoozerName},<br/>
    display name: ${shmoozer.displayName}`
    return printable; 
}