
import { professors } from "@/data/professors";
import ProfessorCard from "@/components/professors/ProfessorCard";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const ProfessorsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 rtl">أساتذتنا</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professors.map((professor) => (
            <ProfessorCard key={professor.id} professor={professor} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfessorsPage;
