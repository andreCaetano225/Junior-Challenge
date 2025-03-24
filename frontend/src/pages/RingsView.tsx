import { useEffect, useState } from "react";
import { RingsItem } from "../components/RingsItem";
import IRings from "../interfaces/Rings";
import { getRings } from "../hooks/useRings";
import { MdOutlineBackspace, MdAddCircle  } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const RingsView = () => {

    const [rings, setRings] = useState<IRings[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(false);

     const navigate = useNavigate();

    const fetchRings = async () => {
        try {
        setLoading(true); 

        setTimeout(async () => {
            try {
            const response = await getRings();
            setRings(response); 
            setLoading(false); 
        } catch (error) {
            console.error('Erro ao buscar os anéis:', error);
            setLoading(false); 
            }
          }, 2000); 
        } catch (error) {
          console.error('Erro inesperado:', error);
          setLoading(false);
        }
  };

  const handleBackHomePage = () => {
    navigate("/");
  };

  const handleCreateRing = () => {
    navigate("/create");
  };

      useEffect(() => {
        setIsMobile(window.innerWidth <= 768);

        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        fetchRings()

        return () => window.removeEventListener('resize', handleResize);
      }, []);

      return(
        <>
         <section>
          <div className="flex items-center justify-center">
                <span className="text-white font-bold mt-[4rem] text-3xl md:text-2xl xl:text-5xl 2xl:text-5xl lg:text-5xl">Os Anéis de Poder</span>
            </div>
          <div>
        <div className="flex justify-between mt-[5rem]">
          <button
          onClick={() => handleBackHomePage()}
            className=" flex  items-center justify-center gap-2 w-[120px] bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition"
          >
            <MdOutlineBackspace/>
            Voltar
          </button>
             <button
             onClick={() => handleCreateRing()}
            className="flex  items-center justify-center gap-2  w-[140px] bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition"
          >
            Criar Anel
            <MdAddCircle/>
          </button>
          </div>
           
            </div>
              <RingsItem rings={rings} loading={loading} isMobile={isMobile}/>
        </section>

        </>
      )

     
}

export default RingsView