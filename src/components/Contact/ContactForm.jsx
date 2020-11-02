import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './contactForm.scss';

export function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7ED957'
    },
    '& .MuiInputLabel-outlined': {
      color: 'grey'
    },
    '&:hover .MuiInputLabel-outlined': {
      color: 'grey'
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: 'grey'
    }
  }
});

const ContactForm = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [snackbar, setSnackBar] = useState(false);
  const [snackbarError, setSnackBarError] = useState(false);

  const checkEmail = () => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
  };

  const checkInputFields = () => {
    if (checkEmail() === true && message !== '') {
      return false;
    } else {
      return true;
    }
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBar(false);
  };

  const onChange = (token) => {
    // fetch(`${process.env.GATSBY_AZURE_URL}/registration`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     g_recaptcha_response: token,
    //     email,
    //     message,
    //     timestamp: Date.now()
    //   })
    // }).then((data) => {
    //   if (data.statusText === 'OK' && data.status === 200) {
    //     setSnackBar(true);
    //   }
    // });
    setSnackBar(true);
    setSnackBarError(true);
  };

  return (
    <div className="contactform-wrapper">
      <h1>Lépj kapcsolatba velünk!</h1>
      <form autoComplete="off">
        <FormControl>
          <TextField
            required
            className={classes.root}
            id="filled-name"
            label="Email címed"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
        </FormControl>
        <FormControl>
          <TextField
            className={classes.root}
            id="filled-multiline-static"
            label="Üzenet"
            multiline
            rows={10}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
          />
        </FormControl>
        <Button
          disabled={checkInputFields() ? true : false}
          onClick={() => onChange()}
        >
          Felveszem a kapcsolatot
        </Button>
      </form>
      <Snackbar
        open={snackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        style={{ paddingTop: '100px' }}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity="success">
          Sikeresen elküldve!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
