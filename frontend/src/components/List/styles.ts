import { createUseStyles } from 'react-jss';

export const Styles = createUseStyles({
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24, // space between cards
    width: '100%',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  listItem: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});