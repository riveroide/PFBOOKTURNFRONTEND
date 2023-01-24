import React from "react";
import Link from "next/link";
import swal from 'sweetalert';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { deleteBooking } from '../../redux/actions/Bookings/deleteBooking'

export default function BookedList(props){
    const dispatch = useDispatch()    
    
    useEffect(()=> {
        console.log('Se actualizaron los turnos')
    },[props])

    const cancelarTurno = (e) =>{
        console.log(e.target.id)
        swal({
            title: 'Estas seguro que deseas cancelar el turno?',
            text: 'No podras revertir esta accion',
            icon: 'warning',
            buttons: ['No', 'Si']
        }).then(async (respuesta) =>{
            if(respuesta){
                try {
                    await dispatch(deleteBooking(e.target.id))
                    swal({
                        text: 'El turno se ha cancelado con éxito',
                        icon: 'success',
                        timer: 3000
                    }) 
                } catch (error) {
                    console.log(error)
                    swal({
                        title: 'El turno se ha cancelado con éxito',
                        icon: 'success',
                        timer: 3000
                    })
                }  
            }
        })
    }
    return(
        <div className="max-w-3xl mx-auto ">
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nombre del Local
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Fecha
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Servicios
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Precio
                                        </th>
                                        <th scope="col" className="p-4">
                                            <span className="sr-only">Cancelar</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {props.props?.length && props.props.map(booking => {
                                        console.log(booking.attributes?.businesses.data[0]?.id)
                                        return(
                                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <Link href={`/business/about/${booking.attributes?.businesses.data[0]?.id}`}>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{booking.attributes?.businesses.data[0]?.attributes.name}</td>
                                                </Link>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{booking.attributes?.dateinfo}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{booking.attributes?.services.data[0]?.attributes.name}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">${booking.attributes?.services.data[0]?.attributes.price}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <a id={booking.id} onClick={(e) => cancelarTurno(e)} className="text-red-500 hover:underline cursor-pointer">Cancelar</a>
                                                </td>
                                        |   </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}