<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      <!-- Background image -->
      <div class="absolute inset-0 bg-dark">
        <div
          ref="parallaxBg"
          class="absolute inset-[-10%] bg-cover bg-center will-change-transform"
          style="background-image: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2000&q=80')"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" />
      </div>

      <!-- Decorative line -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pizza/30 to-transparent" />

      <!-- Scrolling indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span class="font-body text-[10px] tracking-[0.4em] uppercase text-cream/50 font-light">Découvrir</span>
        <div class="w-px h-12 bg-gradient-to-b from-pizza/50 to-transparent animate-pulse" />
      </div>

      <!-- Hero content -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
        <div class="max-w-3xl">
          <p class="section-subtitle mb-6 opacity-0 animate-fade-in-up" style="animation-delay: 0.3s; animation-fill-mode: forwards;">
            ✦ &nbsp; Saint-Roman-de-Bellet · Nice
          </p>
          <h1 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-wide opacity-0 animate-fade-in-up" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
            Sian<br/>
            <em class="italic text-pizza">D'Acqui</em>
          </h1>
          <p class="mt-8 font-body font-light text-lg text-cream/70 max-w-lg leading-relaxed opacity-0 animate-fade-in-up" style="animation-delay: 0.8s; animation-fill-mode: forwards;">
            Pizzeria artisanale au feu de bois. Des pizzas généreuses préparées avec des ingrédients frais, dans la pure tradition italienne.
          </p>
          <div class="flex flex-wrap gap-4 mt-10 opacity-0 animate-fade-in-up" style="animation-delay: 1s; animation-fill-mode: forwards;">
            <NuxtLink to="/carte" class="btn-secondary">
              Voir la carte
            </NuxtLink>
            <a href="tel:+33666868370" class="inline-flex items-center gap-3 text-cream/80 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-pizza transition-colors duration-400">
              Commander → 06 66 86 83 70
            </a>
          </div>
        </div>
      </div>

      <!-- Badges -->
      <div class="absolute bottom-0 right-0 hidden lg:flex items-center gap-8 pr-12 pb-8 opacity-0 animate-fade-in" style="animation-delay: 1.3s; animation-fill-mode: forwards;">
        <div class="flex flex-col items-center gap-1">
          <span class="font-body text-[9px] tracking-[0.3em] text-cream/40 uppercase">Feu de bois</span>
        </div>
        <div class="w-px h-8 bg-white/20" />
        <div class="flex flex-col items-center gap-1">
          <span class="font-body text-[9px] tracking-[0.3em] text-cream/40 uppercase">Ingrédients frais</span>
        </div>
      </div>
    </section>

    <!-- Intro strip -->
    <section class="py-5 bg-pizza/95">
      <div class="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        <span v-for="(item, i) in strips" :key="item" class="flex items-center gap-2">
          <span class="font-body text-[10px] tracking-[0.3em] uppercase text-cream font-light">{{ item }}</span>
          <span v-if="i < strips.length - 1" class="text-cream/30 hidden sm:inline">·</span>
        </span>
      </div>
    </section>

    <!-- Story section -->
    <section class="py-28 lg:py-40">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <!-- Image -->
          <div class="relative reveal-left">
            <div class="aspect-[4/5] bg-cover bg-center overflow-hidden"
              style="background-image: url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80')">
            </div>
            <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-cover bg-center border-4 border-cream shadow-2xl hidden lg:block"
              style="background-image: url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80')">
            </div>
            <div class="absolute -top-6 -left-6 w-24 h-24 border border-pizza/30 hidden lg:block" />
          </div>

          <!-- Text -->
          <div class="reveal-right">
            <p class="section-subtitle mb-4">Notre pizzeria</p>
            <div class="red-line mb-8" />
            <h2 class="section-title mb-8">
              L'art de la pizza<br/>
              <em class="italic text-warm">au feu de bois</em>
            </h2>
            <p class="font-body font-light text-dark/70 leading-relaxed mb-6">
              Nichée dans le hameau de Saint-Roman-de-Bellet, la Pizzeria Sian D'Acqui est une adresse incontournable pour les amateurs de vraies pizzas artisanales. Chaque pâte est travaillée à la main, garnie d'ingrédients soigneusement sélectionnés et cuite dans notre four à bois traditionnel.
            </p>
            <p class="font-body font-light text-dark/70 leading-relaxed mb-10">
              Ici, la pizza est une passion. Notre carte propose des classiques intemporels et des créations originales, pour satisfaire toutes les envies — des végétariens aux carnivores les plus convaincus.
            </p>
            <NuxtLink to="/a-propos" class="btn-primary">
              Découvrir notre histoire
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Pizza teaser -->
    <section class="py-28 bg-cream-dark">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="section-subtitle mb-4">Nos spécialités</p>
          <div class="red-line mx-auto mb-8" />
          <h2 class="section-title">La Carte</h2>
          <p class="mt-6 font-body font-light text-dark/60 max-w-lg mx-auto leading-relaxed">
            Des pizzas généreuses, cuites au feu de bois avec des ingrédients de qualité. Végétariennes, viande, poisson — il y en a pour tous les goûts.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in pizzaTeaser"
            :key="item.name"
            class="reveal group cursor-pointer"
            :data-delay="i * 100"
          >
            <div class="relative overflow-hidden aspect-[4/3]">
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                :style="`background-image: url('${item.image}')`"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <!-- Badge veg -->
              <div v-if="item.vegetarian" class="absolute top-4 left-4 bg-green-600/90 px-3 py-1">
                <span class="font-body text-[10px] tracking-[0.25em] uppercase text-white font-light">Végétarienne</span>
              </div>
              <!-- Content -->
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="font-display text-2xl text-cream font-bold leading-tight mb-2">{{ item.name }}</h3>
                <div class="flex items-center justify-between">
                  <p class="font-body text-sm text-cream/60 font-light"><span class="text-pizza font-normal">{{ item.price }}€</span></p>
                  <span class="w-8 h-px bg-pizza transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 reveal" data-delay="300">
          <NuxtLink to="/carte" class="btn-primary">
            Voir toute la carte
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features section -->
    <section class="py-28 lg:py-40 relative overflow-hidden">
      <div class="absolute inset-0 bg-dark" />
      <div
        class="absolute inset-0 bg-cover bg-center opacity-15"
        style="background-image: url('https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1800&q=80')"
      />
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="section-subtitle text-pizza mb-4">Notre savoir-faire</p>
          <div class="red-line mx-auto mb-8" />
          <h2 class="section-title text-cream">Ce qui nous distingue</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feat, i) in features"
            :key="feat.title"
            class="reveal border border-white/10 p-8 hover:border-pizza/50 transition-all duration-500 group"
            :data-delay="i * 120"
          >
            <div class="text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{{ feat.icon }}</div>
            <h3 class="font-display text-xl text-cream font-bold mb-3">{{ feat.title }}</h3>
            <p class="font-body text-sm text-cream/50 font-light leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-16 reveal">
          <p class="section-subtitle mb-4">Avis clients</p>
          <div class="red-line mx-auto mb-8" />
          <h2 class="section-title">Ce qu'ils disent</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(t, i) in testimonials"
            :key="t.author"
            class="reveal bg-cream-dark p-10 border-t-2 border-pizza"
            :data-delay="i * 150"
          >
            <div class="flex gap-1 mb-6">
              <span v-for="s in 5" :key="s" class="text-pizza text-sm">★</span>
            </div>
            <p class="font-display text-xl text-dark/80 italic font-normal leading-relaxed mb-8">« {{ t.text }} »</p>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-pizza/20 flex items-center justify-center">
                <span class="font-display text-pizza font-bold">{{ t.author[0] }}</span>
              </div>
              <div>
                <p class="font-body text-sm text-dark font-bold">{{ t.author }}</p>
                <p class="font-body text-xs text-dark/50 font-light">{{ t.origin }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery strip -->
    <section class="grid grid-cols-2 md:grid-cols-4">
      <div
        v-for="img in galleryStrip"
        :key="img"
        class="relative aspect-square group overflow-hidden cursor-pointer"
      >
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          :style="`background-image: url('${img}')`"
        />
        <div class="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span class="text-cream text-2xl">+</span>
        </div>
      </div>
    </section>

    <!-- CTA section -->
    <section class="py-28 bg-dark relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, #c0392b 0px, #c0392b 1px, transparent 0px, transparent 50%); background-size: 30px 30px;" />
      </div>
      <div class="relative z-10 max-w-3xl mx-auto px-6 text-center reveal">
        <p class="section-subtitle mb-4">Commander maintenant</p>
        <div class="red-line mx-auto mb-8" />
        <h2 class="section-title text-cream mb-8">
          Une envie de pizza ?<br/>
          <em class="italic text-pizza">On est là !</em>
        </h2>
        <p class="font-body font-light text-cream/60 leading-relaxed mb-12 text-lg">
          Commandez par téléphone ou venez nous retrouver à Saint-Roman-de-Bellet. Pizzas à emporter ou sur place.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="tel:+33666868370" class="btn-secondary">
            📞 06 66 86 83 70
          </a>
          <NuxtLink to="/contact" class="inline-flex items-center gap-3 text-cream/70 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-pizza transition-colors duration-400">
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
  title: 'Pizzeria Sian D\'Acqui — Saint-Roman-de-Bellet',
  description: 'Pizzeria artisanale au feu de bois à Saint-Roman-de-Bellet, Nice. Pizzas fraîches, ingrédients locaux, commande au 06 66 86 83 70.',
})

