<template>
  <div class="py-28">
    <div class="max-w-4xl mx-auto px-6 lg:px-12">
      <p class="section-subtitle mb-4">Informations légales</p>
      <div class="red-line mb-8" />
      <h1 class="font-display text-5xl text-dark font-bold mb-12">Mentions légales</h1>

      <div class="space-y-10 font-body font-light text-dark/70 leading-relaxed">
        <section>
          <h2 class="font-display text-2xl text-dark font-bold mb-4">Éditeur du site</h2>
          <p>Pizzeria Sian D'Acqui<br />
          Saint-Roman-de-Bellet<br />
          06200 Nice, France<br />
          Téléphone : <a href="tel:+33666868370" class="text-pizza hover:underline">06 66 86 83 70</a></p>
        </section>

        <section>
          <h2 class="font-display text-2xl text-dark font-bold mb-4">Hébergement</h2>
          <p>Ce site est hébergé par Netlify, Inc.<br />
          44 Montgomery Street, Suite 300<br />
          San Francisco, California 94104, USA</p>
        </section>

        <section>
          <h2 class="font-display text-2xl text-dark font-bold mb-4">Propriété intellectuelle</h2>
          <p>L'ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de la Pizzeria Sian D'Acqui ou de ses partenaires. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.</p>
        </section>

        <section>
          <h2 class="font-display text-2xl text-dark font-bold mb-4">Responsabilité</h2>
          <p>La Pizzeria Sian D'Acqui s'efforce de maintenir les informations de ce site à jour et exactes. Cependant, elle ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées sur ce site.</p>
        </section>

        <section>
          <h2 class="font-display text-2xl text-dark font-bold mb-4">Données personnelles</h2>
          <p>Pour toute information concernant la collecte et le traitement de vos données personnelles, veuillez consulter notre <NuxtLink to="/confidentialite" class="text-pizza hover:underline">politique de confidentialité</NuxtLink>.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales — Pizzeria Sian D\'Acqui',
  description: 'Mentions légales de la Pizzeria Sian D\'Acqui.',
})
</script>
