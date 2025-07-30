<script>
  import { onMount } from 'svelte';
  import { location } from 'svelte-spa-router';

  let id;
  $: if ($location) {
    const segments = $location.split('/');
    id = segments.length >= 3 ? segments[2] : null;
  }

  const colors = ['Rouge', 'Vert', 'Bleu'];

  let name = '';
  let brand = '';
  let imei = '';
  let color = 'Rouge';
  let capacity = 16;

  let errorMessage = '';
  let successMessage = '';

  onMount(async () => {
    if (!id) {
      errorMessage = 'ID manquant dans l’URL.';
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/phones/${id}`);
      if (!res.ok) {
        errorMessage = `Erreur chargement téléphone (status ${res.status})`;
        return;
      }
      const phone = await res.json();
      name = phone.name;
      brand = phone.brand;
      imei = phone.imei;
      color = phone.color;
      capacity = phone.capacity;
    } catch {
      errorMessage = 'Erreur réseau lors du chargement.';
    }
  });

  function validate() {
    if (!name.trim()) return 'Le nom est obligatoire';
    if (!brand.trim()) return 'La marque est obligatoire';
    if (!imei.trim()) return 'L\'IMEI est obligatoire';
    if (!color) return 'La couleur est obligatoire';
    if (capacity <= 0 || capacity % 2 !== 0) return 'La capacité doit être un multiple de 2 et supérieure à zéro';
    return null;
  }

  async function handleSubmit() {
    errorMessage = '';
    successMessage = '';

    const error = validate();
    if (error) {
      errorMessage = error;
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/phones/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, brand, imei, color, capacity })
      });

      if (!res.ok) {
        const data = await res.json();
        errorMessage = data.error || 'Erreur serveur inconnue';
        return;
      }

      successMessage = 'Téléphone mis à jour avec succès ✅';

      setTimeout(() => {
        window.location.href = '#/list';
      }, 1500);
    } catch {
      errorMessage = 'Erreur réseau, réessayez plus tard.';
    }
  }
</script>

<h1 class="edit-title">Modifier le téléphone</h1>

{#if errorMessage}
  <p class="form-error">{errorMessage}</p>
{/if}

{#if successMessage}
  <p class="form-success">{successMessage}</p>
{/if}

<form class="edit-form" on:submit|preventDefault={handleSubmit}>
  <label class="form-field">
    Nom :
    <input bind:value={name} required />
  </label>

  <label class="form-field">
    Marque :
    <input bind:value={brand} required />
  </label>

  <label class="form-field">
    IMEI :
    <input bind:value={imei} required />
  </label>

  <label class="form-field">
    Couleur :
    <select bind:value={color} required>
      {#each colors as c}
        <option value={c}>{c}</option>
      {/each}
    </select>
  </label>

  <label class="form-field">
    Capacité (Go) :
    <input type="number" bind:value={capacity} min="2" step="2" required />
  </label>

  <button type="submit" class="form-button">Enregistrer</button>
</form>
