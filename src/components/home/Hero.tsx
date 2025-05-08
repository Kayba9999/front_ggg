
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rtl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-academy-green">
              دورات لغوية عالية الجودة بأسعار معقولة
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              نعتقد أن اختيار الدورة المناسبة لا يجب أن يكون أمرًا معقدًا. إذا لم تكن راضيًا عن الدورة التي اخترتها، نقدم لك ضمانًا كاملًا لاسترداد الأموال لمدة 60 يومًا، دون طرح أي أسئلة.
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              ابدأ الآن تعلم لغتك المفضلة في بيئة تعليمية مريحة وبأسعار مناسبة!
            </p>
            <div className="space-x-4 space-x-reverse">
              <Button 
                className="bg-academy-green hover:bg-opacity-90 px-8 py-6 text-lg"
                onClick={() => navigate('/register')}
              >
                سجل الآن
              </Button>
              <Button 
                variant="outline" 
                className="border-academy-green text-academy-green hover:bg-academy-green hover:text-white px-8 py-6 text-lg"
                onClick={() => navigate('/professors')}
              >
                تعرف على أساتذتنا
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/lovable-uploads/448b66da-1bb9-4262-96ff-d30d78dccb59.png" 
              alt="مركز اللغات" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
