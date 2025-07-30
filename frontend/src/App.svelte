<script>
  import Router from 'svelte-spa-router';

  import Sidebar from './components/Sidebar.svelte';

  import Home from './routes/Home.svelte';
  import CreatePhone from './routes/CreatePhone.svelte';
  import ListPhones from './routes/ListPhones.svelte';
  import EditPhone from './routes/EditPhone.svelte';

  const routes = {
    '/': Home,
    '/create': CreatePhone,
    '/list': ListPhones,
    '/edit/:id': EditPhone,
    '*': Home,
  };
</script>

<div class="layout">
  <div class="sidebar">
    <Sidebar />
  </div>

  <div class="content">
    <Router {routes} useHash={true} />
  </div>
</div>
