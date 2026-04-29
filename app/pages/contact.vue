<template>
  <div>
    <!-- Hero -->
    <section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=2000&q=80')" />
        <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <p class="section-subtitle text-pizza mb-4">Nous joindre</p>
        <h1 class="section-title text-cream">Contact &<br/><em class="italic">informations</em></h1>
      </div>
    </section>

    <!-- Contact content -->
    <section class="py-28">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <!-- Info -->
          <div class="reveal-left">
            <p class="section-subtitle mb-4">Nous trouver</p>
            <div class="red-line mb-8" />
            <h2 class="section-title mb-10">Toujours à<br/><em class="italic text-warm">votre service</em></h2>

            <ul class="space-y-8 mb-12">
              <li v-for="info in contactInfos" :key="info.label" class="flex gap-5">
                <div class="w-12 h-12 border border-pizza/30 flex items-center justify-center flex-shrink-0">
                  <span class="text-pizza text-xl">{{ info.icon }}</span>
                </div>
                <div>
                  <p class="font-body text-xs tracking-[0.25em] uppercase text-pizza font-light mb-1">{{ info.label }}</p>
                  <div class="font-body text-sm text-dark/70 font-light leading-relaxed" v-html="info.value" />
                </div>
              </li>
            </ul>

            <!-- Hours -->
            <div class="border border-dark/10 p-8">
              <h3 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light mb-6">Horaires d'ouverture</h3>
              <div class="space-y-3">
                <div v-for="h in hours" :key="h.day" class="flex justify-between">
                  <span class="font-body text-sm text-dark/60 font-light">{{ h.day }}</span>
                  <span :class="['font-body text-sm font-light', h.closed ? 'text-pizza' : 'text-dark']">{{ h.time }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Commander section -->
          <div class="reveal-right">
            <div class="bg-cream-dark p-10 lg:p-12 border-t-4 border-pizza mb-8">
              <h3 class="font-display text-2xl text-dark font-bold mb-4">Commander par téléphone</h3>
              <p class="font-body font-light text-dark/60 mb-8 leading-relaxed">
                La commande en ligne est en cours de développement. Pour commander vos pizzas, appelez-nous directement — nous sommes ravis de vous aider à choisir !
              </p>
              <a
                href="tel:+33666868370"
                class="flex items-center gap-4 group"
              >
                <div class="w-14 h-14 bg-pizza flex items-center justify-center flex-shrink-0 group-hover:bg-pizza-dark transition-colors duration-300">
                  <span class="text-cream text-2xl">📞</span>
                </div>
                <div>
                  <p class="font-body text-xs tracking-[0.2em] uppercase text-pizza font-light mb-0.5">Appeler maintenant</p>
                  <p class="font-display text-3xl text-dark font-bold group-hover:text-pizza transition-colors duration-300">06 66 86 83 70</p>
                </div>
              </a>
            </div>

            <!-- Contact form -->
            <div class="bg-white p-8 border border-dark/10">
              <h3 class="font-display text-xl text-dark font-bold mb-6">Envoyer un message</h3>

              <Transition name="success">
                <div v-if="sent" class="bg-green-50 border border-green-200 p-6 text-center mb-6">
                  <p class="text-green-700 font-body font-light">Merci ! Votre message a bien été envoyé.</p>
                </div>
              </Transition>

              <form v-if="!sent" @submit.prevent="submitForm" class="space-y-5">
                <div class="grid md:grid-cols-2 gap-5">
                  <div>
                    <label class="form-label">Prénom</label>
                    <input v-model="form.firstname" type="text" required placeholder="Votre prénom" class="form-input" />
                  </div>
                  <div>
                    <label class="form-label">Nom</label>
                    <input v-model="form.lastname" type="text" required placeholder="Votre nom" class="form-input" />
                  </div>
                </div>
                <div>
                  <label class="form-label">Email</label>
                  <input v-model="form.email" type="email" required placeholder="votre@email.com" class="form-input" />
                </div>
                <div>
                  <label class="form-label">Objet</label>
                  <select v-model="form.subject" class="form-input bg-white">
                    <option value="">Sélectionnez un objet</option>
                    <option>Réservation de table</option>
                    <option>Question sur la carte</option>
                    <option>Allergies alimentaires</option>
                    <option>Événement / Groupe</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label class="form-label">Message</label>
                  <textarea v-model="form.message" rows="5" required placeholder="Votre message..." class="form-input resize-none" />
                </div>
                <button type="submit" :disabled="submitting" class="btn-primary w-full justify-center">
                  <span v-if="submitting">Envoi en cours...</span>
                  <span v-else>Envoyer le message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map placeholder -->
    <section class="h-64 bg-dark relative overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center opacity-30"
        style="background-image: url('https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=1800&q=80')"
      />
      <div class="relative z-10 h-full flex items-center justify-center">
        <div class="text-center">
          <p class="font-display text-3xl text-pizza font-bold mb-2">Saint-Roman-de-Bellet</p>
          <p class="font-body text-xs tracking-[0.3em] text-cream/60 uppercase">06200 Nice, France</p>
          <a
            href="https://maps.google.com/?q=Saint-Roman-de-Bellet+Nice"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex mt-4 items-center gap-2 text-xs tracking-[0.2em] uppercase font-body text-pizza hover:text-pizza-light transition-colors"
          >
            Voir sur Google Maps →
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useSeoMeta({
  title: 'Contact — Pizzeria Sian D\'Acqui',
  description: 'Contactez la Pizzeria Sian D\'Acqui à Saint-Roman-de-Bellet. Appelez le 06 66 86 83 70 pour commander.',
})

const { initReveal } = useScrollReveal()
onMounted(() => {
  const c = initReveal()
  onBeforeUnmount(() => c?.())
})

const contactInfos = [
  {
    icon: '📍',
    label: 'Adresse',
    value: 'Saint-Roman-de-Bellet<br/>06200 Nice, France',
  },
  {
    icon: '📞',
    label: 'Téléphone',
    value: '<a href="tel:+33666868370" class="hover:text-pizza transition-colors duration-300">06 66 86 83 70</a>',
  },
  {
    icon: '🚗',
    label: 'Accès',
    value: 'Accessible en voiture depuis Nice (20 min). Parking disponible sur place.',
  },
]

const hours = [
  { day: 'Lundi', time: 'Fermé', closed: true },
  { day: 'Mardi', time: '11h30 – 14h  &  18h – 22h', closed: false },
  { day: 'Mercredi', time: '11h30 – 14h  &  18h – 22h', closed: false },
  { day: 'Jeudi', time: '11h30 – 14h  &  18h – 22h', closed: false },
  { day: 'Vendredi', time: '11h30 – 14h  &  18h – 22h30', closed: false },
  { day: 'Samedi', time: '12h – 14h30  &  18h – 22h30', closed: false },
  { day: 'Dimanche', time: '12h – 14h30  &  18h – 22h', closed: false },
]

const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  subject: '',
  message: '',
})

const submitting = ref(false)
const sent = ref(false)

async function submitForm() {
  submitting.value = true
  // Simulate form submission
  await new Promise((r) => setTimeout(r, 1000))
  sent.value = true
  submitting.value = false
}
</script>

<style scoped>
.bg-cream-dark { background-color: #f5ebe0; }
.success-enter-active, .success-leave-active { transition: opacity 0.4s ease; }
.success-enter-from, .success-leave-to { opacity: 0; }
</style>
