import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '/src/global.css?inline';

import Persuasive from "/src/components/persuasivesect/index";
export default component$(() => {
useStyles$(globalStyles)
return (
  <>

<main>
<Persuasive title="The marketplace for everyone"
  description="The one-stop online shop with all your needs"
  buttonref="/signup"
  buttontext="Sign up today!"/>
  <Persuasive
    title="Get the best deals"
    description="Never miss out on an amazing offer!"
  buttonref="/signup"
    buttontext="Sign up today!"/>
  <Persuasive title="Get free cashback" 
    description="Get up to a 15% cashback on whatever you buy!"
  buttonref="/signup"
    buttontext="Sign up today!"/>
  <Persuasive
    title="With over x products" 
    description="We have x products, and every day we add some more!"
  buttonref="/signup"
    buttontext="Sign up today!"/>
</main>
  </>
)
	})

/*
cache information
Link button:
<a href="/signup">
<button class="uppercase">Sign up today</button></a>
*/