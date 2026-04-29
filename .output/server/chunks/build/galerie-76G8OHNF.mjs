import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-BRnNc4ym.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "galerie",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Galerie — Pizzeria Sian D'Acqui",
      description: "Découvrez en images nos pizzas artisanales, notre four à bois et l'atmosphère unique de la Pizzeria Sian D'Acqui."
    });
    const activeGalleryCat = ref("all");
    const lightboxImg = ref(null);
    const galleryCategories = [
      { id: "all", label: "Tout" },
      { id: "pizzas", label: "Pizzas" },
      { id: "ambiance", label: "Ambiance" },
      { id: "ingredients", label: "Ingrédients" }
    ];
    const images = [
      { src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80", caption: "Pizza Margherita au feu de bois", category: "pizzas", wide: false, tall: false },
      { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", caption: "La Reine — jambon, champignons", category: "pizzas", wide: true, tall: false },
      { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", caption: "Notre four à bois traditionnel", category: "ambiance", wide: false, tall: false },
      { src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80", caption: "Ambiance pizzeria", category: "ambiance", wide: false, tall: false },
      { src: "https://images.unsplash.com/photo-1549299604-2b5c9d1bf9f8?w=800&q=80", caption: "Mozzarella fior di latte", category: "ingredients", wide: false, tall: false },
      { src: "https://images.unsplash.com/photo-1589840700256-5aa45c2c7e17?w=800&q=80", caption: "Tomates San Marzano", category: "ingredients", wide: false, tall: false },
      { src: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80", caption: "Calzone maison", category: "pizzas", wide: false, tall: false },
      { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", caption: "Sortie du four", category: "ambiance", wide: true, tall: false },
      { src: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=800&q=80", caption: "Préparation de la pâte", category: "ambiance", wide: false, tall: false },
      { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80", caption: "Pizza Cannibale", category: "pizzas", wide: false, tall: false },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Basilic frais du jardin", category: "ingredients", wide: false, tall: false },
      { src: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80", caption: "Pizza Nutella — dessert", category: "pizzas", wide: false, tall: false }
    ];
    const filteredImages = computed(() => {
      if (activeGalleryCat.value === "all") return images;
      return images.filter((img) => img.category === activeGalleryCat.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-03fd2729><section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden" data-v-03fd2729><div class="absolute inset-0" data-v-03fd2729><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=2000&q=80')" })}" data-v-03fd2729></div><div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" data-v-03fd2729></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full" data-v-03fd2729><p class="section-subtitle text-pizza mb-4" data-v-03fd2729>Nos créations</p><h1 class="section-title text-cream" data-v-03fd2729>Galerie<br data-v-03fd2729><em class="italic" data-v-03fd2729>photo</em></h1></div></section><section class="py-20" data-v-03fd2729><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-03fd2729><div class="text-center mb-12 reveal" data-v-03fd2729><p class="section-subtitle mb-4" data-v-03fd2729>L&#39;univers Sian D&#39;Acqui</p><div class="red-line mx-auto mb-6" data-v-03fd2729></div><p class="font-body font-light text-dark/60 max-w-lg mx-auto" data-v-03fd2729> Nos pizzas, notre four à bois, nos ingrédients frais et les moments partagés dans notre pizzeria. </p></div><div class="flex flex-wrap justify-center gap-3 mb-12 reveal" data-v-03fd2729><!--[-->`);
      ssrRenderList(galleryCategories, (cat) => {
        _push(`<button class="${ssrRenderClass([
          "px-5 py-2 text-xs tracking-[0.2em] uppercase font-body font-light transition-all duration-300",
          unref(activeGalleryCat) === cat.id ? "bg-pizza text-cream" : "border border-dark/20 text-dark/70 hover:border-pizza hover:text-pizza"
        ])}" data-v-03fd2729>${ssrInterpolate(cat.label)}</button>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" data-v-03fd2729><!--[-->`);
      ssrRenderList(unref(filteredImages), (img, i) => {
        _push(`<div class="${ssrRenderClass([
          "reveal group relative overflow-hidden cursor-pointer",
          img.wide ? "md:col-span-2" : "",
          img.tall ? "row-span-2" : ""
        ])}"${ssrRenderAttr("data-delay", i * 50)} data-v-03fd2729><div class="${ssrRenderClass(["w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110", img.tall ? "aspect-[4/5]" : "aspect-square"])}" style="${ssrRenderStyle(`background-image: url('${img.src}')`)}" data-v-03fd2729></div><div class="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" data-v-03fd2729><span class="text-cream text-3xl" data-v-03fd2729>+</span></div><div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" data-v-03fd2729><p class="font-body text-xs text-cream/80 font-light" data-v-03fd2729>${ssrInterpolate(img.caption)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(lightboxImg)) {
          _push2(`<div class="fixed inset-0 z-[9998] bg-dark/95 flex items-center justify-center p-4" data-v-03fd2729><button class="absolute top-6 right-6 w-10 h-10 border border-white/30 flex items-center justify-center text-cream hover:border-pizza hover:text-pizza transition-colors" aria-label="Fermer" data-v-03fd2729> ✕ </button><div class="max-w-3xl max-h-[80vh] w-full" data-v-03fd2729><div class="w-full h-[60vh] bg-cover bg-center" style="${ssrRenderStyle(`background-image: url('${unref(lightboxImg).src}')`)}" data-v-03fd2729></div><p class="font-body text-sm text-cream/60 font-light mt-4 text-center" data-v-03fd2729>${ssrInterpolate(unref(lightboxImg).caption)}</p></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<section class="py-16 bg-pizza" data-v-03fd2729><div class="max-w-3xl mx-auto px-6 text-center" data-v-03fd2729><h2 class="font-display text-3xl text-cream font-bold mb-4" data-v-03fd2729>Venez vivre l&#39;expérience !</h2><p class="font-body text-cream/80 font-light mb-6" data-v-03fd2729>Commandez par téléphone ou venez nous rendre visite à Saint-Roman-de-Bellet.</p><a href="tel:+33666868370" class="inline-flex items-center gap-3 border border-cream text-cream px-8 py-4 text-sm tracking-[0.2em] uppercase font-body font-light hover:bg-cream hover:text-pizza transition-all duration-400" data-v-03fd2729> 📞 06 66 86 83 70 </a></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galerie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const galerie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03fd2729"]]);

export { galerie as default };
//# sourceMappingURL=galerie-76G8OHNF.mjs.map
