import { createUseStyles } from 'react-jss'

export const Styles = createUseStyles({
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: 18,
    padding: 24,
    background: '#fff',
    boxShadow: '0 4px 16px rgba(9,132,227,0.07)',
    marginBottom: 28,
    maxWidth: 540,
    width: '100%',
    transition: 'transform 0.18s, box-shadow 0.18s',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    '&:hover': {
      transform: 'translateY(-3px) scale(1.01)',
      boxShadow: '0 8px 32px rgba(9,132,227,0.13)',
    },
  },
});