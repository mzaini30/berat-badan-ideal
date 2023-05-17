<script lang="ts">
  import Router from "svelte-spa-router";
  // @ts-ignore
  import routes from "virtual:generated-pages-svelte";
  import "./tailwind.css";
</script>

<div class="">
<Router {routes} />
</div>

<style>
  :global(*) {
    word-wrap: break-word;
  }
  .latar {
  	background: url("latar.jpg") center center no-repeat fixed;
  	background-size: cover;
  }
  /* chrome extension */
  /* :global(body) {
    width: 350px;
    height: 500px;
    font-size: 16px;
  } */
</style>
