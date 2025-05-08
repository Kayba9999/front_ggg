
import { useParams, useNavigate } from "react-router-dom";
import { professors } from "@/data/professors";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, SendIcon } from "lucide-react";

const ProfessorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const professor = professors.find(prof => prof.id === id);
  
  if (!professor) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">الأستاذ غير موجود</h2>
        <Button onClick={() => navigate('/professors')}>
          العودة إلى قائمة الأساتذة
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/professors')}
        className="mb-6 rtl flex gap-2"
      >
        <ArrowRight size={16} />
        العودة إلى قائمة الأساتذة
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={professor.image} 
            alt={professor.name} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <Card>
          <CardContent className="p-6 rtl">
            <h1 className="text-3xl font-bold mb-2">{professor.name}</h1>
            <p className="text-xl text-academy-green mb-4">{professor.title}</p>
            
            <div className="border-t border-b py-4 my-4">
              <p className="text-gray-700 leading-relaxed">
                {professor.description}
              </p>
            </div>
            
            <div className="flex flex-col space-y-4 mt-6">
              <Button 
                onClick={() => navigate('/register')}
                className="w-full bg-academy-green hover:bg-opacity-90"
              >
                التسجيل للدورة
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate('/whatsapp')}
                className="w-full border-academy-green text-academy-green hover:bg-academy-green hover:text-white flex gap-2"
              >
                <SendIcon size={16} />
                تواصل مع الأستاذ عبر الواتساب
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfessorDetail;
