

export const Styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    minHeight: "80vh",
    background: "#f7f9fa",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#1da1f2",
    margin: "2rem 0 1rem 0",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#657786",
    marginBottom: "2rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  navbarOverride: {
    background: 'none !important',
    border: 'none !important',
    boxShadow: 'none !important',
    padding: 0,
    margin: 0,
    '& nav': {
      background: 'none !important',
      border: 'none !important',
      boxShadow: 'none !important',
      padding: 0,
      margin: 0,
    },
    '& ul': {
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: 'flex-start',
      padding: 0,
      margin: 0,
    },
    '& a': {
      borderRadius: 8,
      padding: '0.5rem 1rem',
      fontSize: '1.1rem',
      color: '#1da1f2',
      background: 'none',
      fontWeight: 500,
      '&:hover': {
        background: '#e8f5fe',
        color: '#0d8ddb',
      },
    },
  },
};