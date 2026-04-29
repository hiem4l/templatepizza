<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/30" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-pizza mb-4">Sian D'Acqui</p>
        <h1 class="section-title text-cream">Notre carte<br/><em class="italic">& spécialités</em></h1>
      </div>
    </section>

    <!-- Sub-header catégories -->
    <div class="sticky top-[64px] z-40 bg-cream border-b border-dark/8">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <!-- Onglets -->
        <div class="flex overflow-x-auto scrollbar-none">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'flex-shrink-0 px-5 py-4 text-[11px] tracking-[0.2em] uppercase font-body font-light transition-all duration-300 border-b-2 -mb-px',
              activeCategory === cat.id
                ? 'border-pizza text-pizza'
                : 'border-transparent text-dark/50 hover:text-dark hover:border-dark/20'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
        <!-- Lien retour accueil -->
        <NuxtLink
          to="/"
          class="hidden sm:flex items-center gap-1.5 font-body text-[10px] tracking-[0.2em] uppercase text-dark/40 hover:text-pizza transition-colors duration-300 flex-shrink-0"
        >
          <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Accueil
        </NuxtLink>
      </div>
    </div>

    <!-- Main content -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">

        <!-- PIZZAS -->
        <div v-if="activeCategory === 'pizzas'">
          <!-- Filters -->
          <div class="flex flex-wrap gap-3 mb-10 reveal">
            <button
              v-for="f in filters"
              :key="f.id"
              @click="activeFilter = f.id"
              :class="[
                'flex items-center gap-2 px-5 py-2 text-xs tracking-[0.15em] uppercase font-body font-light transition-all duration-300',
                activeFilter === f.id
                  ? 'bg-pizza text-cream'
                  : 'border border-dark/20 text-dark/70 hover:border-pizza hover:text-pizza'
              ]"
            >
              <span>{{ f.icon }}</span>
              {{ f.label }}
            </button>
          </div>

          <!-- Category label: Traditionnelles -->
          <template v-if="activeFilter === 'all' || hasTraditionnelles">
            <div v-if="activeFilter === 'all'" class="mb-6 pb-3 border-b border-pizza/20 reveal">
              <h2 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light">Traditionnelles</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <div
                v-for="(pizza, i) in traditionnellesPizzas"
                :key="pizza.id"
                class="reveal group bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                :data-delay="i * 60"
              >
                <PizzaCard :pizza="pizza" />
              </div>
            </div>
          </template>

          <!-- Category label: Signatures -->
          <template v-if="activeFilter === 'all' || hasSignatures">
            <div v-if="activeFilter === 'all'" class="mb-6 pb-3 border-b border-pizza/20 reveal">
              <h2 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light">Signatures</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(pizza, i) in signaturesPizzas"
                :key="pizza.id"
                class="reveal group bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                :data-delay="i * 60"
              >
                <PizzaCard :pizza="pizza" />
              </div>
            </div>
          </template>

          <!-- Filtered view (no category labels) -->
          <template v-if="activeFilter !== 'all'">
            <div v-if="filteredPizzas.length === 0" class="text-center py-20">
              <p class="font-display text-2xl text-dark/40 mb-2">Aucune pizza pour ce filtre</p>
              <p class="font-body text-dark/50 font-light">Essayez un autre filtre.</p>
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(pizza, i) in filteredPizzas"
                :key="pizza.id"
                class="reveal group bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                :data-delay="i * 60"
              >
                <PizzaCard :pizza="pizza" />
              </div>
            </div>
          </template>
        </div>

        <!-- DESSERTS -->
        <div v-if="activeCategory === 'desserts'">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(d, i) in desserts"
              :key="d.id"
              class="reveal bg-white shadow-sm border-t-2 border-pizza overflow-hidden"
              :data-delay="i * 80"
            >
              <div class="aspect-[4/3] bg-cover bg-center"
                style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80')" />
              <div class="p-6">
                <h3 class="font-display text-xl text-dark font-bold mb-2">{{ d.name }}</h3>
                <p class="font-body text-sm text-dark/60 font-light mb-4 leading-relaxed">{{ d.description }}</p>
                <p class="font-display text-2xl text-pizza font-bold">{{ d.price.toFixed(2) }}€</p>
              </div>
            </div>
          </div>
        </div>

        <!-- BOISSONS -->
        <div v-if="activeCategory === 'boissons'">
          <div v-for="cat in boissonCategories" :key="cat.key" class="mb-12">
            <h3 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light mb-6 pb-2 border-b border-pizza/20">
              {{ cat.label }}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="(b, i) in boissonsByCategory[cat.key]"
                :key="b.id"
                class="reveal flex items-center justify-between p-4 bg-white border border-dark/10 hover:border-pizza/40 transition-colors duration-300"
                :data-delay="i * 50"
              >
                <div>
                  <p class="font-body text-sm text-dark font-bold">{{ b.name }}</p>
                  <p class="font-body text-xs text-dark/50 font-light">{{ b.description }}</p>
                </div>
                <span class="font-display text-xl text-pizza font-bold ml-4 flex-shrink-0">{{ b.price.toFixed(2) }}€</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Allergens note -->
    <section class="py-8 bg-amber-50 border-t border-amber-200">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <p class="font-body text-xs text-amber-800 font-light text-center">
          ⚠ Les badges allergènes (Gluten, Lait, Poisson, Œufs…) sont indiqués sur chaque pizza. En cas d'allergie, signalez-le lors de votre commande au <a href="tel:+33666868370" class="underline hover:text-amber-900">06 66 86 83 70</a>.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-dark">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <p class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light mb-4">Commander</p>
        <h2 class="font-display text-3xl text-cream font-bold mb-6">Vous avez fait votre choix ?</h2>
        <a href="tel:+33666868370" class="btn-secondary inline-flex">
          📞 Appelez le 06 66 86 83 70
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { pizzas as allPizzas, desserts, boissons as allBoissons } from '~/data/menu'
import type { Pizza } from '~/data/menu'
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'La Carte — Pizzeria Sian D\'Acqui',
  description: 'Découvrez notre carte de 16 pizzas artisanales au feu de bois, desserts et boissons. Végétariennes, viande, poisson.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

