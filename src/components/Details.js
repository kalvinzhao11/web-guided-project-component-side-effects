import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  // TASK 4 - Create a side effect 🥇 that runs only after first render.
  useEffect(() => {
    console.log(`🥇 Details mounted to the DOM (1st)`)
    return () => console.log(`🥇 Details is about to be removed from the DOM`)
  }, [])

  // TASK 5 - Create a side effect 👻 that runs only after first render
  // and puts a 'click' event handler on document.
  // See what happens if we don't clean up.
  useEffect(() => {
    console.log(`👻 Details mounted to the DOM (1st) DIRTY`)
    const listener = event => console.log(`Random number: ${Math.random()}`)
    document.addEventListener('click', listener)

    return () => {
      console.log(`👻 Details is about to unmount SO WE HAD BETTER CLEAN UP`)
      document.removeEventListener('click', listener)
    }
  }, [])

  // TASK 6 - Create a side effect 🥵 that runs after every render.
  useEffect(() => {
    // no changing state (unless it's wrapped in a conditional)
    // INFINITE LOOP
    console.log(`🥵 Details for user with id ${friendId} was DOM operated on`)
    return () => {
      console.log(`🥵 Cleaning up after user with id ${friendId}`)
    }
  })

  // TASK 7 - Create a side effect 📲 that runs when a particular variable changes:
  // Whenever props.friendId updates we should trigger a fetch for details of the friend.
  // The URL should end up looking like `http://localhost:4000/friends/1?api_key=xyz`
  // On success, shove the details of the friend in `details` slice of state

  // console.log(`Details is being rendered, after render React will do DOM surgery`)

  return (
    <div className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <button onClick={close}>Close</button>
    </div>
  )
}
