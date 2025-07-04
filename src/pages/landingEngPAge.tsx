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

export default function EnglishLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t, setLanguage } = useLanguage();

  // Set language to English when component mounts
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const testimonials = [
    {
      name: "Maria S.",
      text: t("testimonials.english.maria") || "I got my dream job after just 3 months with Learn Academy!",
      rating: 5,
    },
    {
      name: "Ahmed K.",
      text: t("testimonials.english.ahmed") || "Finally confident speaking English in meetings. Amazing teachers!",
      rating: 5,
    },
    {
      name: "Li Wei",
      text: t("testimonials.english.li") || "The flexible schedule fits perfectly with my busy life. Highly recommend!",
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
    const message = t("whatsapp.english.message") || "Hi! I'm interested in starting my free English class with Learn Academy. Can you help me get started?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
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
            <div className="inline-flex items-center space-x-2 rounded-full px-6 py-2 mb-6 bg-gradient-to-r from-yellow-50 to-green-50">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-sm font-medium text-gray-700">
                {t("hero.badge") || "English Learning Made Simple"}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t("hero.titlet") || "Speak English with Confidence"}
            </h1>

            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              {t("hero.subtitle") || "Starting from your very first class"}
            </p>

            <div className="flex items-center justify-center space-x-2 mb-8">
              <span className="text-2xl">💬</span>
              <span className="text-2xl">✨</span>
            </div>

            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              {t("hero.description") || "At Learn Academy, we help you speak English in real conversations, not just memorize grammar."}
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="group text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
            >
              {t("hero.cta") || "Start My Free Class"}
              <ChevronRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-green-200 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-16 h-16 rounded-full bg-green-300 opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t("features.title") || "What you get:"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="group p-6 rounded-2xl border border-green-200 bg-gradient-to-b from-white to-yellow-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-green-400">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-green-600 to-green-500">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("features.teachers") || "Live lessons with certified English-speaking teachers"}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("features.teachers.description") || "Learn from experienced native speakers"}
              </p>
            </div>
            <div className="group p-6 rounded-2xl border border-green-200 bg-gradient-to-b from-white to-yellow-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-green-400">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-green-600 to-green-500">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("features.method") || "Practical method focused on speaking & listening"}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("features.method.description") || "Real conversations, not just grammar drills"}
              </p>
            </div>
            <div className="group p-6 rounded-2xl border border-green-200 bg-gradient-to-b from-white to-yellow-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-green-400">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-green-600 to-green-500">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("features.schedules") || "Flexible schedule – learn anytime, anywhere"}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("features.schedule.description") || "Fit learning into your busy lifestyle"}
              </p>
            </div>
            <div className="group p-6 rounded-2xl border border-green-200 bg-gradient-to-b from-white to-yellow-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-green-400">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-green-600 to-green-500">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t("features.trial") || "First class FREE – no commitment!"}
              </h3>
              <p className="text-gray-600 text-sm">
                {t("features.trial.description") || "Try before you commit to anything"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("why.title") || "Why choose Learn Academy?"}
            </h2>
            <p className="text-xl text-gray-600">
              {t("why.subtitle") || "Because you deserve to:"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 bg-gradient-to-r from-green-600 to-green-500">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("why.interviews") || "Be confident in interviews and meetings"}
              </h3>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 bg-gradient-to-r from-green-600 to-green-500">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("why.travel") || "Travel and speak without fear"}
              </h3>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6 bg-gradient-to-r from-green-600 to-green-500">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t("why.opportunities") || "Study and grow your opportunities"}
              </h3>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-medium text-gray-800 mb-8">
              {t("why.speak") || "And finally speak English, not just study it"}
            </p>
            <div className="text-2xl mb-6">🚀</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("testimonials.titlet") || "Thousands of learners already trust Learn Academy"}
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t("cta.title") || "Start your journey now"}
          </h2>
          <p className="text-xl mb-8 text-green-100">
            {t("cta.subtitle") || "Join today and get your free trial class."}
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-yellow-100 text-green-700 hover:bg-yellow-200"
          >
            👉 {t("hero.cta") || "Start My Free Class"}
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}