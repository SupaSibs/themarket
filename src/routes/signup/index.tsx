import { component$, useStyles$, useRef } from '@builder.io/qwik';
import { createUser } from '~/firebase/firebase';
import globalStyles from '/src/global.css?inline';
export default component$(() => {
useStyles$(globalStyles)
  let email = useRef()
  let pass = useRef()
  return (
    <main class="fillpage flex items-center justify-center">
  <form preventdefault:submit onSubmit$={createUser.bind(null, email.value, pass.value)} class="bg-orange-400 p-6 rounded flex flex-col shadow-xl" method="POST">
      <p class="text-center">Sign up to InfinityStore</p>
   
          <input
          ref={email}
        class="bg-black text-white mt-6 block rounded"
        id="email" 
        name="email"></input>
      <label for="email" class="mb-6">E-Mail</label>
            <input
          ref={pass}
         class="bg-black text-white mt-6 block rounded"
        id="password" 
        name="password"></input>
       <label for="password" class="mb-6">Password</label>
      <input
        class="btn mt-6"
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