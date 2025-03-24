import { useEffect, useState } from "react";
import { RingsItem } from "../components/RingsItem";
import IRings from "../interfaces/Rings";
import { getRings } from "../hooks/useRings";
const RingsView = () => {

    const [rings, setRings] = useState<IRings[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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

      useEffect(() => {
        fetchRings()
      }, []);

      return(
        <>
         <section>
              <div className="flex items-center justify-center">
                <h1 className="text-white font-bold mt-[7rem]">Os Anéis de Poder</h1>
              </div>
              <RingsItem rings={rings} loading={loading}/>
        </section>

        </>
      )

     
}

export default RingsView