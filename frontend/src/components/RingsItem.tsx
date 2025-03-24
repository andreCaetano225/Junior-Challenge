
import IRings from "../interfaces/Rings";
import { RingsMobile } from "./CarroselMobile";
import { DesktopCarrosel } from "./Carrossel";

interface RingsItem {
    rings: IRings[]
    loading: boolean
    isMobile: boolean
}

export const RingsItem = ({rings, loading, isMobile}: RingsItem) => {

    return(
    <>
        <div className="flex flex-col items-center justify-center mt-[4rem]">
         <div className=" w-[400px] md:w-[600px] xl:w-[1000px] 2xl:w-[1000px] lg:w-[1000px]">
            {isMobile ? (
            <RingsMobile rings={rings} loading={loading}/>
            ) : (
            <DesktopCarrosel rings={rings} loading={loading}/>
            )}
        </div>
        </div>
    </>
    )
}