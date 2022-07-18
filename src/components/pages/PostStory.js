import { Alert, AlertTitle, TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Nav';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function PostStory() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [blogHeadline, setBlogHeadline] = useState('');
  const [blogDescription, setBlogDescription] = useState('');

  function submitHandelar(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: '/api/blogs/',
      withCredentials: true,
      data: { blogHeadline, blogDescription },
      validateStatus: () => true,
    }).then(
      (res) => {
        if (res.status === 201) {
          localStorage.setItem('popup', 'Blog Created Successfully!!!!');
          navigate('/');
        } else {
          setPopUp('Failed');
          setErrorMessage(res.data.errors[0]);
        }
      },
      (error) => {}
    );
    setTimeout(function () {
      window.localStorage.removeItem('popup');
    }, 2000);
  }

  if (localStorage.getItem('username') !== null)
    return (
      <>
        <CssBaseline />
        <Navbar />
        <Container component="main" maxWwdth="xs" style={{ paddingTop: 25 }}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            color="primary"
            fontWeight="bold"
            style={{ paddingTop: 10 }}
          >
            BlOG HEADLINE
          </Typography>
          <TextareaAutosize
            id="outlined-multiline-static"
            label="Blog Headline"
            multiline
            variant="outlined"
            rows={2}
            style={{ width: '100%' }}
            value={blogHeadline}
            onChange={(e) => setBlogHeadline(e.target.value)}
          />
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            color="primary"
            fontWeight="bold"
            style={{ paddingBottom: 5 }}
          >
            BlOG DESCRIPTION
          </Typography>
          <TextareaAutosize
            id="outlined-multiline-static"
            label="Blog Headline"
            fullWidth
            multiline
            variant="outlined"
            rows={30}
            style={{ width: '100%' }}
            value={blogDescription}
            onChange={(e) => setBlogDescription(e.target.value)}
          />
          <br /> <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => submitHandelar(e)}
          >
            Add Blog
          </Button>
          {popUp === 'Failed' && (
            <Alert severity="error" fullwidth="true" style={{ paddingBottom: 20 }}>
              <AlertTitle>Blog Creation Unsuccessfull!!</AlertTitle>
              <strong>{errorMessage}</strong>
            </Alert>
          )}
        </Container>
      </>
    );
  //else return <PageNotFound />;
}
