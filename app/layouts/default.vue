<template>
  <!-- Custom cursor -->
  <div ref="cursorEl" class="custom-cursor hidden lg:block fixed top-0 left-0 w-10 h-10 rounded-full border border-pizza pointer-events-none z-[9999] transition-[width,height,border-color,background-color] duration-300 mix-blend-difference" />
  <div ref="cursorDotEl" class="custom-cursor-dot hidden lg:block fixed top-0 left-0 w-2 h-2 rounded-full bg-pizza pointer-events-none z-[9999]" />

  <!-- Navigation pill -->
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 px-4">
    <nav
      :class="[
        'w-full max-w-5xl pointer-events-auto flex items-center justify-between gap-4 px-4 py-2.5 transition-all duration-500',
        scrolled
          ? 'bg-dark/95 backdrop-blur-md rounded-full shadow-2xl border border-white/10'
          : 'bg-transparent rounded-full'
      ]"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5 group flex-shrink-0">
        <div class="w-7 h-7 rounded-full bg-pizza flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" class="w-4 h-4 text-cream" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
        </div>
        <span class="font-display text-base text-cream font-bold tracking-wide transition-colors duration-300 group-hover:text-pizza">Sian D'Acqui</span>
      </NuxtLink>

      <!-- Desktop links -->
      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.path">
          <NuxtLink
            :to="link.path"
            :class="[
              'relative font-body text-[11px] tracking-[0.18em] uppercase font-light px-4 py-1.5 rounded-full transition-all duration-300',
              isActive(link.path)
                ? 'bg-white/15 text-cream font-normal'
                : 'text-cream/60 hover:text-cream hover:bg-white/8'
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA + mobile btn -->
      <div class="flex items-center gap-3">
        <a
          href="tel:+33666868370"
          class="hidden lg:flex items-center gap-2 bg-pizza hover:bg-pizza-dark text-cream text-[11px] tracking-[0.18em] uppercase font-body font-light px-5 py-2 rounded-full transition-all duration-300 flex-shrink-0"
        >
          Commander
        </a>

        <!-- Mobile menu btn -->
        <button
          class="lg:hidden flex flex-col gap-1.5 p-1.5 rounded-full hover:bg-white/10 transition-colors duration-300"
          @click="mobileOpen = !mobileOpen"
          aria-label="Menu"
        >
          <span :class="['block w-5 h-px bg-cream transition-all duration-300 origin-center', mobileOpen ? 'rotate-45 translate-y-[7px]' : '']" />
          <span :class="['block w-5 h-px bg-cream transition-all duration-300', mobileOpen ? 'opacity-0 scale-x-0' : '']" />
          <span :class="['block w-5 h-px bg-cream transition-all duration-300 origin-center', mobileOpen ? '-rotate-45 -translate-y-[7px]' : '']" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu dropdown -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="absolute top-[calc(100%+8px)] left-4 right-4 pointer-events-auto bg-dark/98 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl py-6 overflow-hidden"
      >
        <ul class="flex flex-col items-center gap-1 px-4">
          <li v-for="link in navLinks" :key="link.path" class="w-full">
            <NuxtLink
              :to="link.path"
              :class="[
                'block text-center font-body text-sm tracking-[0.2em] uppercase font-light py-3 rounded-xl transition-all duration-300',
                isActive(link.path) ? 'bg-white/10 text-cream' : 'text-cream/60 hover:text-cream hover:bg-white/5'
              ]"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <div class="mt-4 px-4">
          <a
            href="tel:+33666868370"
            class="block text-center bg-pizza text-cream text-xs tracking-[0.2em] uppercase font-body font-light py-3 rounded-full hover:bg-pizza-dark transition-all duration-300"
          >
            06 66 86 83 70
          </a>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Page content -->
  <main class="pt-0">
    <slot />
  </main>

  <!-- Footer -->
  <AppFooter />
</template>

<script setup lang="ts">
import { useCursor } from '~/composables/useCursor'

const scrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 60
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
})

const mobileOpen = ref(false)

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'La Carte', path: '/carte' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'Contact', path: '/contact' },
]

const cursorEl = ref<HTMLElement | null>(null)
const cursorDotEl = ref<HTMLElement | null>(null)
const { initCursor } = useCursor()

onMounted(() => {
  if (cursorEl.value && cursorDotEl.value) {
    initCursor(cursorEl.value, cursorDotEl.value)
  }
})

// Close mobile menu on route change
const route = useRoute()

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

watch(() => route.path, () => {
  mobileOpen.value = false
})
</script>
