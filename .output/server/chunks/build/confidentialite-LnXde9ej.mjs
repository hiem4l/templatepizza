import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useSeoMeta } from './composables-BRnNc4ym.mjs';
import './server.mjs';
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
  __name: "confidentialite",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Confidentialité — Pizzeria Sian D'Acqui",
      description: "Politique de confidentialité et protection des données de la Pizzeria Sian D'Acqui."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-28" }, _attrs))}><div class="max-w-4xl mx-auto px-6 lg:px-12"><p class="section-subtitle mb-4">Vos données</p><div class="red-line mb-8"></div><h1 class="font-display text-5xl text-dark font-bold mb-12">Politique de confidentialité</h1><div class="space-y-10 font-body font-light text-dark/70 leading-relaxed"><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Collecte des données</h2><p>La Pizzeria Sian D&#39;Acqui collecte uniquement les données que vous nous transmettez volontairement via notre formulaire de contact (nom, prénom, adresse email, message). Ces données sont utilisées exclusivement pour répondre à vos demandes.</p></section><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Cookies</h2><p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Nous n&#39;utilisons pas de cookies de suivi ou publicitaires tiers. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être disponibles.</p></section><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Droit d&#39;accès et de rectification</h2><p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&#39;un droit d&#39;accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous par téléphone au <a href="tel:+33666868370" class="text-pizza hover:underline">06 66 86 83 70</a>.</p></section><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Conservation des données</h2><p>Les données collectées via le formulaire de contact sont conservées pour une durée maximale de 3 ans à compter de votre dernière interaction avec nous.</p></section><section><h2 class="font-display text-2xl text-dark font-bold mb-4">Contact</h2><p>Pour toute question relative à notre politique de confidentialité, contactez-nous :<br> Pizzeria Sian D&#39;Acqui — Saint-Roman-de-Bellet, 06200 Nice<br> Téléphone : <a href="tel:+33666868370" class="text-pizza hover:underline">06 66 86 83 70</a></p></section></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confidentialite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=confidentialite-LnXde9ej.mjs.map
