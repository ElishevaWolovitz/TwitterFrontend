import Navbar from '../../components/Navbar';
import { createUseStyles } from 'react-jss';
import { Styles } from './styles';

const useStyles = createUseStyles(Styles);
const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>Home Page</h1>
        <div className={classes.subtitle}>Welcome to Kibitz - your Twitter-inspired app!</div>
        <div className={classes.buttonGroup}>
            <Navbar />
          </div>
        </div>
    </>
  )
}

export { HomePage }
