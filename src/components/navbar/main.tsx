import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '../../global.css?inline';

export default component$(() => {
useStyles$(globalStyles)
return (
<nav class="flex justify-evenly flex-row items-center bg-blue-700 shadow-[3px 0 0 2px " >
<ul>
<li>

<a href="/">Home</a>
</li>
</ul>
</nav>
)
})
