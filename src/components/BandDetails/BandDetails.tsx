import { useEffect, useState } from "react";
import {
  useParams
} from "react-router-dom";
import store from "../../Store";
import { BandData } from "../../types";

export const BandDetails = () => {
    let { id } = useParams();
    const [band, setBandData] = useState<BandData>();

    useEffect(()=>{
        setBandData(store.findRecord('bands', parseInt(id!)));
    },[id])
    return(
        <div>
            <p>{band?.description}</p>
        </div>
    )
}