import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBusinessById } from '../../../redux/actions/business/getBusiness'

const Business = ({ id }) => {
  const [loading, setLoading] = useState(true)
  const { businessId: business } = useSelector(state => state.business)
  const dispatch = useDispatch()


  useEffect(() => {
    if (id) {
      dispatch(getBusinessById(id))
      setLoading(false)
    }
  }, [])
  if (loading) { return (<h3>loading</h3>) }
  if (business.data) {
    const { adress, createdAt, name, totalRated, totalRates, categories, services, staff } = business.data?.attributes
    const date = new Date(createdAt)
    return (
      <div>
        <header onClick={() => console.log(business)}>
          {name}
        </header>
        <div>
          <section>
            <p>Direccion {adress}</p>
            <p>Puntuacion {totalRated / totalRates || 0}</p>
            <p>Orgulloso miembro desde {date.toLocaleDateString()}</p>
          </section>
          <section>
            <label>{categories.data.length ? "Categorias":null}</label>
            <ul>
              {categories.data.map(el => {
                const { name } = el.attributes
                console.log(name)
                return (
                  <li key={name}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                      <p>{name}</p>

                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
          <section>
            <label>Services</label>
            <ul>
              {services.data?.map(el => {
                const { name, price } = el.attributes
                return (
                  <li key={name}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                      <p>{name}</p>
                      <p>${price}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
          <label>Staff</label>
          <section>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              {staff.data?.map(el => {
                const { name, lastname } = el.attributes
                return (
                  <li key={name + lastname}>
                    <div>
                      <p>{name} {lastname}</p>
                      <img width={'120px'} src='https://i.pinimg.com/originals/c0/c2/16/c0c216b3743c6cb9fd67ab7df6b2c330.jpg' />
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
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