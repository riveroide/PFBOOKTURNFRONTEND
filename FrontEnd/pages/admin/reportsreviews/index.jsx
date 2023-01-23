import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRatingsAll } from "../../../redux/actions/Rating/getRating"
import TableReportes from "../../../components/TableReportes/TableReportes";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
export default function index() {

    const dispatch = useDispatch()
    const {allRatings} = useSelector(state => state.ratings)
    const [hydrated, setHydrated] = useState(false)
    const [change, setChange] = useState(false)
   

    useEffect(() => {
      setHydrated(true)
        dispatch(getRatingsAll())
    },[dispatch, change])

    if (!hydrated) {
        return null;
      }

  return (
    <div>
        <NavBarAdmin/>
        <TableReportes allRatings={allRatings} change={change} setChange={setChange} />
    </div>
  )
}
