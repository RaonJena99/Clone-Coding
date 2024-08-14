<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Write from "./pages/Write.svelte";
  import Signup from "./pages/Signup.svelte";
  import Notfound from "./pages/Notfound.svelte";
  import Router from "svelte-spa-router";
  import "./css/style.css";
  import { GoogleAuthProvider } from "firebase/auth";

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  let login = false;

  const routes = {
    "/": Main,
    "/write": Write,
    "/signup": Signup,
    "*": Notfound,
  };
</script>

{#if !login}
  <Login />
{:else}
  <Router {routes} />
{/if}
