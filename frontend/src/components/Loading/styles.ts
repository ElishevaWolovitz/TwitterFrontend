import { createUseStyles } from 'react-jss'

export const useLoadingStyles = createUseStyles({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vh',
        backgroundColor: '#f0f0f0',
    }
})