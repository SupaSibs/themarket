<script>
  import router from "page";
import Tailwind from "./twind.svelte";
  import Index from "./routes/Index.svelte";

  let main;
  
  router("/",() => main = Index);
  router.start()
</script>
<Tailwind />
<main>

</main>