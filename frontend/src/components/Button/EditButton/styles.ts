export const Styles = {
  button: {
    cursor: 'pointer',
    padding: '0.5rem 1.2rem',
    background: 'linear-gradient(90deg, #00b894 0%, #00cec9 100%)',
    border: 'none',
    borderRadius: '20px',
    fontSize: '1.1rem',
    color: '#fff',
    fontWeight: 600,
    letterSpacing: '0.03em',
    boxShadow: '0 2px 8px rgba(0,184,148,0.10)',
    transition: 'background 0.2s, box-shadow 0.2s, color 0.2s, transform 0.1s',
    outline: 'none',
    margin: '0.5rem 0',
    '&:hover': {
      background: 'linear-gradient(90deg, #00cec9 0%, #00b894 100%)',
      boxShadow: '0 4px 16px rgba(0,184,148,0.15)',
      color: '#fff',
      transform: 'translateY(-2px) scale(1.03)',
    },
    '&:active': {
      background: '#00b894',
      boxShadow: '0 2px 4px rgba(0,184,148,0.08)',
      color: '#fff',
      transform: 'scale(0.98)',
    },
    '&:focus-visible': {
      outline: '2px solid #00b894',
      outlineOffset: '2px',
    },
  },
};