const { initReveal } = useScrollReveal()

onMounted(() => {
  const cleanup = initReveal()
  onBeforeUnmount(() => cleanup?.())
})

const strips = [
  'Four à bois',
  'Ingrédients frais',
  'Pâte maison',
  'Options végétariennes',
  'À emporter',
]

const pizzaTeaser = [
  {
    name: 'La Margherita',
    price: '10.00',
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
  },
  {
    name: 'La Reine',
    price: '12.00',
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  },
  {
    name: 'La Cannibale',
    price: '14.00',
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
  },
]

const features = [
  {
    icon: '🔥',
    title: 'Four à bois',
    desc: 'Notre four à bois traditionnel atteint 400°C pour une cuisson parfaite en moins de 90 secondes — une croûte croustillante, un cœur moelleux.',
  },
  {
    icon: '🌿',
    title: 'Ingrédients frais',
    desc: 'Tomates fraîches, mozzarella fior di latte, basilic du jardin. Nous sélectionnons chaque ingrédient avec soin auprès de nos producteurs locaux.',
  },
  {
    icon: '🤌',
    title: 'Pâte artisanale',
    desc: 'Notre pâte est fermentée 48 heures pour développer tous ses arômes. Légère, digestive et croustillante, elle est le secret de nos pizzas.',
  },
  {
    icon: '🌱',
    title: 'Options pour tous',
    desc: 'Végétariens, carnivores, amateurs de fruits de mer — notre carte propose une grande variété pour satisfaire toutes les envies.',
  },
]

const testimonials = [
  {
    text: 'La meilleure pizza de la région ! La pâte est incroyable, légère et croustillante. Le four à bois fait toute la différence.',
    author: 'Marie L.',
    origin: 'Nice',
  },
  {
    text: 'Sian D\'Acqui c\'est une institution. On y vient depuis des années et la qualité est toujours au rendez-vous. Mention spéciale pour la Calzone !',
    author: 'Thomas R.',
    origin: 'Villefranche-sur-Mer',
  },
  {
    text: 'Commande rapide, pizza généreuse et délicieuse. Les ingrédients sont vraiment frais. On recommande vivement !',
    author: 'Sophie M.',
    origin: 'Saint-Roman-de-Bellet',
  },
]

const galleryStrip = [
  'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=80',
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
]
</script>

<style scoped>
.bg-cream-dark { background-color: #f5ebe0; }
</style>
