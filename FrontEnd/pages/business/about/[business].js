import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBusinessById } from '../../../redux/actions/business/getBusiness'
import DetailsBusiness from '../../../components/DetailsBusiness/DetailsBusiness';
import ServiceList from '../../../components/ServiceList/ServiceList';
//import styles from "../../../styles/Business.module.css";

const Business = ({ id }) => {
  const [loading, setLoading] = useState(true)
  const { businessId: business } = useSelector(state => state.business)
  const dispatch = useDispatch()


  useEffect(() => {
    if (id) {
      dispatch(getBusinessById(id))
      setLoading(false)
    }
  }, [dispatch])
  if (loading) { return (<h3>loading</h3>) }
  if (business.data) {
    const { adress, createdAt, name, totalRated, totalRates, categories, services, user } = business.data?.attributes
    const date = new Date(createdAt)
    return (
      <div>
        <div>
        <DetailsBusiness 
        adress ={adress}
        name ={name}
        totalRated={totalRated}
        services={services}
        user = {user}
        /></div>
        <div>
          <ServiceList 
          services={services}/>
        </div>
      </div>
    )
  }

}

export default Business


export async function getServerSideProps(context) {
  const { business } = context.params
  return {
    props: { id: business },
  }
}