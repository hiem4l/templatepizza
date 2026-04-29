<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-pizza mb-4">Notre histoire</p>
        <h1 class="section-title text-cream">La Pizzeria<br/><em class="italic">Sian D'Acqui</em></h1>
      </div>
    </section>

    <!-- Story -->
    <section class="py-28 lg:py-40">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          <div class="reveal-left">
            <p class="section-subtitle mb-4">Saint-Roman-de-Bellet</p>
            <div class="red-line mb-8" />
            <h2 class="section-title mb-10">Une passion<br/><em class="italic text-warm">pour la pizza</em></h2>
            <p class="font-body font-light text-dark/70 leading-relaxed mb-6">
              Nichée dans le charmant hameau de Saint-Roman-de-Bellet, à flanc de colline dominant Nice et la mer Méditerranée, la Pizzeria Sian D'Acqui est née d'une passion profonde pour l'artisanat et la cuisine italienne authentique.
            </p>
            <p class="font-body font-light text-dark/70 leading-relaxed mb-6">
              Notre four à bois, cœur battant de la pizzeria, atteint des températures proches de 400°C pour cuire nos pizzas en moins de 90 secondes. C'est cette cuisson rapide et intense qui donne à nos pizzas leur croûte incomparable — légèrement croustillante à l'extérieur, moelleuse et aérée à l'intérieur.
            </p>
            <p class="font-body font-light text-dark/70 leading-relaxed">
              Chaque pizza commence par notre pâte maison, fermentée pendant 48 heures pour développer tous ses arômes. Nous sélectionnons ensuite les meilleurs ingrédients : tomates San Marzano, mozzarella fior di latte, charcuteries artisanales et légumes frais de saison.
            </p>
          </div>

          <div class="space-y-8 reveal-right">
            <div class="aspect-[4/3] bg-cover bg-center overflow-hidden"
              style="background-image: url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80')" />
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-pizza p-6">
                <p class="font-display text-5xl text-cream font-bold">100%</p>
                <p class="font-body text-xs tracking-[0.25em] uppercase text-cream/70 font-light">Artisanal</p>
              </div>
              <div class="bg-cream-dark p-6 border border-dark/10">
                <p class="font-display text-5xl text-pizza font-bold">🔥</p>
                <p class="font-body text-xs tracking-[0.25em] uppercase text-dark/50 font-light">Four à bois</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-28 bg-cream-dark">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="section-subtitle mb-4">Nos engagements</p>
          <div class="red-line mx-auto mb-8" />
          <h2 class="section-title">Ce qui nous guide</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(val, i) in values" :key="val.title" class="reveal border-t-2 border-pizza pt-8" :data-delay="i * 100">
            <div class="text-3xl mb-4">{{ val.icon }}</div>
            <h3 class="font-display text-xl text-dark font-bold mb-3">{{ val.title }}</h3>
            <p class="font-body text-sm text-dark/60 font-light leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Allergens info -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-6 text-center reveal">
        <p class="section-subtitle mb-4">Information importante</p>
        <div class="red-line mx-auto mb-8" />
        <h2 class="font-display text-3xl text-dark font-bold mb-6">Allergènes</h2>
        <p class="font-body font-light text-dark/60 leading-relaxed mb-8">
          Nous prenons très au sérieux les allergies alimentaires. Les ingrédients allergènes sont clairement indiqués sur chaque pizza de notre carte (marqués ⚠). Si vous avez une allergie ou une intolérance, n'hésitez pas à nous en informer lors de votre commande.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="allergen in allergens" :key="allergen.name" class="bg-cream-dark p-4 border border-amber-200 text-center">
            <span class="text-2xl mb-2 block">{{ allergen.icon }}</span>
            <span class="font-body text-xs tracking-[0.15em] uppercase text-dark/60 font-light">{{ allergen.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-dark">
      <div class="max-w-3xl mx-auto px-6 text-center reveal">
        <h2 class="font-display text-3xl text-cream font-bold mb-6">Venez nous rendre visite !</h2>
        <p class="font-body font-light text-cream/60 mb-8">Saint-Roman-de-Bellet, Nice. Ouvert du mardi au dimanche.</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/carte" class="btn-secondary">Voir la carte</NuxtLink>
          <NuxtLink to="/contact" class="inline-flex items-center gap-3 text-cream/70 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-pizza transition-colors">
            Nous trouver →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'À propos — Pizzeria Sian D\'Acqui',
  description: 'Découvrez l\'histoire de la Pizzeria Sian D\'Acqui à Saint-Roman-de-Bellet. Four à bois, pâte artisanale et ingrédients frais.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

const values = [
  {
    icon: '🔥',
    title: 'Tradition',
    desc: 'Notre four à bois est au cœur de notre savoir-faire. Nous respectons les méthodes de la pizzeria napolitaine authentique, avec une pâte longue fermentation et une cuisson vive.',
  },
  {
    icon: '🌿',
    title: 'Fraîcheur',
    desc: 'Nous nous approvisionnons en produits frais et locaux autant que possible. Légumes de saison, fromages artisanaux et charcuteries sélectionnées — la qualité avant tout.',
  },
  {
    icon: '💛',
    title: 'Générosité',
    desc: 'Ici, les pizzas sont généreuses. Pas de demi-portions ni de garnitures rachitiques — nous aimons que nos clients repartent rassasiés et heureux.',
  },
]

const allergens = [
  { icon: '🌾', name: 'Gluten' },
  { icon: '🥛', name: 'Lactose' },
  { icon: '🥚', name: 'Œufs' },
  { icon: '🐟', name: 'Poisson' },
]
</script>

<style scoped>
.bg-cream-dark { background-color: #f5ebe0; }
</style>
