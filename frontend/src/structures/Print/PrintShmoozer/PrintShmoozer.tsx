import { Styles } from "./styles";
import type { PrintShmoozerProps } from "./types";

const PrintShmoozer = ({ shmoozer }: PrintShmoozerProps) => {
    const classes = Styles();
    return (
        <>
            <div className={classes.header}>
                <div className={classes.avatar} />
                <span className={classes.shmoozerName}>
                    {shmoozer.shmoozerName}
                </span>
                <span className={classes.displayName}>
                    {shmoozer.displayName}
                </span>
            </div>
            <span className={classes.id}>
                ID: {shmoozer._id}
            </span>
        </>
    )
}
export { PrintShmoozer };