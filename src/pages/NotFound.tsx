
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div>
      <NavBar />
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-academy-green mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8 rtl">عذراً، الصفحة غير موجودة</p>
          <Button 
            onClick={() => navigate('/')}
            className="bg-academy-green hover:bg-opacity-90 px-8"
          >
            العودة إلى الصفحة الرئيسية
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
