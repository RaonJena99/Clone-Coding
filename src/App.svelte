<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Write from "./pages/Write.svelte";
  import Signup from "./pages/Signup.svelte";
  import Notfound from "./pages/Notfound.svelte";
  import Router from "svelte-spa-router";
  import "./css/style.css";

  const routes = {
    "/": Main,
    "/login": Login,
    "/write": Write,
    "/signup": Signup,
    "*": Notfound,
  };
</script>

<Router {routes} />
