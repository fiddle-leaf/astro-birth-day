import AstroForm from "./AstroForm";
import AstroView from "./AstroView";
import { useSelector } from "react-redux";
import {
    setInfo,
    selectData,
    selectStatus,
    locationAsync,
    moonAsync
} from '../info/infoSlice';

export default function AstroInfo () {
    const info = useSelector(selectData);
    const status = useSelector(selectStatus);

    console.log(status);
    
    return ( 
        <main className="astro-page">
            <AstroForm info={info} setInfo={setInfo} location={locationAsync} moon={moonAsync}/>
            <AstroView info={info} />
        </main>
     );
}

