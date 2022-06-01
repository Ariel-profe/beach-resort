import {Link} from 'react-router-dom';
import { Hero, Banner, RoomsContainer } from '../components';


export const Rooms = () => {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='Our rooms'>
          <Link to='/' className='btn-primary'>
            Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  )
}
