import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBusinessById } from '../../../redux/actions/business/getBusiness'
import DetailsBusiness from '../../../components/DetailsBusiness/DetailsBusiness';
import ServiceList from '../../../components/DetailsBusiness/ServiceList';
import BookingService from '../../../components/BookingSteps/BookingService';
import Loader from '../../../components/Loader/Loader';
import NabvarResults from '../../../components/NavbarResults/NavbarResults';
import ReviewInput from '../../../components/reviewInput/reviewInput';
import { useSession } from 'next-auth/react';
import { getClient, getClientByEmail } from '../../../redux/actions/clients/getClients';
import { getRatingFromClientAndBusiness } from '../../../redux/actions/Rating/getRating';
import {getBookingFromBusinessAndClientId} from "../../../redux/actions/Bookings/getBookings"



const Business = ({ id }) => {

  const {data: session} = useSession()
  const { clientId } = useSelector((state) => state.clients)
  const [loading, setLoading] = useState(true)
  const { businessId: business } = useSelector(state => state.business)
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(getBusinessById(id))
      dispatch(getClientByEmail(session?.user.email))
      dispatch(getRatingFromClientAndBusiness(clientId.id, id))
      // dispatch(getClient())
      dispatch(getBookingFromBusinessAndClientId(id, clientId.id))
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
          <NabvarResults/>
        </div>
        <div>
        <DetailsBusiness 
        address ={address}
        telephone ={telephone}
        name ={name}
        services={services}
        email = {email}
        createdAt = {createdAt}
        /></div>
        {/* <div>
          <ServiceList 
          services={services}
          id={id}/>
        </div> */}
        <div>
          <BookingService
          services={services}
          />
        </div>
        <div className='w-full flex justify-center mt-4'>
          <h1 className='text-3xl font-cool_g'>Reseñas</h1>
        </div>
        <div className='flex justify-center'>
          <ReviewInput client={clientId} businessId={id} />
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