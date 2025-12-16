"use client";

import { useMemo, useState } from "react";
import BtnContact from "../Contact/BtnContact";
import { useI18n } from "@/i18n/I18nProvider";
import { apiConfig, apiFetch } from "@/lib/api";

export default function Contact() {
  const { t } = useI18n();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const phoneRegex = /^(?:\+7|8)\d{10}$/;

  const normalizedPhone = useMemo(() => phone.replace(/\s+/g, ""), [phone]);
  const isPhoneValid = useMemo(
    () => phoneRegex.test(normalizedPhone),
    [normalizedPhone]
  );

  const isFormValid = useMemo(
    () =>
      name.trim().length > 0 &&
      isPhoneValid &&
      telegram.trim().length > 0 &&
      agree,
    [name, isPhoneValid, telegram, agree]
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await apiFetch(apiConfig.endpoints.order.create, {
        method: "POST",
        body: JSON.stringify({
          name: name.trim(),
          phone: normalizedPhone,
          username: telegram.trim(),
        }),
      });

      setSubmitStatus("success");
      // Очистка формы после успешной отправки
      setName("");
      setPhone("");
      setTelegram("");
      setAgree(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="form"
      className="flex w-full flex-col justify-between pt-[3%] px-[15vw] mt-[253px]"
      aria-labelledby="free-trial-title"
    >
      <h2
        id="free-trial-title"
        className="text-[#502E12] font-inter text-[40px] font-semibold leading-none"
      >
        {t("contact.titleLine1")}
        <br />
        {t("contact.titleLine2")}
      </h2>

      <form
        onSubmit={onSubmit}
        className="mt-6 flex flex-col gap-0 max-w-[805px]"
      >
        <label className="sr-only" htmlFor="name">
          {t("contact.labels.name")}
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder={t("contact.placeholders.name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-[16px] bg-white px-6 py-4 text-[16px] font-medium text-[#502E12] outline-none"
        />

        <label className="sr-only" htmlFor="phone">
          {t("contact.labels.phone")}
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          required
          placeholder={t("contact.placeholders.phone")}
          pattern="^(?:\+7|8)\d{10}$"
          title={t("contact.phoneTitle")}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-[15px] w-full rounded-[16px] bg-white px-6 py-4 text-[16px] font-medium text-[#502E12] outline-none"
          aria-invalid={!isPhoneValid}
        />
        {!isPhoneValid && phone.length > 0 && (
          <p className="mt-2 text-[14px] text-red-600">
            {t("contact.phoneError")}
          </p>
        )}

        <label className="sr-only" htmlFor="telegram">
          {t("contact.labels.telegram")}
        </label>
        <input
          id="telegram"
          type="text"
          required
          placeholder={t("contact.placeholders.telegram")}
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          className="mt-[15px] w-full rounded-[16px] bg-white px-6 py-4 text-[16px] font-medium text-[#502E12] outline-none"
        />

        <div className="mt-[30px] flex items-start">
          <input
            id="agreement"
            required
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="h-5 w-5 rounded-[6px] border-2 border-[#E2E8F0] bg-white transition-all [accent-color:#502E12] cursor-pointer"
          />
          <label
            htmlFor="agreement"
            className="ml-3 mt-[2px] text-[16px] font-medium text-[#AC8769] font-inter"
          >
            {t("contact.agreementText")}
          </label>
        </div>

        {submitStatus === "success" && (
          <div className="mt-4 p-4 rounded-[16px] bg-green-50 text-green-700 text-[16px]">
            {t("Ваша заявка отправлена")}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-4 p-4 rounded-[16px] bg-red-50 text-red-700 text-[16px]">
            {t("Ошибка при отправке")}
          </div>
        )}

        <div className="mt-[37px]">
          <BtnContact
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full disabled:opacity-50 disabled:pointer-events-none"
          />
        </div>
      </form>
    </section>
  );
}
