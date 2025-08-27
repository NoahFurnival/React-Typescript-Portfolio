import { useRef, useState } from "react";
import { subHeaderVariant, headerVariant } from "@/shared/headerAnimations";
import { motion, useInView } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.scss";
import { SelectedPage } from "@/shared/types";

type Values = {
  name: string;
  email: string;
  message: string;
  token?: string | null;
};

type Errors = Partial<Record<keyof Values, string>>;

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const hasCaptcha = Boolean(SITE_KEY);

const initialValues: Values = { name: "", email: "", message: "", token: null };

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
export default function Contact({ setSelectedPage }: Props) {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validate = (v: Values): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    else if (v.name.trim().length < 2) e.name = "Name looks too short.";

    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!emailOk(v.email.trim())) e.email = "Enter a valid email.";

    if (!v.message.trim()) e.message = "Please write a message.";
    else if (v.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";

    if (hasCaptcha && !v.token) e.token = "Please complete the reCAPTCHA.";
    return e;
  };

  const onChange =
    (field: keyof Values) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((s) => ({ ...s, [field]: ev.target.value }));
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    };

  const onCaptcha = (token: string | null) => {
    setValues((s) => ({ ...s, token }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.token;
      return copy;
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const e1 = validate(values);
    setErrors(e1);
    if (Object.keys(e1).length) return;

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
      token: values.token ?? "",
    };

    await toast.promise(
      (async () => {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data?.message || "Something went wrong.");
        }

        setValues(initialValues);
        recaptchaRef.current?.reset();
        return true;
      })(),
      {
        loading: "Sending your message…",
        success: "Sent! I’ll get back to you soon ✅",
        error: (err) => err.message || "Failed to send. Please try again.",
      },
    );
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={sectionRef}>
      <motion.div
        className="contact"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0b0f1a",
              color: "#c9d1d9",
              border: "1px solid rgba(255,255,255,0.08)",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#0b0f1a",
              },
            },
            loading: {},
          }}
        />

        <div className="contact__wrap">
          <div className="contact__title">
            <motion.h4
              variants={subHeaderVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Reach Out To Me
            </motion.h4>

            <motion.h3
              variants={headerVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Contact
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
            viewport={{ once: true }}
            className="contact__card"
          >
            <form onSubmit={onSubmit} noValidate>
              <div className="contact__row">
                <div>
                  <div
                    className={`contact__field ${errors.name ? "has-error" : ""}`}
                  >
                    <span className="contact__icon">
                      <FaUser size={24} />
                    </span>
                    <input
                      className="contact__input"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={values.name}
                      onChange={onChange("name")}
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && (
                    <div className="contact__error">{errors.name}</div>
                  )}
                </div>

                <div>
                  <div
                    className={`contact__field ${errors.email ? "has-error" : ""}`}
                  >
                    <span className="contact__icon">
                      <FaEnvelope size={24} />
                    </span>
                    <input
                      className="contact__input"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={onChange("email")}
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && (
                    <div className="contact__error">{errors.email}</div>
                  )}
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <div
                  className={`contact__field contact__field--textarea ${errors.message ? "has-error" : ""}`}
                >
                  <span className="contact__icon" style={{ marginTop: 4 }}>
                    <FaRegCommentDots size={24} />
                  </span>
                  <textarea
                    className="contact__textarea"
                    name="message"
                    placeholder="Tell me a bit about your project…"
                    rows={5}
                    value={values.message}
                    onChange={onChange("message")}
                  />
                </div>
                {errors.message && (
                  <div className="contact__error">{errors.message}</div>
                )}
              </div>

              {hasCaptcha && (
                <div className="contact__captcha">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={SITE_KEY}
                    onChange={onCaptcha}
                  />
                </div>
              )}
              {errors.token && (
                <div className="contact__error">{errors.token}</div>
              )}

              <div className="contact__actions">
                <button type="submit" className="contact__btn">
                  <FaPaperPlane /> Send message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
