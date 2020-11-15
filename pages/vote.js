import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function Vote() {

    const [score, setScore] = useState(0)
    const [scorer, setScorer] = useState('')
    const [message, setMessage] = useState('')
    const contentType = 'application/json'

    const getLinkFromPwd = evt => {
        let pwd = evt.target.value;
        setScore(pwd);
      }

      const setNameOfScorer = evt => {
          let scorer = evt.target.value;
          setScorer(scorer);
      }

    const {
        query: { user },
      } = useRouter();

      const handleClick = () => {
          
          if (score != '' && scorer != '') {
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
          } catch (error) {
            setMessage('Failed to add player');
          }
      }
    // const [contestant, setcontestant] = useState(initialState)

    return (
        <>
        <main>

          <h1 className={styles.title}>
          Voting for {user}
        </h1>

        <form>
        <label>
          Enter Name: 
          <input type="text" name="name" onChange={setNameOfScorer}/>
        </label>
        <label>
          Enter Score: 
          <input type="text" name="pwd" onChange={getLinkFromPwd}/>
        </label>
        <a onClick={handleClick}>
          Vote
        </a>
      </form>
        </main>
        </>
    )
}