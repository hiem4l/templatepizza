import { _ as __nuxt_component_0 } from './nuxt-link-BxIgUeNy.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-BRnNc4ym.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Pizzeria Sian D'Acqui — Saint-Roman-de-Bellet",
      description: "Pizzeria artisanale au feu de bois à Saint-Roman-de-Bellet, Nice. Pizzas fraîches, ingrédients locaux, commande au 06 66 86 83 70."
    });
    const strips = [
      "Four à bois",
      "Ingrédients frais",
      "Pâte maison",
      "Options végétariennes",
      "À emporter"
    ];
    const pizzaTeaser = [
      {
        name: "La Margherita",
        price: "10.00",
        vegetarian: true,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
      },
      {
        name: "La Reine",
        price: "12.00",
        vegetarian: false,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
      },
      {
        name: "La Cannibale",
        price: "14.00",
        vegetarian: false,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
      }
    ];
    const features = [
      {
        icon: "🔥",
        title: "Four à bois",
        desc: "Notre four à bois traditionnel atteint 400°C pour une cuisson parfaite en moins de 90 secondes — une croûte croustillante, un cœur moelleux."
      },
      {
        icon: "🌿",
        title: "Ingrédients frais",
        desc: "Tomates fraîches, mozzarella fior di latte, basilic du jardin. Nous sélectionnons chaque ingrédient avec soin auprès de nos producteurs locaux."
      },
      {
        icon: "🤌",
        title: "Pâte artisanale",
        desc: "Notre pâte est fermentée 48 heures pour développer tous ses arômes. Légère, digestive et croustillante, elle est le secret de nos pizzas."
      },
      {
        icon: "🌱",
        title: "Options pour tous",
        desc: "Végétariens, carnivores, amateurs de fruits de mer — notre carte propose une grande variété pour satisfaire toutes les envies."
      }
    ];
    const testimonials = [
      {
        text: "La meilleure pizza de la région ! La pâte est incroyable, légère et croustillante. Le four à bois fait toute la différence.",
        author: "Marie L.",
        origin: "Nice"
      },
      {
        text: "Sian D'Acqui c'est une institution. On y vient depuis des années et la qualité est toujours au rendez-vous. Mention spéciale pour la Calzone !",
        author: "Thomas R.",
        origin: "Villefranche-sur-Mer"
      },
      {
        text: "Commande rapide, pizza généreuse et délicieuse. Les ingrédients sont vraiment frais. On recommande vivement !",
        author: "Sophie M.",
        origin: "Saint-Roman-de-Bellet"
      }
    ];
    const galleryStrip = [
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=80",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-58d8aa5c><section class="relative h-screen min-h-[700px] flex items-end overflow-hidden" data-v-58d8aa5c><div class="absolute inset-0 bg-dark" data-v-58d8aa5c><div class="absolute inset-[-10%] bg-cover bg-center will-change-transform" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2000&q=80')" })}" data-v-58d8aa5c></div><div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" data-v-58d8aa5c></div></div><div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pizza/30 to-transparent" data-v-58d8aa5c></div><div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" data-v-58d8aa5c><span class="font-body text-[10px] tracking-[0.4em] uppercase text-cream/50 font-light" data-v-58d8aa5c>Découvrir</span><div class="w-px h-12 bg-gradient-to-b from-pizza/50 to-transparent animate-pulse" data-v-58d8aa5c></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full" data-v-58d8aa5c><div class="max-w-3xl" data-v-58d8aa5c><p class="section-subtitle mb-6 opacity-0 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.3s", "animation-fill-mode": "forwards" })}" data-v-58d8aa5c> ✦   Saint-Roman-de-Bellet · Nice </p><h1 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] tracking-wide opacity-0 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.5s", "animation-fill-mode": "forwards" })}" data-v-58d8aa5c> Sian<br data-v-58d8aa5c><em class="italic text-pizza" data-v-58d8aa5c>D&#39;Acqui</em></h1><p class="mt-8 font-body font-light text-lg text-cream/70 max-w-lg leading-relaxed opacity-0 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.8s", "animation-fill-mode": "forwards" })}" data-v-58d8aa5c> Pizzeria artisanale au feu de bois. Des pizzas généreuses préparées avec des ingrédients frais, dans la pure tradition italienne. </p><div class="flex flex-wrap gap-4 mt-10 opacity-0 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "1s", "animation-fill-mode": "forwards" })}" data-v-58d8aa5c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/carte",
        class: "btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voir la carte `);
          } else {
            return [
              createTextVNode(" Voir la carte ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="tel:+33666868370" class="inline-flex items-center gap-3 text-cream/80 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-pizza transition-colors duration-400" data-v-58d8aa5c> Commander → 06 66 86 83 70 </a></div></div></div><div class="absolute bottom-0 right-0 hidden lg:flex items-center gap-8 pr-12 pb-8 opacity-0 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "1.3s", "animation-fill-mode": "forwards" })}" data-v-58d8aa5c><div class="flex flex-col items-center gap-1" data-v-58d8aa5c><span class="font-display text-pizza text-2xl" data-v-58d8aa5c>🔥</span><span class="font-body text-[9px] tracking-[0.3em] text-cream/40 uppercase" data-v-58d8aa5c>Feu de bois</span></div><div class="w-px h-8 bg-white/20" data-v-58d8aa5c></div><div class="flex flex-col items-center gap-1" data-v-58d8aa5c><span class="font-display text-pizza text-2xl" data-v-58d8aa5c>🌿</span><span class="font-body text-[9px] tracking-[0.3em] text-cream/40 uppercase" data-v-58d8aa5c>Ingrédients frais</span></div></div></section><section class="py-5 bg-pizza/95" data-v-58d8aa5c><div class="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2" data-v-58d8aa5c><!--[-->`);
      ssrRenderList(strips, (item, i) => {
        _push(`<span class="flex items-center gap-2" data-v-58d8aa5c><span class="font-body text-[10px] tracking-[0.3em] uppercase text-cream font-light" data-v-58d8aa5c>${ssrInterpolate(item)}</span>`);
        if (i < strips.length - 1) {
          _push(`<span class="text-cream/30 hidden sm:inline" data-v-58d8aa5c>·</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--></div></section><section class="py-28 lg:py-40" data-v-58d8aa5c><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-58d8aa5c><div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" data-v-58d8aa5c><div class="relative reveal-left" data-v-58d8aa5c><div class="aspect-[4/5] bg-cover bg-center overflow-hidden" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80')" })}" data-v-58d8aa5c></div><div class="absolute -bottom-8 -right-8 w-48 h-48 bg-cover bg-center border-4 border-cream shadow-2xl hidden lg:block" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80')" })}" data-v-58d8aa5c></div><div class="absolute -top-6 -left-6 w-24 h-24 border border-pizza/30 hidden lg:block" data-v-58d8aa5c></div></div><div class="reveal-right" data-v-58d8aa5c><p class="section-subtitle mb-4" data-v-58d8aa5c>Notre pizzeria</p><div class="red-line mb-8" data-v-58d8aa5c></div><h2 class="section-title mb-8" data-v-58d8aa5c> L&#39;art de la pizza<br data-v-58d8aa5c><em class="italic text-warm" data-v-58d8aa5c>au feu de bois</em></h2><p class="font-body font-light text-dark/70 leading-relaxed mb-6" data-v-58d8aa5c> Nichée dans le hameau de Saint-Roman-de-Bellet, la Pizzeria Sian D&#39;Acqui est une adresse incontournable pour les amateurs de vraies pizzas artisanales. Chaque pâte est travaillée à la main, garnie d&#39;ingrédients soigneusement sélectionnés et cuite dans notre four à bois traditionnel. </p><p class="font-body font-light text-dark/70 leading-relaxed mb-10" data-v-58d8aa5c> Ici, la pizza est une passion. Notre carte propose des classiques intemporels et des créations originales, pour satisfaire toutes les envies — des végétariens aux carnivores les plus convaincus. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/a-propos",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Découvrir notre histoire `);
          } else {
            return [
              createTextVNode(" Découvrir notre histoire ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="py-28 bg-cream-dark" data-v-58d8aa5c><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-58d8aa5c><div class="text-center mb-16 reveal" data-v-58d8aa5c><p class="section-subtitle mb-4" data-v-58d8aa5c>Nos spécialités</p><div class="red-line mx-auto mb-8" data-v-58d8aa5c></div><h2 class="section-title" data-v-58d8aa5c>La Carte</h2><p class="mt-6 font-body font-light text-dark/60 max-w-lg mx-auto leading-relaxed" data-v-58d8aa5c> Des pizzas généreuses, cuites au feu de bois avec des ingrédients de qualité. Végétariennes, viande, poisson — il y en a pour tous les goûts. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-58d8aa5c><!--[-->`);
      ssrRenderList(pizzaTeaser, (item, i) => {
        _push(`<div class="reveal group cursor-pointer"${ssrRenderAttr("data-delay", i * 100)} data-v-58d8aa5c><div class="relative overflow-hidden aspect-[4/3]" data-v-58d8aa5c><div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="${ssrRenderStyle(`background-image: url('${item.image}')`)}" data-v-58d8aa5c></div><div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" data-v-58d8aa5c></div>`);
        if (item.vegetarian) {
          _push(`<div class="absolute top-4 left-4 bg-green-600/90 px-3 py-1" data-v-58d8aa5c><span class="font-body text-[10px] tracking-[0.25em] uppercase text-white font-light" data-v-58d8aa5c>Végétarienne</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute bottom-0 left-0 right-0 p-6" data-v-58d8aa5c><h3 class="font-display text-2xl text-cream font-bold leading-tight mb-2" data-v-58d8aa5c>${ssrInterpolate(item.name)}</h3><div class="flex items-center justify-between" data-v-58d8aa5c><p class="font-body text-sm text-cream/60 font-light" data-v-58d8aa5c><span class="text-pizza font-normal" data-v-58d8aa5c>${ssrInterpolate(item.price)}€</span></p><span class="w-8 h-px bg-pizza transition-all duration-300 group-hover:w-12" data-v-58d8aa5c></span></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-12 reveal" data-delay="300" data-v-58d8aa5c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/carte",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voir toute la carte `);
          } else {
            return [
              createTextVNode(" Voir toute la carte ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="py-28 lg:py-40 relative overflow-hidden" data-v-58d8aa5c><div class="absolute inset-0 bg-dark" data-v-58d8aa5c></div><div class="absolute inset-0 bg-cover bg-center opacity-15" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1800&q=80')" })}" data-v-58d8aa5c></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12" data-v-58d8aa5c><div class="text-center mb-16 reveal" data-v-58d8aa5c><p class="section-subtitle text-pizza mb-4" data-v-58d8aa5c>Notre savoir-faire</p><div class="red-line mx-auto mb-8" data-v-58d8aa5c></div><h2 class="section-title text-cream" data-v-58d8aa5c>Ce qui nous distingue</h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-v-58d8aa5c><!--[-->`);
      ssrRenderList(features, (feat, i) => {
        _push(`<div class="reveal border border-white/10 p-8 hover:border-pizza/50 transition-all duration-500 group"${ssrRenderAttr("data-delay", i * 120)} data-v-58d8aa5c><div class="text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block" data-v-58d8aa5c>${ssrInterpolate(feat.icon)}</div><h3 class="font-display text-xl text-cream font-bold mb-3" data-v-58d8aa5c>${ssrInterpolate(feat.title)}</h3><p class="font-body text-sm text-cream/50 font-light leading-relaxed" data-v-58d8aa5c>${ssrInterpolate(feat.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-28" data-v-58d8aa5c><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-58d8aa5c><div class="text-center mb-16 reveal" data-v-58d8aa5c><p class="section-subtitle mb-4" data-v-58d8aa5c>Avis clients</p><div class="red-line mx-auto mb-8" data-v-58d8aa5c></div><h2 class="section-title" data-v-58d8aa5c>Ce qu&#39;ils disent</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-58d8aa5c><!--[-->`);
      ssrRenderList(testimonials, (t, i) => {
        _push(`<div class="reveal bg-cream-dark p-10 border-t-2 border-pizza"${ssrRenderAttr("data-delay", i * 150)} data-v-58d8aa5c><div class="flex gap-1 mb-6" data-v-58d8aa5c><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(`<span class="text-pizza text-sm" data-v-58d8aa5c>★</span>`);
        });
        _push(`<!--]--></div><p class="font-display text-xl text-dark/80 italic font-normal leading-relaxed mb-8" data-v-58d8aa5c>« ${ssrInterpolate(t.text)} »</p><div class="flex items-center gap-4" data-v-58d8aa5c><div class="w-10 h-10 rounded-full bg-pizza/20 flex items-center justify-center" data-v-58d8aa5c><span class="font-display text-pizza font-bold" data-v-58d8aa5c>${ssrInterpolate(t.author[0])}</span></div><div data-v-58d8aa5c><p class="font-body text-sm text-dark font-bold" data-v-58d8aa5c>${ssrInterpolate(t.author)}</p><p class="font-body text-xs text-dark/50 font-light" data-v-58d8aa5c>${ssrInterpolate(t.origin)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="grid grid-cols-2 md:grid-cols-4" data-v-58d8aa5c><!--[-->`);
      ssrRenderList(galleryStrip, (img) => {
        _push(`<div class="relative aspect-square group overflow-hidden cursor-pointer" data-v-58d8aa5c><div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="${ssrRenderStyle(`background-image: url('${img}')`)}" data-v-58d8aa5c></div><div class="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" data-v-58d8aa5c><span class="text-cream text-2xl" data-v-58d8aa5c>+</span></div></div>`);
      });
      _push(`<!--]--></section><section class="py-28 bg-dark relative overflow-hidden" data-v-58d8aa5c><div class="absolute inset-0 opacity-5" data-v-58d8aa5c><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "repeating-linear-gradient(45deg, #c0392b 0px, #c0392b 1px, transparent 0px, transparent 50%)", "background-size": "30px 30px" })}" data-v-58d8aa5c></div></div><div class="relative z-10 max-w-3xl mx-auto px-6 text-center reveal" data-v-58d8aa5c><p class="section-subtitle mb-4" data-v-58d8aa5c>Commander maintenant</p><div class="red-line mx-auto mb-8" data-v-58d8aa5c></div><h2 class="section-title text-cream mb-8" data-v-58d8aa5c> Une envie de pizza ?<br data-v-58d8aa5c><em class="italic text-pizza" data-v-58d8aa5c>On est là !</em></h2><p class="font-body font-light text-cream/60 leading-relaxed mb-12 text-lg" data-v-58d8aa5c> Commandez par téléphone ou venez nous retrouver à Saint-Roman-de-Bellet. Pizzas à emporter ou sur place. </p><div class="flex flex-wrap gap-4 justify-center" data-v-58d8aa5c><a href="tel:+33666868370" class="btn-secondary" data-v-58d8aa5c> 📞 06 66 86 83 70 </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-3 text-cream/70 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-pizza transition-colors duration-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nous trouver → `);
          } else {
            return [
              createTextVNode(" Nous trouver → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-58d8aa5c"]]);

export { index as default };
//# sourceMappingURL=index-CSk0W5mj.mjs.map
