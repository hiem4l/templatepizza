<template>
  <footer class="bg-dark text-cream/70 pt-20 pb-8">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Top grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="flex flex-col items-start mb-6">
            <span class="font-display text-3xl text-cream tracking-widest">Sian D'Acqui</span>
            <span class="font-body text-[10px] tracking-[0.35em] text-pizza uppercase font-light">Pizzeria Artisanale</span>
          </NuxtLink>
          <p class="font-body font-light text-sm leading-relaxed text-cream/60 max-w-sm mb-8">
            Pizzeria artisanale à Saint-Roman-de-Bellet. Pizzas au feu de bois préparées avec des ingrédients frais et locaux, dans la tradition italienne authentique.
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-10 h-10 border border-white/20 flex items-center justify-center text-cream/50 hover:border-pizza hover:text-pizza transition-all duration-300"
            >
              <span class="text-xs font-body tracking-widest">{{ social.abbr }}</span>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light mb-6">Navigation</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks" :key="link.path">
              <NuxtLink :to="link.path" class="font-body text-sm font-light text-cream/60 hover:text-pizza transition-colors duration-300">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light mb-6">Contact</h4>
          <ul class="space-y-4 text-sm font-light font-body">
            <li class="flex items-start gap-3 text-cream/60">
              <span class="text-pizza mt-0.5">✦</span>
              <span>Saint-Roman-de-Bellet<br/>06200 Nice, France</span>
            </li>
            <li class="flex items-center gap-3 text-cream/60">
              <span class="text-pizza">✦</span>
              <a href="tel:+33666868370" class="hover:text-pizza transition-colors duration-300">06 66 86 83 70</a>
            </li>
          </ul>

          <div class="mt-8 border border-pizza/30 p-4">
            <p class="font-body text-xs tracking-[0.2em] uppercase text-pizza font-light mb-2">Horaires</p>
            <p class="font-body text-xs text-cream/60 font-light">Mar – Dim : 11h30 – 14h &amp; 18h – 22h</p>
            <p class="font-body text-xs text-cream/60 font-light">Lundi : Fermé</p>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-body text-xs tracking-widest text-cream/40 font-light">
          © {{ new Date().getFullYear() }} Pizzeria Sian D'Acqui. Tous droits réservés.
        </p>
        <div class="flex gap-6">
          <NuxtLink to="/mentions-legales" class="font-body text-xs text-cream/40 hover:text-pizza transition-colors duration-300 font-light">Mentions légales</NuxtLink>
          <NuxtLink to="/confidentialite" class="font-body text-xs text-cream/40 hover:text-pizza transition-colors duration-300 font-light">Confidentialité</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { name: 'Instagram', href: '#', abbr: 'Ig' },
  { name: 'Facebook', href: '#', abbr: 'Fb' },
]

const footerLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'La Carte', path: '/carte' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'Contact', path: '/contact' },
]
</script>
