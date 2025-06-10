import Skeleton from "react-loading-skeleton";
import type { LoadingProps } from "./types";
import { useLoadingStyles } from './styles'

const Loading = ({count}: LoadingProps) => {
    const classes = useLoadingStyles()
    return (
        <div className={classes.loading}>
            <Skeleton count={count} height={160} width={400}/>
        </div>
    );
}

export { Loading };