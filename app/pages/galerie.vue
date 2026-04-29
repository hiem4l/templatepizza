<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-pizza mb-4">Nos créations</p>
        <h1 class="section-title text-cream">Galerie<br/><em class="italic">photo</em></h1>
      </div>
    </section>

    <!-- Gallery masonry -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-12 reveal">
          <p class="section-subtitle mb-4">L'univers Sian D'Acqui</p>
          <div class="red-line mx-auto mb-6" />
          <p class="font-body font-light text-dark/60 max-w-lg mx-auto">
            Nos pizzas, notre four à bois, nos ingrédients frais et les moments partagés dans notre pizzeria.
          </p>
        </div>

        <!-- Category filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-12 reveal">
          <button
            v-for="cat in galleryCategories"
            :key="cat.id"
            @click="activeGalleryCat = cat.id"
            :class="[
              'px-5 py-2 text-xs tracking-[0.2em] uppercase font-body font-light transition-all duration-300',
              activeGalleryCat === cat.id
                ? 'bg-pizza text-cream'
                : 'border border-dark/20 text-dark/70 hover:border-pizza hover:text-pizza'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div
            v-for="(img, i) in filteredImages"
            :key="img.src"
            :class="[
              'reveal group relative overflow-hidden cursor-pointer',
              img.wide ? 'md:col-span-2' : '',
              img.tall ? 'row-span-2' : '',
            ]"
            :data-delay="i * 50"
            @click="openLightbox(img)"
          >
            <div
              :class="['w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110', img.tall ? 'aspect-[4/5]' : 'aspect-square']"
              :style="`background-image: url('${img.src}')`"
            />
            <div class="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span class="text-cream text-3xl">+</span>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p class="font-body text-xs text-cream/80 font-light">{{ img.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxImg"
          class="fixed inset-0 z-[9998] bg-dark/95 flex items-center justify-center p-4"
          @click.self="closeLightbox"
        >
          <button
            @click="closeLightbox"
            class="absolute top-6 right-6 w-10 h-10 border border-white/30 flex items-center justify-center text-cream hover:border-pizza hover:text-pizza transition-colors"
            aria-label="Fermer"
          >
            ✕
          </button>
          <div class="max-w-3xl max-h-[80vh] w-full">
            <div
              class="w-full h-[60vh] bg-cover bg-center"
              :style="`background-image: url('${lightboxImg.src}')`"
            />
            <p class="font-body text-sm text-cream/60 font-light mt-4 text-center">{{ lightboxImg.caption }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- CTA -->
    <section class="py-16 bg-pizza">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2 class="font-display text-3xl text-cream font-bold mb-4">Venez vivre l'expérience !</h2>
        <p class="font-body text-cream/80 font-light mb-6">Commandez par téléphone ou venez nous rendre visite à Saint-Roman-de-Bellet.</p>
        <a href="tel:+33666868370" class="inline-flex items-center gap-3 border border-cream text-cream px-8 py-4 text-sm tracking-[0.2em] uppercase font-body font-light hover:bg-cream hover:text-pizza transition-all duration-400">
          📞 06 66 86 83 70
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Galerie — Pizzeria Sian D\'Acqui',
  description: 'Découvrez en images nos pizzas artisanales, notre four à bois et l\'atmosphère unique de la Pizzeria Sian D\'Acqui.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

const activeGalleryCat = ref('all')
const lightboxImg = ref<{ src: string; caption: string } | null>(null)

const galleryCategories = [
  { id: 'all', label: 'Tout' },
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'ambiance', label: 'Ambiance' },
  { id: 'ingredients', label: 'Ingrédients' },
]

const images = [
  { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80', caption: 'Pizza Margherita au feu de bois', category: 'pizzas', wide: false, tall: false },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', caption: 'La Reine — jambon, champignons', category: 'pizzas', wide: true, tall: false },
  { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80', caption: 'Notre four à bois traditionnel', category: 'ambiance', wide: false, tall: false },
  { src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80', caption: 'Ambiance pizzeria', category: 'ambiance', wide: false, tall: false },
  { src: 'https://images.unsplash.com/photo-1549299604-2b5c9d1bf9f8?w=800&q=80', caption: 'Mozzarella fior di latte', category: 'ingredients', wide: false, tall: false },
  { src: 'https://images.unsplash.com/photo-1589840700256-5aa45c2c7e17?w=800&q=80', caption: 'Tomates San Marzano', category: 'ingredients', wide: false, tall: false },
  { src: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80', caption: 'Calzone maison', category: 'pizzas', wide: false, tall: false },
  { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80', caption: 'Sortie du four', category: 'ambiance', wide: true, tall: false },
  { src: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?w=800&q=80', caption: 'Préparation de la pâte', category: 'ambiance', wide: false, tall: false },
  { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80', caption: 'Pizza Cannibale', category: 'pizzas', wide: false, tall: false },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', caption: 'Basilic frais du jardin', category: 'ingredients', wide: false, tall: false },
  { src: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80', caption: 'Pizza Nutella — dessert', category: 'pizzas', wide: false, tall: false },
]

const filteredImages = computed(() => {
  if (activeGalleryCat.value === 'all') return images
  return images.filter((img) => img.category === activeGalleryCat.value)
})

function openLightbox(img: { src: string; caption: string }) {
  lightboxImg.value = img
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxImg.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.lightbox-enter-active, .lightbox-leave-active { transition: opacity 0.3s ease; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }
</style>
