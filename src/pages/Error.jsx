import {Link} from 'react-router-dom';
import { Hero, Banner } from "../components"

    
export const Error = () => {
  return (
    <Hero>
      <Banner title='404' subtitle='page not found'>
        <Link to='/' className='btn-primary'>
          Home
        </Link>
      </Banner>
    </Hero>
  )
}
