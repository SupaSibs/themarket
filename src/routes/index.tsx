import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '/src/global.css?inline';
import Nav from "/src/components/navbar/main"
export default component$(() => {
useStyles$(globalStyles)
return (
  <>
<Nav />
<main>
<section class="text-center mb-7 mt-1">
<h1 class="uppercase text-2xl 2xs:text-3xl xs:text-5xl text-black opacity-100 ">
  The marketplace for everyone
</h1>
<p class=" text-xl 2xs:text-2xl text-gray-800 opacity-80">
  Find what you want at the cheapest price.
</p>
<a href="#">
<button class="uppercase bg-sky-300">Sign up today</button></a></section>
  <section class="text-center my-7">
<h1 class="uppercase text-2xl 2xs:text-3xl xs:text-5xl  opacity-100 ">
  Get deals like never before
</h1>
<p class=" text-xl 2xs:text-2xl text-gray-800 opacity-80">
 Get the best deals, automatically, no fuss.
</p>
  <a href="#">
<button class="uppercase">Sign up today</button></a></section>
  <section class="text-center my-7">
<h1 class="uppercase text-2xl 2xs:text-3xl xs:text-5xl text-black opacity-100 ">
  Earn free cashback
</h1>
<p class=" text-xl 2xs:text-2xl text-gray-800 opacity-80">
Earn up to 15% cashback with each purchase
</p>
  <a href="#">
<button class="uppercase">Sign up today</button></a></section>
    <section class="text-center my-7">
<h1 class="uppercase text-2xl 2xs:text-3xl xs:text-5xl text-black opacity-100 ">
  Never pay more
</h1>
<p class=" text-xl 2xs:text-2xl text-gray-800 opacity-80">
Never pay extra for your products.
</p>
    <a href="#">
<button class="uppercase">Sign up today</button></a></section>
</main>
  </>
)
	})

/*
cache information
Link button:
<a href="#">
<button class="uppercase">Sign up today</button></a>
*/