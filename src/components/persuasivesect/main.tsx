import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '../../global.css?inline';
import Props from "./props"
export default component$((props: Props) => {
useStyles$(globalStyles)
return (
  <section class="text-center mb-7 mt-1">
<h1 class="uppercase text-2xl 2xs:text-3xl xs:text-5xl text-black opacity-100 ">
  {props.title}
</h1>
  <p class="text-xl 2xs:text-2xl text-gray-800 opacity-80">
    {props.description}
</p>
  <a href="#">
<button class="btn blue-600">{props.buttontext}</button></a>
</section>
  )
  })