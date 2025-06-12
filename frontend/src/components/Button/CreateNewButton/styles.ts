export const Styles = {
  button: {
    cursor: 'pointer',
    padding: '0.6rem 1.5rem',
    background: 'linear-gradient(90deg, #0984e3 0%, #74b9ff 100%)',
    border: 'none',
    borderRadius: '24px',
    fontSize: '1.1rem',
    color: '#fff',
    fontWeight: 600,
    letterSpacing: '0.03em',
    boxShadow: '0 2px 8px rgba(9,132,227,0.10)',
    transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
    outline: 'none',
    margin: '0.5rem 0',
    '&:hover': {
      background: 'linear-gradient(90deg, #74b9ff 0%, #0984e3 100%)',
      boxShadow: '0 4px 16px rgba(9,132,227,0.15)',
      transform: 'translateY(-2px) scale(1.03)',
    },
    '&:active': {
      background: '#0984e3',
      boxShadow: '0 2px 4px rgba(9,132,227,0.08)',
      transform: 'scale(0.98)',
    },
    '&:focus-visible': {
      outline: '2px solid #0984e3',
      outlineOffset: '2px',
    },
  },
};