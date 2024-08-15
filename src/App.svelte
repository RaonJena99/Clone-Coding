<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Write from "./pages/Write.svelte";
  import Signup from "./pages/Signup.svelte";
  import Loading from "./pages/Loading.svelte";
  import Mypage from "./pages/Mypage.svelte";
  import Notfound from "./pages/Notfound.svelte";
  import Router from "svelte-spa-router";
  import {
    getAuth,
    GoogleAuthProvider,
    signInWithCredential,
  } from "firebase/auth";
  import { user$ } from "./store";
  import { onMount } from "svelte";
  import "./css/style.css";

  let isLoading = true;

  const checkLogin = async () => {
    const auth = getAuth();
    const token = localStorage.getItem("token");
    if (!token) return (isLoading = false);
    const credential = GoogleAuthProvider.credential(null, token);
    const result = await signInWithCredential(auth, credential);
    const user = result.user;
    user$.set(user);
    isLoading = false;
  };

  const main = {
    "/": Main,
    "/write": Write,
    "/mypage": Mypage,
    "*": Notfound,
  };

  const sign = {
    "/mypage": Login,
    "/signup": Signup,
    "*": Notfound,
  };

  $: routes = $user$ ? main : sign;

  onMount(() => {
    checkLogin();
  });
</script>

{#if isLoading}
  <Loading />
{:else}
  <Router {routes} />
{/if}
