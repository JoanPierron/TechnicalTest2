<script>
  import { link } from 'svelte-spa-router';
</script>

<nav>
  <ul>
    <li><a href="/" use:link>Accueil</a></li>
    <li><a href="/create" use:link>Créer un téléphone</a></li>
    <li><a href="/list" use:link>Liste des téléphones</a></li>
  </ul>
</nav>