
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rtl">
            <Logo />
            <p className="mt-4 text-gray-600">
              نقدم دورات لغوية عالية الجودة بأسعار معقولة. نؤمن بأن تعلم لغة جديدة يجب أن يكون متاحًا للجميع.
            </p>
          </div>
          
          <div className="rtl">
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-academy-green">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/languages" className="text-gray-600 hover:text-academy-green">
                  اللغات المتوفرة
                </Link>
              </li>
              <li>
                <Link to="/professors" className="text-gray-600 hover:text-academy-green">
                  الأساتذة
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-academy-green">
                  التسجيل
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="rtl">
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <p className="text-gray-600 mb-4">
              البريد الإلكتروني: info@learnacademy.com
            </p>
            <p className="text-gray-600 mb-4">
              الهاتف: +212 612 345 678
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-academy-green">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-academy-green">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-academy-green">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-academy-green">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center rtl">
          <p className="text-gray-600">
            © {new Date().getFullYear()} أكاديمية اللغات. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
