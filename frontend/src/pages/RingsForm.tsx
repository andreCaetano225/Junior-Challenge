import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate, useParams } from "react-router-dom"; 
import { getRingById, saveRing } from "../hooks/useRings";
import FormInput from "../components/FormInput";
import IRings from "../interfaces/Rings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {  MdOutlineBackspace } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const ringSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  forgedBy: z.string().min(2, "Criador inválido"),
  carrier: z.string().min(3, "Selecione um portador válido"),  
  power: z.string().min(3, "Poder inválido"),
  imagem: z.string().default("https://lojavondore.com/cdn/shop/files/S66eed968956a4e9aa187ab85875c4fe4O_700x.webp?v=1707145418"),
});

export const RingsForm = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate(); 
  const methods = useForm<IRings>({
    resolver: zodResolver(ringSchema),
    defaultValues: {
      name: "",
      forgedBy: "",
      carrier: "", 
      power: "",
      imagem: "https://lojavondore.com/cdn/shop/files/S66eed968956a4e9aa187ab85875c4fe4O_700x.webp?v=1707145418",
    },
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (id) {
      getRingById(Number(id)).then((data) => {
        reset(data);
      });
    }
  }, [id, reset]);

  
  const handleBackHomePage = () => {
    navigate("/");
  };

  const handleViewRing = () => {
    navigate("/view");
  };

  const onSubmit = async (data: IRings) => {
    try {
      await saveRing({ ...data, id: id ? Number(id) : undefined });

      toast.success("Anel criado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/view");
      }, 1000);

      
    } catch (error: unknown) {
      let msgError = "Erro inesperado ao criar o anel.";

      if (axios.isAxiosError(error)) {
        msgError = error.response?.data?.message || msgError;

        toast.error(msgError, {
          position: "top-right",
          autoClose: 3000,
        });
      } else if (error instanceof Error) {
        msgError = error.message;
        toast.error(msgError, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  return (
        <>
         <div className="flex justify-between mt-[5rem]">
            <button
            onClick={() => handleBackHomePage()}
              className=" flex  items-center justify-center gap-2 w-[120px] bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition"
            >
              <MdOutlineBackspace/>
              Voltar
            </button>
                <button
                onClick={() => handleViewRing()}
              className="flex  items-center justify-center gap-2  w-[140px] bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition"
            >
              Ver Aneis
              <FaEye/>
            </button>
        </div>
          <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-10 w-[400px] sm:w-[500px]">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              {id ? "Editar Anel" : "Criar Anel"}
            </h2>
            <FormProvider {...methods}>
              <ToastContainer />
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput label="Nome" name="name" />
                <FormInput label="Portador" name="carrier" options={["Elfos", "Anões", "Homens", "Sauron"]} />
                <FormInput label="Poder" name="power" />
                <FormInput label="Criado por" name="forgedBy" />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition"
                >
                  {id ? "Atualizar" : "Criar"}
                </button>
              </form>
            </FormProvider>
          </div>
        </>
   
  );
};
