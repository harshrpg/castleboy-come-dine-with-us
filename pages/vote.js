import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  form : {
    border: '1px solid black',
    borderRadius: '20%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function Vote() {
    const classes = useStyles();
    const [score, setScore] = useState(50)
    const [scorer, setScorer] = useState('')
    const [message, setMessage] = useState('')
    const contentType = 'application/json'

    const getScore = (evt, value) => {
        // let score = evt.target.value;
        setScore(value);
        console.log(value);
      }

      const setNameOfScorer = evt => {
        console.log('====================================');
        console.log(evt.target.value);
        console.log('====================================');
          let scorer = evt.target.value;
          setScorer(scorer);
      }

    const {
        query: { user },
      } = useRouter();

      const handleClick = () => {
          console.log('====================================');
          console.log(score);
          console.log('====================================');
          if (score != undefined && scorer != '') {
            console.log('Here');
              let vote = {
                  'name': user,
                  'voters_name': scorer,
                  'score': score,
              }

              postData(vote);
          }
      }

      const postData = async (vote) => {
          console.log('here');
          try {
              const res = await fetch('/api/votes', {
                  method: 'POST',
                  headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                  },
                  body: JSON.stringify(vote),
                })
                // Throw Error
              if (!res.ok) {
                    throw new Error(res.status)
               }
               alert("Vote submitted");
          } catch (error) {
            setMessage('Failed to add player');
            alert("try again later");
          }
      }
    // const [contestant, setcontestant] = useState(initialState)

    return (
      <React.Fragment>
        <CssBaseline />
          <Container maxWidth="sm" textAlign="center">
            <Typography variant="h3" component="h2" gutterBottom>
              Voting for {user}
            </Typography>
            {/* <CardMedia
              className={classes.media}
              image="/images/murder_mystery.jpg"
              title="Paella dish"
            /> */}
              <Grid container direction="column" spacing={1} >
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField id="standard-basic" label="Your Name" onChange={setNameOfScorer}/>
                    </form>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <form className={classes.root} noValidate autoComplete="off">
                        <Typography variant="h5" id="discrete-slider-always" gutterBottom>
                          Your Score
                        </Typography>
                        <Slider
                          defaultValue={50}
                          getAriaValueText={valuetext}
                          aria-labelledby="discrete-slider-always"
                          step={10}
                          marks={marks}
                          valueLabelDisplay="on"
                          onChange={getScore}
                          onChangeCommitted={getScore}
                        />
                    </form>
                  </Paper>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button variant="outlined" color="primary" className={classes.button} onClick={handleClick}>
                      Submit Vote
                    </Button>
                </Grid>
              </Grid>
          </Container>
      </React.Fragment>
    )
}