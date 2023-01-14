import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBusinessById } from '../../../redux/actions/business/getBusiness'
import DetailsBusiness from '../../../components/DetailsBusiness/DetailsBusiness';
import ServiceList from '../../../components/DetailsBusiness/ServiceList';
import BookingService from '../../../components/BookingSteps/BookingService';
import Loader from '../../../components/Loader/Loader';


const Business = ({ id }) => {
  const [loading, setLoading] = useState(true)
  const { businessId: business } = useSelector(state => state.business)
  const dispatch = useDispatch()
  // const { adress, createdAt, name, totalRated, totalRates, categories, services, user } = business.data?.attributes

  useEffect(() => {
    if (id) {
      dispatch(getBusinessById(id))
      setLoading(false)
    }
  }, [dispatch])
  if (loading) { return (<Loader/>) }
  if (business.data) {
    const { address, createdAt, name , services, email , telephone} = business.data?.attributes
    const date = new Date(createdAt)
    return (
      <div>
        <div>
        <DetailsBusiness 
        address ={address}
        telephone ={telephone}
        name ={name}
        services={services}
        email = {email}
        createdAt = {createdAt}
        /></div>
        <div>
          <ServiceList 
          services={services}
          id={id}/>
        </div>
        <div>
          <BookingService
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