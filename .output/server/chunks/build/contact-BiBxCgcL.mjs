import { defineComponent, reactive, ref, resolveDirective, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrGetDirectiveProps } from 'vue/server-renderer';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Contact — Pizzeria Sian D'Acqui",
      description: "Contactez la Pizzeria Sian D'Acqui à Saint-Roman-de-Bellet. Appelez le 06 66 86 83 70 pour commander."
    });
    const contactInfos = [
      {
        icon: "📍",
        label: "Adresse",
        value: "Saint-Roman-de-Bellet<br/>06200 Nice, France"
      },
      {
        icon: "📞",
        label: "Téléphone",
        value: '<a href="tel:+33666868370" class="hover:text-pizza transition-colors duration-300">06 66 86 83 70</a>'
      },
      {
        icon: "🚗",
        label: "Accès",
        value: "Accessible en voiture depuis Nice (20 min). Parking disponible sur place."
      }
    ];
    const hours = [
      { day: "Lundi", time: "Fermé", closed: true },
      { day: "Mardi", time: "11h30 – 14h  &  18h – 22h", closed: false },
      { day: "Mercredi", time: "11h30 – 14h  &  18h – 22h", closed: false },
      { day: "Jeudi", time: "11h30 – 14h  &  18h – 22h", closed: false },
      { day: "Vendredi", time: "11h30 – 14h  &  18h – 22h30", closed: false },
      { day: "Samedi", time: "12h – 14h30  &  18h – 22h30", closed: false },
      { day: "Dimanche", time: "12h – 14h30  &  18h – 22h", closed: false }
    ];
    const form = reactive({
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: ""
    });
    const submitting = ref(false);
    const sent = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_else34 = resolveDirective('else"');
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b28f09a5><section class="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden" data-v-b28f09a5><div class="absolute inset-0" data-v-b28f09a5><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=2000&q=80')" })}" data-v-b28f09a5></div><div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" data-v-b28f09a5></div></div><div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full" data-v-b28f09a5><p class="section-subtitle text-pizza mb-4" data-v-b28f09a5>Nous joindre</p><h1 class="section-title text-cream" data-v-b28f09a5>Contact &amp;<br data-v-b28f09a5><em class="italic" data-v-b28f09a5>informations</em></h1></div></section><section class="py-28" data-v-b28f09a5><div class="max-w-7xl mx-auto px-6 lg:px-12" data-v-b28f09a5><div class="grid lg:grid-cols-2 gap-16 lg:gap-24" data-v-b28f09a5><div class="reveal-left" data-v-b28f09a5><p class="section-subtitle mb-4" data-v-b28f09a5>Nous trouver</p><div class="red-line mb-8" data-v-b28f09a5></div><h2 class="section-title mb-10" data-v-b28f09a5>Toujours à<br data-v-b28f09a5><em class="italic text-warm" data-v-b28f09a5>votre service</em></h2><ul class="space-y-8 mb-12" data-v-b28f09a5><!--[-->`);
      ssrRenderList(contactInfos, (info) => {
        _push(`<li class="flex gap-5" data-v-b28f09a5><div class="w-12 h-12 border border-pizza/30 flex items-center justify-center flex-shrink-0" data-v-b28f09a5><span class="text-pizza text-xl" data-v-b28f09a5>${ssrInterpolate(info.icon)}</span></div><div data-v-b28f09a5><p class="font-body text-xs tracking-[0.25em] uppercase text-pizza font-light mb-1" data-v-b28f09a5>${ssrInterpolate(info.label)}</p><div class="font-body text-sm text-dark/70 font-light leading-relaxed" data-v-b28f09a5>${info.value ?? ""}</div></div></li>`);
      });
      _push(`<!--]--></ul><div class="border border-dark/10 p-8" data-v-b28f09a5><h3 class="font-body text-xs tracking-[0.3em] uppercase text-pizza font-light mb-6" data-v-b28f09a5>Horaires d&#39;ouverture</h3><div class="space-y-3" data-v-b28f09a5><!--[-->`);
      ssrRenderList(hours, (h) => {
        _push(`<div class="flex justify-between" data-v-b28f09a5><span class="font-body text-sm text-dark/60 font-light" data-v-b28f09a5>${ssrInterpolate(h.day)}</span><span class="${ssrRenderClass(["font-body text-sm font-light", h.closed ? "text-pizza" : "text-dark"])}" data-v-b28f09a5>${ssrInterpolate(h.time)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="reveal-right" data-v-b28f09a5><div class="bg-cream-dark p-10 lg:p-12 border-t-4 border-pizza mb-8" data-v-b28f09a5><h3 class="font-display text-2xl text-dark font-bold mb-4" data-v-b28f09a5>Commander par téléphone</h3><p class="font-body font-light text-dark/60 mb-8 leading-relaxed" data-v-b28f09a5> La commande en ligne est en cours de développement. Pour commander vos pizzas, appelez-nous directement — nous sommes ravis de vous aider à choisir ! </p><a href="tel:+33666868370" class="flex items-center gap-4 group" data-v-b28f09a5><div class="w-14 h-14 bg-pizza flex items-center justify-center flex-shrink-0 group-hover:bg-pizza-dark transition-colors duration-300" data-v-b28f09a5><span class="text-cream text-2xl" data-v-b28f09a5>📞</span></div><div data-v-b28f09a5><p class="font-body text-xs tracking-[0.2em] uppercase text-pizza font-light mb-0.5" data-v-b28f09a5>Appeler maintenant</p><p class="font-display text-3xl text-dark font-bold group-hover:text-pizza transition-colors duration-300" data-v-b28f09a5>06 66 86 83 70</p></div></a></div><div class="bg-white p-8 border border-dark/10" data-v-b28f09a5><h3 class="font-display text-xl text-dark font-bold mb-6" data-v-b28f09a5>Envoyer un message</h3>`);
      if (unref(sent)) {
        _push(`<div class="bg-green-50 border border-green-200 p-6 text-center mb-6" data-v-b28f09a5><p class="text-green-700 font-body font-light" data-v-b28f09a5>Merci ! Votre message a bien été envoyé.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(sent)) {
        _push(`<form class="space-y-5" data-v-b28f09a5><div class="grid md:grid-cols-2 gap-5" data-v-b28f09a5><div data-v-b28f09a5><label class="form-label" data-v-b28f09a5>Prénom</label><input${ssrRenderAttr("value", unref(form).firstname)} type="text" required placeholder="Votre prénom" class="form-input" data-v-b28f09a5></div><div data-v-b28f09a5><label class="form-label" data-v-b28f09a5>Nom</label><input${ssrRenderAttr("value", unref(form).lastname)} type="text" required placeholder="Votre nom" class="form-input" data-v-b28f09a5></div></div><div data-v-b28f09a5><label class="form-label" data-v-b28f09a5>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required placeholder="votre@email.com" class="form-input" data-v-b28f09a5></div><div data-v-b28f09a5><label class="form-label" data-v-b28f09a5>Objet</label><select class="form-input bg-white" data-v-b28f09a5><option value="" data-v-b28f09a5${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "") : ssrLooseEqual(unref(form).subject, "")) ? " selected" : ""}>Sélectionnez un objet</option><option data-v-b28f09a5${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>Réservation de table</option><option data-v-b28f09a5${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>Question sur la carte</option><option data-v-b28f09a5${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>Allergies alimentaires</option><option data-v-b28f09a5${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>Événement / Groupe</option><option data-v-b28f09a5${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>Autre</option></select></div><div data-v-b28f09a5><label class="form-label" data-v-b28f09a5>Message</label><textarea rows="5" required placeholder="Votre message..." class="form-input resize-none" data-v-b28f09a5>${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""} class="btn-primary w-full justify-center" data-v-b28f09a5>`);
        if (unref(submitting)) {
          _push(`<span data-v-b28f09a5>Envoi en cours...</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_else34))} data-v-b28f09a5>Envoyer le message</span></button></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section><section class="h-64 bg-dark relative overflow-hidden" data-v-b28f09a5><div class="absolute inset-0 bg-cover bg-center opacity-30" style="${ssrRenderStyle({ "background-image": "url('https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=1800&q=80')" })}" data-v-b28f09a5></div><div class="relative z-10 h-full flex items-center justify-center" data-v-b28f09a5><div class="text-center" data-v-b28f09a5><p class="font-display text-3xl text-pizza font-bold mb-2" data-v-b28f09a5>Saint-Roman-de-Bellet</p><p class="font-body text-xs tracking-[0.3em] text-cream/60 uppercase" data-v-b28f09a5>06200 Nice, France</p><a href="https://maps.google.com/?q=Saint-Roman-de-Bellet+Nice" target="_blank" rel="noopener noreferrer" class="inline-flex mt-4 items-center gap-2 text-xs tracking-[0.2em] uppercase font-body text-pizza hover:text-pizza-light transition-colors" data-v-b28f09a5> Voir sur Google Maps → </a></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b28f09a5"]]);

export { contact as default };
//# sourceMappingURL=contact-BiBxCgcL.mjs.map
