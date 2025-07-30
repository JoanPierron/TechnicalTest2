<script>
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';

  let phones = [];

  onMount(async () => {
    try {
      const res = await fetch('http://localhost:3000/api/phones');
      phones = await res.json();
    } catch {
      phones = [];
    }
  });

  async function deletePhone(id) {
    if (!confirm('Supprimer ce téléphone ?')) return;

    await fetch(`http://localhost:3000/api/phones/${id}`, {
      method: 'DELETE'
    });

    phones = phones.filter(p => p.id !== id);
  }

  function editPhone(id) {
    push(`#/edit/${id}`);
  }
</script>

<h1 class="list-title">Liste des téléphones</h1>

{#if phones.length === 0}
  <p class="list-empty">Aucun téléphone enregistré.</p>
{:else}
  <table class="phone-table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Marque</th>
        <th>IMEI</th>
        <th>Couleur</th>
        <th>Capacité</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each phones as phone}
        <tr>
          <td>{phone.name}</td>
          <td>{phone.brand}</td>
          <td>{phone.imei}</td>
          <td>{phone.color}</td>
          <td>{phone.capacity} Go</td>
          <td>
            <button class="action-button" on:click={() => editPhone(phone.id)}>Modifier</button>
            <button class="action-button" on:click={() => deletePhone(phone.id)}>Supprimer</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
