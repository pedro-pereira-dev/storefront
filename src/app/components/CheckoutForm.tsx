"use client";

import { useTranslations } from "../providers/TranslationsProvider";

export function CheckoutForm() {
  const { t } = useTranslations();
  return (
    <section id="checkout" className="mx-auto mt-16 w-full max-w-4xl px-6 pb-24">
      <div className="space-y-10 border border-white/10 bg-black/30 px-10 py-12">
        <header className="text-center">
          <p className="font-display text-2xl uppercase tracking-[0.5em] text-ink-strong">
            {t("checkout.title")}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-ink-muted">
            {t("checkout.description")}
          </p>
        </header>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.35em] text-ink-muted" htmlFor="checkout-name">
              {t("checkout.form.name")}
            </label>
            <input id="checkout-name" name="name" className="border border-white/10 bg-transparent px-4 py-3 text-sm text-ink-strong" required />
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.35em] text-ink-muted" htmlFor="checkout-email">
              {t("checkout.form.email")}
            </label>
            <input id="checkout-email" name="email" type="email" className="border border-white/10 bg-transparent px-4 py-3 text-sm text-ink-strong" required />
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.35em] text-ink-muted" htmlFor="checkout-address">
              {t("checkout.form.address")}
            </label>
            <input id="checkout-address" name="address" className="border border-white/10 bg-transparent px-4 py-3 text-sm text-ink-strong" required />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.35em] text-ink-muted" htmlFor="checkout-city">
                {t("checkout.form.city")}
              </label>
              <input id="checkout-city" name="city" className="border border-white/10 bg-transparent px-4 py-3 text-sm text-ink-strong" required />
            </div>
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.35em] text-ink-muted" htmlFor="checkout-country">
                {t("checkout.form.country")}
              </label>
              <input id="checkout-country" name="country" className="border border-white/10 bg-transparent px-4 py-3 text-sm text-ink-strong" required />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.35em] text-ink-muted" htmlFor="checkout-delivery">
              {t("checkout.form.delivery")}
            </label>
            <input id="checkout-delivery" name="delivery" className="border border-white/10 bg-transparent px-4 py-3 text-sm text-ink-strong" />
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.35em] text-ink-muted" htmlFor="checkout-payment">
              {t("checkout.form.payment")}
            </label>
            <select id="checkout-payment" name="payment" className="border border-white/10 bg-transparent px-4 py-3 text-sm text-ink-strong">
              <option className="bg-black" value="wire">
                {t("checkout.form.payment.wire")}
              </option>
              <option className="bg-black" value="card">
                {t("checkout.form.payment.card")}
              </option>
              <option className="bg-black" value="crypto">
                {t("checkout.form.payment.crypto")}
              </option>
            </select>
          </div>
          <button type="submit" className="mt-6 border border-white/20 px-8 py-3 text-xs uppercase tracking-[0.4em] text-ink-strong">
            {t("checkout.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