const activeCategory = useState<'pizzas' | 'desserts' | 'boissons'>('carteCategory', () => 'pizzas')
const activeFilter = ref('all')

const categories = [
  { id: 'pizzas' as const, label: '🍕 Pizzas' },
  { id: 'desserts' as const, label: '🍫 Desserts' },
  { id: 'boissons' as const, label: '🥤 Boissons' },
]

const filters = [
  { id: 'all', icon: '🍕', label: 'Toutes' },
  { id: 'vegetarian', icon: '🌱', label: 'Végétariennes' },
  { id: 'meat', icon: '🥩', label: 'Viande' },
  { id: 'fish', icon: '🐟', label: 'Poisson' },
  { id: 'egg', icon: '🥚', label: 'Œuf' },
]

const boissonCategories = [
  { key: 'SODAS', label: 'Sodas & Softs' },
  { key: 'BIERES', label: 'Bières' },
  { key: 'VINS', label: 'Vins' },
]

// Boissons groupées par catégorie
const boissonsByCategory = computed(() => {
  const map: Record<string, typeof allBoissons> = {}
  for (const b of allBoissons) {
    if (!map[b.category]) map[b.category] = []
    map[b.category].push(b)
  }
  return map
})

// Filtrage des pizzas
const filteredPizzas = computed(() => {
  if (activeFilter.value === 'all') return allPizzas
  if (activeFilter.value === 'vegetarian') return allPizzas.filter((p) => p.vegetarian)
  if (activeFilter.value === 'fish') return allPizzas.filter((p) => p.hasFish)
  if (activeFilter.value === 'meat') return allPizzas.filter((p) => p.hasMeat)
  if (activeFilter.value === 'egg') return allPizzas.filter((p) => p.hasEgg)
  return allPizzas
})

const traditionnellesPizzas = computed(() =>
  filteredPizzas.value.filter((p) => p.category === 'Traditionnelle')
)
const signaturesPizzas = computed(() =>
  filteredPizzas.value.filter((p) => p.category === 'Signature')
)
const hasTraditionnelles = computed(() => traditionnellesPizzas.value.length > 0)
const hasSignatures = computed(() => signaturesPizzas.value.length > 0)
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>
