import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Navigation } from 'swiper/modules';
import { CustomContentLoader } from './ContentLoader';
import IRings from '../interfaces/Rings';

interface ProductMobile {
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
      return '#191970'; 
    case 'Sauron':
      return '#FFBF00'; 
    default:
      return '#FFFFFF'; 
  }
};

export const DesktopCarrosel = ({ rings, loading }: ProductMobile) => {
  

  return (
  <div className='flex items-center'>
    <div className="custom-button-prev">
          <FaArrowCircleLeft />
    </div>
      <Swiper
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-button-next',
          prevEl: '.custom-button-prev',
        }}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div >
                  <CustomContentLoader />
                </div>
              </SwiperSlide>
            ))
          : rings?.map((item: IRings) => (
              <SwiperSlide key={item.id}>
              <div className="bg-white p-3 rounded-lg shadow-lg w-[300px] h-[400px] mx-auto my-4 flex flex-col ">
                <span className='text-black w-[100px] rounded-sm text-center mb-2' style={{ backgroundColor: getRingColor(item.forgedBy) }}>{item.forgedBy}</span>
                <img src={`https://lojavondore.com/cdn/shop/files/S66eed968956a4e9aa187ab85875c4fe4O_700x.webp?v=1707145418`} alt="Imagem do Anel" className="w-full h-[200px] object-cover rounded-md mb-4" />
                <span className="text-base font-semibold text-gray-800 mb-2">Nome: {item.name}</span>
                <span className="text-base font-semibold text-gray-800 mb-2">Portador: {item.carrier}</span>
                <span  className="text-md text-gray-600">Poder: {item.power}</span>
              </div>

               
              </SwiperSlide>
            ))}
 
      </Swiper>
   
        <div className=" custom-button-next">
      <FaArrowCircleRight />

        </div>
    </div>
  );
};