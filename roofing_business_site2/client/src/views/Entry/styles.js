import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));