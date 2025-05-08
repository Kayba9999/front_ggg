
import { languages } from "@/data/languages";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const LanguagesPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 rtl">اللغات المتوفرة</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language) => (
            <Card key={language.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-40 bg-academy-green/10 flex items-center justify-center">
                <span className="text-8xl">{language.flag}</span>
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2 rtl">{language.name}</h2>
                <p className="text-gray-600 mb-4">{language.nativeName}</p>
                <p className="text-gray-700 mb-6 rtl">
                  تعلم {language.name} مع أفضل الأساتذة المتخصصين. دورات لجميع المستويات من المبتدئ إلى المتقدم.
                </p>
                <div className="flex space-x-4 space-x-reverse rtl">
                  <Button 
                    onClick={() => navigate('/register')}
                    className="bg-academy-green hover:bg-opacity-90 flex-1"
                  >
                    سجل الآن
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/whatsapp')}
                    className="border-academy-green text-academy-green hover:bg-academy-green hover:text-white flex-1"
                  >
                    استفسار
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LanguagesPage;
