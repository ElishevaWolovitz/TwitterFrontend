import type { ShmoozerType } from "./types";

export const printShmoozer = (shmoozer: ShmoozerType): string => {
    const printable = `id: ${shmoozer._id},
    shmoozer name: ${shmoozer.shmoozerName},
    display name: ${shmoozer.displayName}`
    return printable; 
}