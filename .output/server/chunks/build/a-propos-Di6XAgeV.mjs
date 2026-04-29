import { _ as __nuxt_component_0 } from './nuxt-link-BxIgUeNy.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "a-propos",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "À propos — Pizzeria Sian D'Acqui",
      description: "Découvrez l'histoire de la Pizzeria Sian D'Acqui à Saint-Roman-de-Bellet. Four à bois, pâte artisanale et ingrédients frais."
    });
    const values = [
      {
        icon: "🔥",
        title: "Tradition",
        desc: "Notre four à bois est au cœur de notre savoir-faire. Nous respectons les méthodes de la pizzeria napolitaine authentique, avec une pâte longue fermentation et une cuisson vive."
      },
      {
        icon: "🌿",
        title: "Fraîcheur",
        desc: "Nous nous approvisionnons en produits frais et locaux autant que possible. Légumes de saison, fromages artisanaux et charcuteries sélectionnées — la qualité avant tout."
      },
      {
        icon: "💛",
        title: "Générosité",
        desc: "Ici, les pizzas sont généreuses. Pas de demi-portions ni de garnitures rachitiques — nous aimons que nos clients repartent rassasiés et heureux."
      }
    ];
    const allergens = [
      { icon: "🌾", name: "Gluten" },
      { icon: "🥛", name: "Lactose" },
      { icon: "🥚", name: "Œufs" },
      { icon: "🐟", name: "Poisson" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bf5135d0><section class="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden" data-v-bf5135d0><div class="absolute inset-0" data-v-bf5135d0><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=2000&q=80')" })}" data-v-bf5135d0></div><div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" data-v-bf5135d0></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full" data-v-bf5135d0><p class="section-subtitle text-pizza mb-4" data-v-bf5135d0>Notre histoire</p><h1 class="section-title text-cream" data-v-bf5135d0>La Pizzeria<br data-v-bf5135d0><em class="italic" data-v-bf5135d0>Sian D&#39;Acqui</em></h1></div></section><section class="py-28 lg:py-40" data-v-bf5135d0><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-bf5135d0><div class="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start" data-v-bf5135d0><div class="reveal-left" data-v-bf5135d0><p class="section-subtitle mb-4" data-v-bf5135d0>Saint-Roman-de-Bellet</p><div class="red-line mb-8" data-v-bf5135d0></div><h2 class="section-title mb-10" data-v-bf5135d0>Une passion<br data-v-bf5135d0><em class="italic text-warm" data-v-bf5135d0>pour la pizza</em></h2><p class="font-body font-light text-dark/70 leading-relaxed mb-6" data-v-bf5135d0> Nichée dans le charmant hameau de Saint-Roman-de-Bellet, à flanc de colline dominant Nice et la mer Méditerranée, la Pizzeria Sian D&#39;Acqui est née d&#39;une passion profonde pour l&#39;artisanat et la cuisine italienne authentique. </p><p class="font-body font-light text-dark/70 leading-relaxed mb-6" data-v-bf5135d0> Notre four à bois, cœur battant de la pizzeria, atteint des températures proches de 400°C pour cuire nos pizzas en moins de 90 secondes. C&#39;est cette cuisson rapide et intense qui donne à nos pizzas leur croûte incomparable — légèrement croustillante à l&#39;extérieur, moelleuse et aérée à l&#39;intérieur. </p><p class="font-body font-light text-dark/70 leading-relaxed" data-v-bf5135d0> Chaque pizza commence par notre pâte maison, fermentée pendant 48 heures pour développer tous ses arômes. Nous sélectionnons ensuite les meilleurs ingrédients : tomates San Marzano, mozzarella fior di latte, charcuteries artisanales et légumes frais de saison. </p></div><div class="space-y-8 reveal-right" data-v-bf5135d0><div class="aspect-[4/3] bg-cover bg-center overflow-hidden" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80')" })}" data-v-bf5135d0></div><div class="grid grid-cols-2 gap-4" data-v-bf5135d0><div class="bg-pizza p-6" data-v-bf5135d0><p class="font-display text-5xl text-cream font-bold" data-v-bf5135d0>100%</p><p class="font-body text-xs tracking-[0.25em] uppercase text-cream/70 font-light" data-v-bf5135d0>Artisanal</p></div><div class="bg-cream-dark p-6 border border-dark/10" data-v-bf5135d0><p class="font-display text-5xl text-pizza font-bold" data-v-bf5135d0>🔥</p><p class="font-body text-xs tracking-[0.25em] uppercase text-dark/50 font-light" data-v-bf5135d0>Four à bois</p></div></div></div></div></div></section><section class="py-28 bg-cream-dark" data-v-bf5135d0><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-bf5135d0><div class="text-center mb-16 reveal" data-v-bf5135d0><p class="section-subtitle mb-4" data-v-bf5135d0>Nos engagements</p><div class="red-line mx-auto mb-8" data-v-bf5135d0></div><h2 class="section-title" data-v-bf5135d0>Ce qui nous guide</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-bf5135d0><!--[-->`);
      ssrRenderList(values, (val, i) => {
        _push(`<div class="reveal border-t-2 border-pizza pt-8"${ssrRenderAttr("data-delay", i * 100)} data-v-bf5135d0><div class="text-3xl mb-4" data-v-bf5135d0>${ssrInterpolate(val.icon)}</div><h3 class="font-display text-xl text-dark font-bold mb-3" data-v-bf5135d0>${ssrInterpolate(val.title)}</h3><p class="font-body text-sm text-dark/60 font-light leading-relaxed" data-v-bf5135d0>${ssrInterpolate(val.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20" data-v-bf5135d0><div class="max-w-4xl mx-auto px-6 text-center reveal" data-v-bf5135d0><p class="section-subtitle mb-4" data-v-bf5135d0>Information importante</p><div class="red-line mx-auto mb-8" data-v-bf5135d0></div><h2 class="font-display text-3xl text-dark font-bold mb-6" data-v-bf5135d0>Allergènes</h2><p class="font-body font-light text-dark/60 leading-relaxed mb-8" data-v-bf5135d0> Nous prenons très au sérieux les allergies alimentaires. Les ingrédients allergènes sont clairement indiqués sur chaque pizza de notre carte (marqués ⚠). Si vous avez une allergie ou une intolérance, n&#39;hésitez pas à nous en informer lors de votre commande. </p><div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-bf5135d0><!--[-->`);
      ssrRenderList(allergens, (allergen) => {
        _push(`<div class="bg-cream-dark p-4 border border-amber-200 text-center" data-v-bf5135d0><span class="text-2xl mb-2 block" data-v-bf5135d0>${ssrInterpolate(allergen.icon)}</span><span class="font-body text-xs tracking-[0.15em] uppercase text-dark/60 font-light" data-v-bf5135d0>${ssrInterpolate(allergen.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-dark" data-v-bf5135d0><div class="max-w-3xl mx-auto px-6 text-center reveal" data-v-bf5135d0><h2 class="font-display text-3xl text-cream font-bold mb-6" data-v-bf5135d0>Venez nous rendre visite !</h2><p class="font-body font-light text-cream/60 mb-8" data-v-bf5135d0>Saint-Roman-de-Bellet, Nice. Ouvert du mardi au dimanche.</p><div class="flex flex-wrap gap-4 justify-center" data-v-bf5135d0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/carte",
        class: "btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voir la carte`);
          } else {
            return [
              createTextVNode("Voir la carte")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center gap-3 text-cream/70 text-sm tracking-[0.2em] uppercase font-body font-light hover:text-pizza transition-colors"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/a-propos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aPropos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf5135d0"]]);

export { aPropos as default };
//# sourceMappingURL=a-propos-Di6XAgeV.mjs.map
