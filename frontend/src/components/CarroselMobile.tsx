import { Swiper, SwiperSlide } from 'swiper/react';
import { MdDelete, MdEdit } from "react-icons/md";
import {  Pagination } from 'swiper/modules';
import { CustomContentLoader } from './ContentLoader';
import IRings from '../interfaces/Rings';
import { useNavigate } from "react-router-dom"
import { DeleteConfirmationDialog } from './DeleteConfirmationDialog';
import { useState } from 'react';

interface RingsDesktop {
  rings: IRings[];
  loading: boolean;
}
const getRingColor = (forgedBy: string): string => {
  switch (forgedBy) {
    case 'Elfos':
      return '#50C878';
    case 'Anões':
      return '#CD7F32';
    case 'Homens':
      return '#4343bb'; 
    case 'Sauron':
      return '#FFBF00'; 
    default:
      return '#FFFFFF'; 
  }
};

export const RingsMobile = ({ rings, loading }: RingsDesktop) => {
    const navigate = useNavigate();
    const  [titleDialogName, setTitleDialogName] = useState<string>('')
    const  [idDeleteRing, setIdDeleteRing] = useState<number>(0)
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)    

     const handleEditRing = (id: number) => {
    navigate(`/edit/${id}`)
  }

    const handleDeleteRing = (id: number, titleDialog: string, ) => {
    setTitleDialogName(titleDialog)
    setIdDeleteRing(id)
    setIsOpenModal(() => !isOpenModal)
  }

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={260}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        speed={2000}
      >
        {loading
            ? Array.from({ length: 2 }).map((_, index) => (
                 <SwiperSlide key={index}>
                <div className="featuredProduct__item">
                < CustomContentLoader />
                </div>
              </SwiperSlide>
            ))
            : rings.map((item: IRings) => (
                <SwiperSlide key={item.id}>
                <div className="bg-white p-3 rounded-lg shadow-lg w-[300px] h-[400px] mx-auto my-4 flex flex-col ">
                    <div className='flex items-center justify-between'>
                    <span className='text-black w-[100px] rounded-sm text-center mb-2' style={{ backgroundColor: getRingColor(item.forgedBy) }}>{item.forgedBy}</span>

                        <div className='flex items-center gap-2'>
                        <MdEdit size={20} className='text-black cursor-pointer'onClick={() => handleEditRing(item.id || 0)}/>
                        <MdDelete size={20} className='text-red-600 cursor-pointer' onClick={() => handleDeleteRing(item.id || 0 , item.name)}/>
                        </div>
                    </div>
                    <img src={`https://lojavondore.com/cdn/shop/files/S66eed968956a4e9aa187ab85875c4fe4O_700x.webp?v=1707145418`} alt="Imagem do Anel" className="w-full h-[200px] object-cover rounded-md mb-4" />
                    <span className="text-base font-semibold text-gray-800 mb-2">Nome: {item.name}</span>
                    <span className="text-base font-semibold text-gray-800 mb-2">Portador: {item.carrier}</span>
                    <span  className="text-md text-gray-600">Poder: {item.power}</span>
                    </div>
              </SwiperSlide>
            ))}
      </Swiper>
       <DeleteConfirmationDialog 
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        ringName={titleDialogName}
        ringId={idDeleteRing}
        /> 
    </>
  );
};