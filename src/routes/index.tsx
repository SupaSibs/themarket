import { component$, useStyles$ } from '@builder.io/qwik';
import globalStyles from '../global.css?inline';
import Nav from "../components/navbar/main.tsx
export default component$(() => {
useStyles$(globalStyles)
return (
  <>
<Nav />
<main>

</main>
  </>
)
	})

