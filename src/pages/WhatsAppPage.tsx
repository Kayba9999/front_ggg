
import WhatsAppForm from "@/components/whatsapp/WhatsAppForm";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const WhatsAppPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-6 rtl">تواصل معنا عبر واتساب</h1>
        <p className="text-center text-gray-600 mb-12 rtl max-w-2xl mx-auto">
          يمكنك التواصل معنا بسهولة عبر واتساب للاستفسار عن الدورات اللغوية أو للتسجيل في دورة معينة.
        </p>
        
        <div className="flex justify-center">
          <WhatsAppForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhatsAppPage;
