import { createUseStyles } from 'react-jss'

export const useCardStyles = createUseStyles({
  card: {
    border: '1px solid #ddd',
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    marginBottom: 20,
    maxWidth: 600,
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  header: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
  },
  media: {
    width: '100%',
    maxHeight: 300,
    objectFit: 'cover',
    borderRadius: 12,
    marginBottom: 12,
  },
  userId: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: 14,
    marginRight: 8,
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
  footer: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
})