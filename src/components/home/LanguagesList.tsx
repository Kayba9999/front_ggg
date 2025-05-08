
import { languages } from "@/data/languages";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LanguagesList = () => {
  const navigate = useNavigate();
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 rtl text-academy-green">
          اللغات المتوفرة
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {languages.map((language) => (
            <Card key={language.id} className="transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">
                  {language.flag}
                </div>
                <h3 className="text-xl font-bold mb-2 rtl">{language.name}</h3>
                <p className="text-gray-500 mb-4">{language.nativeName}</p>
                <Button 
                  variant="outline"
                  className="w-full border-academy-green text-academy-green hover:bg-academy-green hover:text-white"
                  onClick={() => navigate('/register')}
                >
                  سجل الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-academy-green hover:bg-opacity-90 px-8"
            onClick={() => navigate('/register')}
          >
            سجل في إحدى دوراتنا
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguagesList;
