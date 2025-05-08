
import RegistrationForm from "@/components/registration/RegistrationForm";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const RegistrationPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-6 rtl">التسجيل في الدورات</h1>
        <p className="text-center text-gray-600 mb-12 rtl max-w-2xl mx-auto">
          املأ النموذج أدناه للتسجيل في إحدى دوراتنا اللغوية. سيتواصل معك فريقنا في أقرب وقت ممكن لتأكيد التسجيل وترتيب مواعيد الدروس.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <RegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
