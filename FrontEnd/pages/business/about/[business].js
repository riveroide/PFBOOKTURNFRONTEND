import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBusinessById } from '../../../redux/actions/business/getBusiness'
import DetailsBusiness from '../../../components/DetailsBusiness/DetailsBusiness';

import BookingService from '../../../components/BookingSteps/BookingService';
import Loader from '../../../components/Loader/Loader';
import NabvarResults from '../../../components/NavbarResults/NavbarResults';
import ReviewInput from '../../../components/Review/ReviewInput/ReviewInput.jsx';
import { useSession } from 'next-auth/react';
import { getClientByEmail } from '../../../redux/actions/clients/getClients';
import { getRatingBusiness, getRatingFromClientAndBusiness } from '../../../redux/actions/Rating/getRating';
import {getBookingFromBusinessAndClientId} from "../../../redux/actions/Bookings/getBookings"
import { getFavouriteBusinessAndClient } from "../../../redux/actions/clients/getFavourites"
import ReviewsSection from '../../../components/Review/ReviewsSection/ReviewsSection.jsx';
import Image from 'next/image';
import Grid from '@mui/material/Grid'
import { postFavourite } from '../../../redux/actions/clients/postFavourite';
import { deleteFavourite } from '../../../redux/actions/clients/deleteFavourite';
import { useRouter } from 'next/router'
import swal from 'sweetalert2'




const Business = ({ id }) => {
  console.log(id, "id que llega")
  const {data: session} = useSession()
  const { clientId, favourite } = useSelector((state) => state.clients)
  const [loading, setLoading] = useState(true)
  const { businessId: business } = useSelector(state => state.business)

  const sumRating = business.data?.attributes.ratings.data?.map(e => e.attributes.score).reduce((prev, curr) => prev + curr, 0)
  const totalRated =  business.data?.attributes?.ratings.data?.length
  const rating = sumRating / totalRated

  const dispatch = useDispatch()
  const router = useRouter()

  const [input, setInput] = useState({
    businesses: "",
    clients: ""
  })

  useEffect(() => {
    if (id) {
      dispatch(getBusinessById(id))
      dispatch(getClientByEmail(session?.user.email))
      dispatch(getRatingBusiness(id))
      dispatch(getRatingFromClientAndBusiness(clientId?.id, id))
      // dispatch(getClient())
      dispatch(getBookingFromBusinessAndClientId(id, clientId?.id))
      dispatch(getFavouriteBusinessAndClient(clientId?.id, id))
      setLoading(false)
    }
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault()
    if (!session) {
      router.push("/client/login")
    }
    else if(!favourite?.length){
      dispatch(postFavourite({businesses: e.target.id,
        clients: clientId?.id}))
        swal.fire({
          text: `Se agregó ${business.data?.attributes.name} a favoritos`,
          toast: true,
          position: 'bottom-end',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false
        })
    } 
    else if (favourite?.length) {
      dispatch(deleteFavourite(favourite[0]?.id))
      swal.fire({
        text: `Se eliminó ${business.data?.attributes.name} de favoritos`,
        toast: true,
        position: 'bottom-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      })
    }
    dispatch(getFavouriteBusinessAndClient(clientId?.id, id))
  } 

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
        rating={ rating ? Math.round(rating) : 0}
        business={business}
        handleClick={handleClick}
        favourite={favourite?.length ? true : false}
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
        <div className='flex justify-center'>
          <ReviewsSection />
        </div>
      </div>
    )
  } else { return (<Loader/>) }}

export default Business


export async function getServerSideProps(context) {
  const { business } = context.params
  console.log(business, "funcion extra")
  return {
    props: { id: business },
  }
}