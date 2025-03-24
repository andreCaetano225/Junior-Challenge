import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleViewRings = () => {
    navigate("/view");
  };

  const handleCreateRing = () => {
    navigate("/create");
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-6xl">
        <div
          className="flex items-center justify-center bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={handleViewRings}
        >
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-black mb-4">Ver Anéis</h2>
            <p className="text-gray-700 text-lg">Explore todos os anéis disponíveis no mundo.</p>
          </div>
        </div>

        <div
          className="flex items-center justify-center bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={handleCreateRing}
        >
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-black mb-4">Criar Anel</h2>
            <p className="text-gray-700 text-lg">Crie um novo anel e adicione ao seu reino.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
