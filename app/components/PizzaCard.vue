<template>
  <div>
    <!-- Image -->
    <div class="relative overflow-hidden aspect-[4/3]">
      <div
        class="absolute inset-0 bg-cover bg-center transition-transform duration-600 group-hover:scale-105"
        :style="`background-image: url('${pizza.image}')`"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-60" />

      <!-- Badges top-left -->
      <div class="absolute top-4 left-4 flex gap-2 flex-wrap">
        <span v-if="pizza.vegetarian" class="bg-green-600/90 text-white text-[9px] tracking-[0.2em] uppercase font-body px-2 py-1">
          🌱 Végé
        </span>
        <span v-if="pizza.category === 'Signature'" class="bg-pizza/90 text-white text-[9px] tracking-[0.2em] uppercase font-body px-2 py-1">
          ★ Signature
        </span>
      </div>

      <!-- Price bottom-right -->
      <div class="absolute bottom-4 right-4">
        <span class="font-display text-2xl text-cream font-bold">{{ pizza.price.toFixed(2) }}€</span>
      </div>
    </div>

    <!-- Info -->
    <div class="p-6">
      <h3 class="font-display text-xl text-dark font-bold mb-1">{{ pizza.name }}</h3>
      <p class="font-body text-sm text-dark/60 font-light leading-relaxed mb-4">{{ pizza.description }}</p>

      <!-- Allergens -->
      <div class="flex flex-wrap gap-1">
        <span
          v-for="allergen in pizza.allergens"
          :key="allergen"
          class="text-[9px] tracking-[0.15em] uppercase font-body px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 font-light"
        >
          ⚠ {{ allergen }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pizza } from '~/data/menu'

defineProps<{ pizza: Pizza }>()
</script>
