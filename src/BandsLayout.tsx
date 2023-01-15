import BandsList from "./components/BandsList/BandsList"
import { Outlet } from "react-router-dom"

export const BandsLayout = () => {
    return(
        <>
            <BandsList></BandsList>
            <Outlet />
        </>
    )
}