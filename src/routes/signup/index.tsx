import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '/src/global.css?inline';

export default component$(() => {
useStyles$(globalStyles)
  return (
    <main class="fillpage flex items-center justify-center">
    <form class="bg-orange-400 p-6 rounded flex flex-col shadow" action="" method="POST">
      <p class="text-center">Sign up</p>
      <input
        
        class="bg-black text-white my-6 block"
        id="username" 
        name="username"></input>
     
            <input
        class="bg-black text-white my-6 block"
        id="email" 
        name="email"></input>
     
            <input
         class="bg-black text-white my-6 block"
        id="password" 
        name="password"></input>
     
      <input
        class="btn"
        type="submit"></input>
    </form>
    </main>
  )
  
})

/*
     span::after {
       content: '\a';
       white-space: pre;
   }*/