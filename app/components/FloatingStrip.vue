<template>
  <Transition name="strip-float">
    <div
      v-if="visible"
      class="fixed left-1/2 -translate-x-1/2 z-40 top-[85px]"
    >
      <div class="bg-dark/90 backdrop-blur-md rounded-full shadow-xl border border-white/10 px-6 py-2.5 flex items-center">
        <!-- Carte page: retour + catégories -->
        <template v-if="isCartePage">
          <NuxtLink
            to="/"
            class="font-body text-[10px] tracking-[0.2em] uppercase text-pizza font-light hover:text-pizza/70 transition-colors duration-300 flex items-center gap-2 pr-4"
          >
            <svg class="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Accueil
          </NuxtLink>
          <span class="w-px h-3 bg-white/20 mr-4 flex-shrink-0" />
          <div class="flex items-center">
            <template v-for="(cat, i) in carteCats" :key="cat.id">
              <button
                @click="activeCategory = cat.id"
                :class="[
                  'font-body text-[10px] tracking-[0.2em] uppercase font-light transition-colors duration-300',
                  activeCategory === cat.id ? 'text-pizza' : 'text-cream/60 hover:text-cream'
                ]"
              >{{ cat.label }}</button>
              <span v-if="i < carteCats.length - 1" class="mx-3 text-white/20 text-xs select-none">|</span>
            </template>
          </div>
        </template>

        <!-- Autres pages : features -->
        <template v-else>
          <template v-for="(item, i) in strips" :key="item">
            <span class="font-body text-[10px] tracking-[0.2em] uppercase text-cream/70 font-light whitespace-nowrap">{{ item }}</span>
            <span v-if="i < strips.length - 1" class="mx-3 text-white/20 text-xs select-none">·</span>
          </template>
          <span class="w-px h-3 bg-white/20 mx-4 flex-shrink-0" />
          <NuxtLink
            to="/carte"
            class="font-body text-[10px] tracking-[0.2em] uppercase text-pizza font-light hover:text-pizza/70 transition-colors duration-300 flex items-center gap-1.5 whitespace-nowrap"
          >
            La carte
            <svg class="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
        </template>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const route = useRoute()
const isCartePage = computed(() => route.path === '/carte')

// Shared state with carte.vue
const activeCategory = useState<string>('carteCategory', () => 'pizzas')

const scrollY = ref(0)
const visible = computed(() => {
  if (isCartePage.value) return false
  return scrollY.value > 380
})

onMounted(() => {
  const onScroll = () => { scrollY.value = window.scrollY }
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})

const strips = ['Four à bois', 'Ingrédients frais', 'Pâte maison', 'À emporter']

const carteCats = [
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'boissons', label: 'Boissons' },
]
</script>

<style scoped>
.strip-float-enter-active,
.strip-float-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.strip-float-enter-from,
.strip-float-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-14px);
}
.strip-float-enter-to,
.strip-float-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
</style>
