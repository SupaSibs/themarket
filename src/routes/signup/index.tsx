import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '/src/global.css?inline';

export default component$(() => {
useStyles$(globalStyles)
  return (
    <form action="" method="POST">
      <input
        id="username" 
        name="username"></input>
            <input
        id="email" 
        name="email"></input>
            <input
        id="password" 
        name="password"></input>
    </form>
  )
  
})