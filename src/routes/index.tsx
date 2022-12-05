import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '../global.css?inline';
import Nav from "../components/navbar/main"
export default component$(() => {
useStyles$(globalStyles)
return (
  <>
<Nav />
<main>
<section>
<h1 class="uppercase text-2xl 2xs:text-3xl sm:text-5xl text-black">
  The marketplace for everyone.
</h1></section>

  <section>
<h1 class="uppercase text-xl 2xs:text-3xl text-black">
  Find what you want at the cheapest price 
</h1></section>
</main>
  </>
)
	})

