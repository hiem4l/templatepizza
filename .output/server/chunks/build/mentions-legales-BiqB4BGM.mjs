import { _ as __nuxt_component_0 } from './nuxt-link-BxIgUeNy.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-BRnNc4ym.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mentions-legales",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Mentions légales — Pizzeria Sian D'Acqui",
      description: "Mentions légales de la Pizzeria Sian D'Acqui."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-28" }, _attrs))}><div class="max-w-4xl mx-auto px-6 lg:px-12"><p class="section-subtitle mb-4">Informations légales</p><div class="red-line mb-8"></div><h1 class="font-display text-5xl text-dark font-bold mb-12">Mentions légales</h1><div class="space-y-10 font-body font-light text-dark/70 leading-relaxed"><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Éditeur du site</h2><p>Pizzeria Sian D&#39;Acqui<br> Saint-Roman-de-Bellet<br> 06200 Nice, France<br> Téléphone : <a href="tel:+33666868370" class="text-pizza hover:underline">06 66 86 83 70</a></p></section><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Hébergement</h2><p>Ce site est hébergé par Netlify, Inc.<br> 44 Montgomery Street, Suite 300<br> San Francisco, California 94104, USA</p></section><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Propriété intellectuelle</h2><p>L&#39;ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de la Pizzeria Sian D&#39;Acqui ou de ses partenaires. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.</p></section><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Responsabilité</h2><p>La Pizzeria Sian D&#39;Acqui s&#39;efforce de maintenir les informations de ce site à jour et exactes. Cependant, elle ne peut garantir l&#39;exactitude, la complétude ou l&#39;actualité des informations diffusées sur ce site.</p></section><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Données personnelles</h2><p>Pour toute information concernant la collecte et le traitement de vos données personnelles, veuillez consulter notre `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/confidentialite",
        class: "text-pizza hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`politique de confidentialité`);
          } else {
            return [
              createTextVNode("politique de confidentialité")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`.</p></section></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mentions-legales.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mentions-legales-BiqB4BGM.mjs.map
