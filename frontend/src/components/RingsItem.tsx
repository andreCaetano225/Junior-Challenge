
import IRings from "../interfaces/Rings";
import { DesktopCarrosel } from "./Carrossel";

interface RingsItem {
    rings: IRings[]
    loading: boolean
}

export const RingsItem = ({rings, loading}: RingsItem) => {

    return(
    <>
        <div className="flex flex-col items-center justify-center mt-[8rem]">
         <div className=" w-[1000px]">
            <DesktopCarrosel rings={rings} loading={loading}/>
        </div>
        </div>
    </>
    )
}