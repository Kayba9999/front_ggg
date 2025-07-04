import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetchLanguages } from "@/services/api";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguagesList = () => {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();

  const {
    data: languages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["languages"],
    queryFn: fetchLanguages,
  });

  if (isLoading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse h-8 w-64 mx-auto bg-gray-300 rounded mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="shadow-sm w-full max-w-sm">
                <CardContent className="p-6 text-center">
                  <div className="animate-pulse h-16 w-16 mx-auto rounded-full bg-gray-300 mb-4"></div>
                  <div className="animate-pulse h-6 w-32 mx-auto bg-gray-300 rounded mb-2"></div>
                  <div className="animate-pulse h-4 w-24 mx-auto bg-gray-300 rounded mb-4"></div>
                  <div className="animate-pulse h-10 w-full bg-gray-300 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-500 mb-4">{t("error.general")}</p>
          <Button onClick={() => window.location.reload()}>{t("error.retry")}</Button>
        </div>
      </div>
    );
  }

  // Function to get the appropriate landing page route
  const getLanguageLandingPage = (languageName: string) => {
    const lowerName = languageName.toLowerCase();
    if (lowerName.includes('english') || lowerName.includes('إنجليزية')) {
      return '/languages/english';
    } else if (lowerName.includes('spanish') || lowerName.includes('إسبانية')) {
      return '/languages/spanish';
    }
    return '/register'; // Default fallback
  };

  // Function to handle language card click
  const handleLanguageClick = (language: any) => {
    const landingPage = getLanguageLandingPage(language.name);
    navigate(landingPage);
  };

  return (
    <div className="py-16 bg-gray-50" dir={dir}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-academy-green">
          {t("languages.title")}
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {languages?.map((language) => (
            <Card
              key={language.id}
              className="transition-all hover:shadow-lg w-80 cursor-pointer transform hover:scale-105"
              onClick={() => handleLanguageClick(language)}
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4 h-16">
                  <span className="text-6xl leading-none flex items-center justify-center">
                    {language.icon}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                  {dir == "rtl"?language.name:language.slug}
                </h3>
                <div className="flex flex-col gap-2">
                  <Button
                    className="w-full bg-academy-green hover:bg-academy-green/90"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      const landingPage = getLanguageLandingPage(language.name);
                      navigate(landingPage);
                    }}
                  >
                    {t("languages.learnMore")}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-academy-green text-academy-green hover:bg-academy-green hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      navigate("/register");
                    }}
                  >
                    {t("button.register")}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-academy-green text-academy-green hover:bg-academy-green hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      navigate("/whatsapp");
                    }}
                  >
                    {t("button.inquiry")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="bg-academy-green hover:bg-opacity-90 px-8"
            onClick={() => navigate("/register")}
          >
            {t("languages.registerCourse")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguagesList;