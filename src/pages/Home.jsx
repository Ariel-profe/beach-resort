import { useContext } from 'react';
import {Link} from 'react-router-dom';

import { Hero, Banner, Services, FeaturedRooms } from '../components';



export const Home = () => {
  
  return (
    <>
      <Hero>
        <Banner title='Luxurious rooms' subtitle='deluxe rooms starting at $299'>
          <Link to='/rooms' className='btn-primary'>
            Our rooms
          </Link>
        </Banner>
      </Hero>

      <Services />
      <FeaturedRooms />
    </>
  )
}
