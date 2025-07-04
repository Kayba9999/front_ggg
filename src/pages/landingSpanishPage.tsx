import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Users,
  Clock,
  Gift,
  MessageCircle,
  Star,
  Globe,
  Briefcase,
  GraduationCap,
  Phone,
  Languages,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

export default function SpanishLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t, setLanguage } = useLanguage();

  // Set language to Spanish when component mounts
  useEffect(() => {
    setLanguage('es');
  }, [setLanguage]);

  const testimonials = [
    {
      name: "Carlos M.",
      text: t("testimonials.spanish.carlos") || "¡Conseguí el trabajo de mis sueños después de solo 3 meses con Learn Academy!",
      rating: 5,
    },
    {
      name: "Fatima R.",
      text: t("testimonials.spanish.fatima") || "Finalmente tengo confianza hablando español en reuniones. ¡Profesores increíbles!",
      rating: 5,
    },
    {
      name: "John D.",
      text: t("testimonials.spanish.john") || "El horario flexible se adapta perfectamente a mi vida ocupada. ¡Lo recomiendo mucho!",
      rating: 5,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "212664685824";
    const message = t("whatsapp.spanish.message") || "¡Hola! Estoy interesado en comenzar mi clase gratuita de español con Learn Academy. ¿Pueden ayudarme a empezar?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center space-x-2 rounded-full px-6 py-2 mb-6 bg-gradient-to-r from-yellow-50 to-red-50">
              <span className="text-2xl">🇪🇸</span>
              <span className="text-sm font-medium text-gray-700">
                {t("hero.badge.spanish") || "Aprender Español Hecho Simple"}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t("hero.title.spanish") || "Habla Español con Confianza"}
            </h1>

            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              {t("hero.subtitle.spanish") || "Desde tu primera clase"}
            </p>

            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="text-2xl">💬</span>
              <span className="text-2xl">✨</span>
            </div>

            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              {t("hero.description.spanish") || "En Learn Academy, te ayudamos a hablar español en conversaciones reales, no solo memorizar gramática."}
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="group text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600"
            >
              {t("hero.cta.spanish") || "Comenzar Mi Clase Gratuita"}
              <ChevronRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-red-200 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 rounded-full bg-red-300 opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t("features.title.spanish") || "Lo que obtienes:"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="group p-6 rounded-2xl border border-red-200 bg-gradient-to-b from-white to-yellow-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-red-400">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-red-600 to-red-500">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("features.teachers.spanish") || "Clases en vivo con profesores certificados de habla hispana"}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("features.teachers.description.spanish") || "Aprende de hablantes nativos experimentados"}
              </p>
            </div>
            <div className="group p-6 rounded-2xl border border-red-200 bg-gradient-to-b from-white to-yellow-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-red-400">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-red-600 to-red-500">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("features.method.spanish") || "Método práctico enfocado en hablar y escuchar"}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("features.method.description.spanish") || "Conversaciones reales, no solo ejercicios de gramática"}
              </p>
            </div>
            <div className="group p-6 rounded-2xl border border-red-200 bg-gradient-to-b from-white to-yellow-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-red-400">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-red-600 to-red-500">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("features.schedules.spanish") || "Horario flexible – aprende cuando quieras, donde quieras"}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("features.schedule.description.spanish") || "Adapta el aprendizaje a tu estilo de vida ocupado"}
              </p>
            </div>
            <div className="group p-6 rounded-2xl border border-red-200 bg-gradient-to-b from-white to-yellow-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-red-400">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-red-600 to-red-500">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("features.trial.spanish") || "¡Primera clase GRATIS – sin compromiso!"}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("features.trial.description.spanish") || "Prueba antes de comprometerte con algo"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("why.title.spanish") || "¿Por qué elegir Learn Academy?"}
            </h2>
            <p className="text-xl text-gray-600">
              {t("why.subtitle.spanish") || "Porque mereces:"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 bg-gradient-to-r from-red-600 to-red-500">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("why.interviews.spanish") || "Tener confianza en entrevistas y reuniones"}
              </h3>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 bg-gradient-to-r from-red-600 to-red-500">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("why.travel.spanish") || "Viajar y hablar sin miedo"}
              </h3>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 bg-gradient-to-r from-red-600 to-red-500">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("why.opportunities.spanish") || "Estudiar y hacer crecer tus oportunidades"}
              </h3>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-medium text-gray-800 mb-8">
              {t("why.speak.spanish") || "Y finalmente hablar español, no solo estudiarlo"}
            </p>
            <div className="text-2xl mb-6">🚀</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("testimonials.title.spanish") || "Miles de estudiantes ya confían en Learn Academy"}
          </h2>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="font-semibold text-gray-900">
                - {testimonials[currentTestimonial].name}
              </p>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t("cta.title.spanish") || "Comienza tu viaje ahora"}
          </h2>
          <p className="text-xl mb-8 text-red-100">
            {t("cta.subtitle.spanish") || "Únete hoy y obtén tu clase de prueba gratuita."}
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-yellow-100 text-red-700 hover:bg-yellow-200"
          >
            👉 {t("hero.cta.spanish") || "Comenzar Mi Clase Gratuita"}
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}