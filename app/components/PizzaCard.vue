<template>
  <div class="p-6 border-t-2 border-pizza bg-white">
    <!-- Header: name + price -->
    <div class="flex items-start justify-between gap-4 mb-2">
      <h3 class="font-display text-xl text-dark font-bold leading-tight">{{ pizza.name }}</h3>
      <span class="font-display text-xl text-pizza font-bold flex-shrink-0">{{ pizza.price.toFixed(2) }}€</span>
    </div>

    <!-- Badges -->
    <div class="flex gap-2 flex-wrap mb-3" v-if="pizza.vegetarian || pizza.category === 'Signature'">
      <span v-if="pizza.vegetarian" class="bg-green-600/90 text-white text-[9px] tracking-[0.2em] uppercase font-body px-2 py-0.5">
        Végé
      </span>
      <span v-if="pizza.category === 'Signature'" class="bg-pizza/90 text-white text-[9px] tracking-[0.2em] uppercase font-body px-2 py-0.5">
        Signature
      </span>
    </div>

    <!-- Description -->
    <p class="font-body text-sm text-dark/60 font-light leading-relaxed mb-4">{{ pizza.description }}</p>

    <!-- Allergens -->
    <div class="flex flex-wrap gap-1" v-if="pizza.allergens.length">
      <span
        v-for="allergen in pizza.allergens"
        :key="allergen"
        class="text-[9px] tracking-[0.15em] uppercase font-body px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 font-light"
      >
        {{ allergen }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pizza } from '~/data/menu'

defineProps<{ pizza: Pizza }>()
</script>
