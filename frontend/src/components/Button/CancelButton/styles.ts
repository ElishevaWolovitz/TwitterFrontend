import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  button: {
    cursor: 'pointer',
    padding: '0.5rem 1.2rem',
    background: 'linear-gradient(90deg, #b2bec3 0%, #636e72 100%)',
    border: 'none',
    borderRadius: '20px',
    fontSize: '1.1rem',
    color: '#fff',
    fontWeight: 600,
    letterSpacing: '0.03em',
    boxShadow: '0 2px 8px rgba(99,110,114,0.10)',
    transition: 'background 0.2s, box-shadow 0.2s, color 0.2s, transform 0.1s',
    outline: 'none',
    margin: '0.5rem 0',
    '&:hover': {
      background: 'linear-gradient(90deg, #636e72 0%, #b2bec3 100%)',
      boxShadow: '0 4px 16px rgba(99,110,114,0.15)',
      color: '#fff',
      transform: 'translateY(-2px) scale(1.03)',
    },
    '&:active': {
      background: '#636e72',
      boxShadow: '0 2px 4px rgba(99,110,114,0.08)',
      color: '#fff',
      transform: 'scale(0.98)',
    },
    '&:focus-visible': {
      outline: '2px solid #636e72',
      outlineOffset: '2px',
    },
  },
});