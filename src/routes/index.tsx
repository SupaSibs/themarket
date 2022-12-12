import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '/src/global.css?inline';
import Nav from "/src/components/navbar/main";
import Persuasive from "/src/components/persuasivesect/main";
export default component$(() => {
useStyles$(globalStyles)
return (
  <>
<Nav />
<main>
<Persuasive title="test"
  description="test"
  buttontext="Sign up today!"/>
  <Persuasive
    title="test"
    description="test"
    buttontext="Sign up today!"/>
  <Persuasive title="test" 
    description="test"
    buttontext="Sign up today!"/>
  <Persuasive
    title="test" 
    description="test" 
    buttontext="Sign up today!"/>
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