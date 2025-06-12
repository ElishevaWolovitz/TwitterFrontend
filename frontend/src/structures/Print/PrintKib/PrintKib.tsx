import { Styles } from "./styles";
import type { PrintKibProps } from "./types";

const PrintKib = ({ kib }: PrintKibProps) => {
    const classes = Styles();
    return (
        <>
        <div className={classes.header}>
            <span className={classes.kibName}>{kib.kibName}</span>
            <span className={classes.shmoozerId}>@shmoozer{kib.shmoozerId}</span>
        </div>
        <div className={classes.text}>{kib.text}</div>
        {kib.media && (
            <img src={kib.media} alt="media" className={classes.media} />
        )}
        <div className={classes.footer}>
            <span className={classes.likes}>👍 {kib.likes}</span>
            {kib.createdAt && (<span className={classes.created}> created:{kib.createdAt.toString()} </span>)}
        </div>
        <span className={classes.id}>Kib ID: {kib._id}</span>
        </>
    )
}
export { PrintKib };