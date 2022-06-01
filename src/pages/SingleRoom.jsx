import { useContext, useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {RoomContext} from '../context'
import {Hero, Banner, StyledHero} from '../components/ui';
import defaultImg from '../../public/images/room-1.jpeg';


export const SingleRoom = () => {

  const {getRoom} = useContext(RoomContext)
 
  const {slug} = useParams();
  const [param, setparam] = useState({slug, defaultImg});

    const room = getRoom(param.slug);
    if(!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      )
    }

    const {name, size, description, capacity, price, extras, breakfast, pets, images} = room;

    const [mainImg, ...imgs] = images;

  return (
    <>
      <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {imgs.map((item, index) => {
            return <img key={index} src={item} alt={name} />
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: ${size} SQFT</h6>
            <h6>max capacity: {capacity} {capacity < 2 ? 'person' : 'people'} </h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>
          })}
        </ul>
      </section>
   </>
  )
}
