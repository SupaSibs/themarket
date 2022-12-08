import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '/src/global.css?inline';
import Nav from "/src/components/navbar/main"
export default component$(() => {
useStyles$(globalStyles)
return (
  <>
<Nav />
<main>
<section class="text-center">
<h1 class="uppercase text-2xl 2xs:text-3xl xs:text-5xl text-black opacity-100 ">
  The marketplace for everyone.
</h1>
<p class=" text-xl 2xs:text-2xl text-gray-500 opacity-80">
  Find what you want at the cheapest price.
</p></section>
</main>
  </>
)
	})

