import { defineComponent, ref, computed, unref, toRef, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-BRnNc4ym.mjs';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PizzaCard",
  __ssrInlineRender: true,
  props: {
    pizza: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative overflow-hidden aspect-[4/3]"><div class="absolute inset-0 bg-cover bg-center transition-transform duration-600 group-hover:scale-105" style="${ssrRenderStyle(`background-image: url('${__props.pizza.image}')`)}"></div><div class="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-60"></div><div class="absolute top-4 left-4 flex gap-2 flex-wrap">`);
      if (__props.pizza.vegetarian) {
        _push(`<span class="bg-green-600/90 text-white text-[9px] tracking-[0.2em] uppercase font-body px-2 py-1"> 🌱 Végé </span>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.pizza.category === "Signature") {
        _push(`<span class="bg-pizza/90 text-white text-[9px] tracking-[0.2em] uppercase font-body px-2 py-1"> ★ Signature </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute bottom-4 right-4"><span class="font-display text-2xl text-cream font-bold">${ssrInterpolate(__props.pizza.price.toFixed(2))}€</span></div></div><div class="p-6"><h3 class="font-display text-xl text-dark font-bold mb-1">${ssrInterpolate(__props.pizza.name)}</h3><p class="font-body text-sm text-dark/60 font-light leading-relaxed mb-4">${ssrInterpolate(__props.pizza.description)}</p><div class="flex flex-wrap gap-1"><!--[-->`);
      ssrRenderList(__props.pizza.allergens, (allergen) => {
        _push(`<span class="text-[9px] tracking-[0.15em] uppercase font-body px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 font-light"> ⚠ ${ssrInterpolate(allergen)}</span>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PizzaCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "PizzaCard" });
const pizzas = [
  // ── Traditionnelles ──────────────────────────────────────────────────
  {
    id: 1,
    name: "La Marguerite",
    description: "Tomate, mozzarella, basilic frais",
    price: 10,
    category: "Traditionnelle",
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
  },
  {
    id: 2,
    name: "La Regina",
    description: "Tomate, mozzarella, jambon, champignons",
    price: 13,
    category: "Traditionnelle",
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
  },
  {
    id: 3,
    name: "La Napo",
    description: "Tomate, mozzarella, anchois, câpres, olives",
    price: 14,
    category: "Traditionnelle",
    vegetarian: false,
    hasFish: true,
    hasMeat: false,
    hasEgg: false,
    allergens: ["Gluten", "Lait", "Poisson"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
  },
  {
    id: 4,
    name: "La Caprese",
    description: "Tomate, mozzarella di bufala, tomates cerises, roquette",
    price: 14,
    category: "Traditionnelle",
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80"
  },
  {
    id: 5,
    name: "La 4 Saisons",
    description: "Tomate, mozzarella, jambon, champignons, artichauts, olives",
    price: 14,
    category: "Traditionnelle",
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80"
  },
  {
    id: 6,
    name: "La Chèvre Miel",
    description: "Crème fraîche, mozzarella, fromage de chèvre, miel",
    price: 14,
    category: "Traditionnelle",
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80"
  },
  {
    id: 7,
    name: "La Calabrese",
    description: "Tomate, mozzarella, salami piquant, poivrons, oignons",
    price: 15,
    category: "Traditionnelle",
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80"
  },
  {
    id: 8,
    name: "La Calzone",
    description: "Pizza fermée : tomate, mozzarella, jambon, champignons, œuf",
    price: 14,
    category: "Traditionnelle",
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: true,
    allergens: ["Gluten", "Lait", "Œufs"],
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=800&q=80"
  },
  {
    id: 9,
    name: "La 4 Fromages",
    description: "Crème fraîche, mozzarella, gorgonzola, chèvre, parmesan",
    price: 14,
    category: "Traditionnelle",
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&q=80"
  },
  {
    id: 10,
    name: "La Merguez",
    description: "Tomate, mozzarella, merguez du boucher, poivrons, oignons",
    price: 14,
    category: "Traditionnelle",
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80"
  },
  {
    id: 11,
    name: "La Cannibale",
    description: "Tomate, mozzarella, viande hachée Angus, chorizo, lardons, œuf",
    price: 15,
    category: "Traditionnelle",
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: true,
    allergens: ["Gluten", "Lait", "Œufs"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
  },
  // ── Signatures ───────────────────────────────────────────────────────
  {
    id: 12,
    name: "La Lily-Rose",
    description: "Crème fraîche, mozzarella, saumon fumé, citron, aneth",
    price: 15,
    category: "Signature",
    vegetarian: false,
    hasFish: true,
    hasMeat: false,
    hasEgg: false,
    allergens: ["Gluten", "Lait", "Poisson"],
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80"
  },
  {
    id: 13,
    name: "La Emmy-Lou",
    description: "Tomate, mozzarella, jambon cru, roquette, copeaux de parmesan",
    price: 15,
    category: "Signature",
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
  },
  {
    id: 14,
    name: "La Chris",
    description: "Crème fraîche, mozzarella, poulet mariné, champignons, curry",
    price: 15,
    category: "Signature",
    vegetarian: false,
    hasFish: false,
    hasMeat: true,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80"
  },
  {
    id: 15,
    name: "La Ludmilove",
    description: "Tomate, mozzarella, légumes grillés, pesto maison",
    price: 15,
    category: "Signature",
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ["Gluten", "Lait", "Fruits à coque"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
  },
  {
    id: 16,
    name: "La Truffe",
    description: "Crème fraîche, mozzarella, champignons, huile de truffe",
    price: 20,
    category: "Signature",
    vegetarian: true,
    hasFish: false,
    hasMeat: false,
    hasEgg: false,
    allergens: ["Gluten", "Lait"],
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80"
  }
];
const desserts = [
  {
    id: 1,
    name: "La Nutella",
    description: "Pizza sucrée garnie de Nutella, servie chaude. Un dessert gourmand incontournable.",
    price: 7
  }
];
const boissons = [
  // Sodas
  { id: 1, name: "Coca-Cola", description: "33cl", price: 3, category: "SODAS" },
  { id: 2, name: "Coca-Cola Zéro", description: "33cl", price: 3, category: "SODAS" },
  { id: 3, name: "Orangina", description: "33cl", price: 3, category: "SODAS" },
  { id: 4, name: "Ice Tea Pêche", description: "33cl", price: 3, category: "SODAS" },
  // Bières
  { id: 5, name: "Heineken", description: "33cl — Bière blonde hollandaise", price: 3, category: "BIERES" },
  // Vins
  { id: 6, name: "Marrenon, Les Grains, Pinot noir", description: "IGP Méditerranée — Rouge", price: 17, category: "VINS" },
  { id: 7, name: "Sun Up, Les Grains, Pinot noir", description: "IGP Méditerranée — Rosé", price: 17, category: "VINS" }
];
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (init) {
    nuxtApp._state[key] ??= { _default: init };
  }
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "carte",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "La Carte — Pizzeria Sian D'Acqui",
      description: "Découvrez notre carte de 16 pizzas artisanales au feu de bois, desserts et boissons. Végétariennes, viande, poisson."
    });
    const activeCategory = useState("carteCategory", () => "pizzas");
    const activeFilter = ref("all");
    const categories = [
      { id: "pizzas", label: "🍕 Pizzas" },
      { id: "desserts", label: "🍫 Desserts" },
      { id: "boissons", label: "🥤 Boissons" }
    ];
    const filters = [
      { id: "all", icon: "🍕", label: "Toutes" },
      { id: "vegetarian", icon: "🌱", label: "Végétariennes" },
      { id: "meat", icon: "🥩", label: "Viande" },
      { id: "fish", icon: "🐟", label: "Poisson" },
      { id: "egg", icon: "🥚", label: "Œuf" }
    ];
    const boissonCategories = [
      { key: "SODAS", label: "Sodas & Softs" },
      { key: "BIERES", label: "Bières" },
      { key: "VINS", label: "Vins" }
    ];
    const boissonsByCategory = computed(() => {
      const map = {};
      for (const b of boissons) {
        if (!map[b.category]) map[b.category] = [];
        map[b.category].push(b);
      }
      return map;
    });
    const filteredPizzas = computed(() => {
      if (activeFilter.value === "all") return pizzas;
      if (activeFilter.value === "vegetarian") return pizzas.filter((p) => p.vegetarian);
      if (activeFilter.value === "fish") return pizzas.filter((p) => p.hasFish);
      if (activeFilter.value === "meat") return pizzas.filter((p) => p.hasMeat);
      if (activeFilter.value === "egg") return pizzas.filter((p) => p.hasEgg);
      return pizzas;
    });
    const traditionnellesPizzas = computed(
      () => filteredPizzas.value.filter((p) => p.category === "Traditionnelle")
    );
    const signaturesPizzas = computed(
      () => filteredPizzas.value.filter((p) => p.category === "Signature")
    );
    const hasTraditionnelles = computed(() => traditionnellesPizzas.value.length > 0);
    const hasSignatures = computed(() => signaturesPizzas.value.length > 0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PizzaCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9140a16a><section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden" data-v-9140a16a><div class="absolute inset-0" data-v-9140a16a><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2000&q=80')" })}" data-v-9140a16a></div><div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/30" data-v-9140a16a></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full" data-v-9140a16a><p class="section-subtitle text-pizza mb-4" data-v-9140a16a>Sian D&#39;Acqui</p><h1 class="section-title text-cream" data-v-9140a16a>Notre carte<br data-v-9140a16a><em class="italic" data-v-9140a16a>&amp; spécialités</em></h1></div></section><div class="sticky top-[73px] z-40 bg-cream/95 backdrop-blur-sm border-b border-dark/10 shadow-sm" data-v-9140a16a><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-9140a16a><div class="flex gap-2 py-4 overflow-x-auto scrollbar-none" data-v-9140a16a><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<button class="${ssrRenderClass([
          "flex-shrink-0 px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-body font-light transition-all duration-300",
          unref(activeCategory) === cat.id ? "bg-pizza text-cream" : "border border-dark/20 text-dark/70 hover:border-pizza hover:text-pizza"
        ])}" data-v-9140a16a>${ssrInterpolate(cat.label)}</button>`);
      });
      _push(`<!--]--></div></div></div><section class="py-20" data-v-9140a16a><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-9140a16a>`);
      if (unref(activeCategory) === "pizzas") {
        _push(`<div data-v-9140a16a><div class="flex flex-wrap gap-3 mb-10 reveal" data-v-9140a16a><!--[-->`);
        ssrRenderList(filters, (f) => {
          _push(`<button class="${ssrRenderClass([
            "flex items-center gap-2 px-5 py-2 text-xs tracking-[0.15em] uppercase font-body font-light transition-all duration-300",
            unref(activeFilter) === f.id ? "bg-pizza text-cream" : "border border-dark/20 text-dark/70 hover:border-pizza hover:text-pizza"
          ])}" data-v-9140a16a><span data-v-9140a16a>${ssrInterpolate(f.icon)}</span> ${ssrInterpolate(f.label)}</button>`);
        });
        _push(`<!--]--></div>`);
        if (unref(activeFilter) === "all" || unref(hasTraditionnelles)) {
          _push(`<!--[-->`);
          if (unref(activeFilter) === "all") {
            _push(`<div class="mb-6 pb-3 border-b border-pizza/20 reveal" data-v-9140a16a><h2 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light" data-v-9140a16a>Traditionnelles</h2></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" data-v-9140a16a><!--[-->`);
          ssrRenderList(unref(traditionnellesPizzas), (pizza, i) => {
            _push(`<div class="reveal group bg-white shadow-sm hover:shadow-md transition-shadow duration-300"${ssrRenderAttr("data-delay", i * 60)} data-v-9140a16a>`);
            _push(ssrRenderComponent(_component_PizzaCard, { pizza }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(activeFilter) === "all" || unref(hasSignatures)) {
          _push(`<!--[-->`);
          if (unref(activeFilter) === "all") {
            _push(`<div class="mb-6 pb-3 border-b border-pizza/20 reveal" data-v-9140a16a><h2 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light" data-v-9140a16a>Signatures</h2></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-9140a16a><!--[-->`);
          ssrRenderList(unref(signaturesPizzas), (pizza, i) => {
            _push(`<div class="reveal group bg-white shadow-sm hover:shadow-md transition-shadow duration-300"${ssrRenderAttr("data-delay", i * 60)} data-v-9140a16a>`);
            _push(ssrRenderComponent(_component_PizzaCard, { pizza }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (unref(activeFilter) !== "all") {
          _push(`<!--[-->`);
          if (unref(filteredPizzas).length === 0) {
            _push(`<div class="text-center py-20" data-v-9140a16a><p class="font-display text-2xl text-dark/40 mb-2" data-v-9140a16a>Aucune pizza pour ce filtre</p><p class="font-body text-dark/50 font-light" data-v-9140a16a>Essayez un autre filtre.</p></div>`);
          } else {
            _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-9140a16a><!--[-->`);
            ssrRenderList(unref(filteredPizzas), (pizza, i) => {
              _push(`<div class="reveal group bg-white shadow-sm hover:shadow-md transition-shadow duration-300"${ssrRenderAttr("data-delay", i * 60)} data-v-9140a16a>`);
              _push(ssrRenderComponent(_component_PizzaCard, { pizza }, null, _parent));
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeCategory) === "desserts") {
        _push(`<div data-v-9140a16a><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-9140a16a><!--[-->`);
        ssrRenderList(unref(desserts), (d, i) => {
          _push(`<div class="reveal bg-white shadow-sm border-t-2 border-pizza overflow-hidden"${ssrRenderAttr("data-delay", i * 80)} data-v-9140a16a><div class="aspect-[4/3] bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80')" })}" data-v-9140a16a></div><div class="p-6" data-v-9140a16a><h3 class="font-display text-xl text-dark font-bold mb-2" data-v-9140a16a>${ssrInterpolate(d.name)}</h3><p class="font-body text-sm text-dark/60 font-light mb-4 leading-relaxed" data-v-9140a16a>${ssrInterpolate(d.description)}</p><p class="font-display text-2xl text-pizza font-bold" data-v-9140a16a>${ssrInterpolate(d.price.toFixed(2))}€</p></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeCategory) === "boissons") {
        _push(`<div data-v-9140a16a><!--[-->`);
        ssrRenderList(boissonCategories, (cat) => {
          _push(`<div class="mb-12" data-v-9140a16a><h3 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light mb-6 pb-2 border-b border-pizza/20" data-v-9140a16a>${ssrInterpolate(cat.label)}</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-9140a16a><!--[-->`);
          ssrRenderList(unref(boissonsByCategory)[cat.key], (b, i) => {
            _push(`<div class="reveal flex items-center justify-between p-4 bg-white border border-dark/10 hover:border-pizza/40 transition-colors duration-300"${ssrRenderAttr("data-delay", i * 50)} data-v-9140a16a><div data-v-9140a16a><p class="font-body text-sm text-dark font-bold" data-v-9140a16a>${ssrInterpolate(b.name)}</p><p class="font-body text-xs text-dark/50 font-light" data-v-9140a16a>${ssrInterpolate(b.description)}</p></div><span class="font-display text-xl text-pizza font-bold ml-4 flex-shrink-0" data-v-9140a16a>${ssrInterpolate(b.price.toFixed(2))}€</span></div>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="py-8 bg-amber-50 border-t border-amber-200" data-v-9140a16a><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-9140a16a><p class="font-body text-xs text-amber-800 font-light text-center" data-v-9140a16a> ⚠ Les badges allergènes (Gluten, Lait, Poisson, Œufs…) sont indiqués sur chaque pizza. En cas d&#39;allergie, signalez-le lors de votre commande au <a href="tel:+33666868370" class="underline hover:text-amber-900" data-v-9140a16a>06 66 86 83 70</a>. </p></div></section><section class="py-16 bg-dark" data-v-9140a16a><div class="max-w-3xl mx-auto px-6 text-center" data-v-9140a16a><p class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light mb-4" data-v-9140a16a>Commander</p><h2 class="font-display text-3xl text-cream font-bold mb-6" data-v-9140a16a>Vous avez fait votre choix ?</h2><a href="tel:+33666868370" class="btn-secondary inline-flex" data-v-9140a16a> 📞 Appelez le 06 66 86 83 70 </a></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/carte.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const carte = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9140a16a"]]);

export { carte as default };
//# sourceMappingURL=carte-D3HAKc_U.mjs.map
