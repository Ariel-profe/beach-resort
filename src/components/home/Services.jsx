import { useState } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import { Title } from "./Title"

const initialState = [
    {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info: 'Enjoy an ice cold drink or a refreshing drink in our bar'
    },
    {
        icon: <FaHiking />,
        title: 'Endless hiking',
        info: 'Come with us and enjoy the naturals views'
    },
    {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info: 'our free shuttle brings you to all the places you need'
    },
    {
        icon: <FaBeer />,
        title: 'Strongest beer',
        info: 'the most delicious craft beer'
    },
];

export const Services = () => {

    const [services, setServices] = useState(initialState);

  return (
    <section className='services'>
        <Title title='services' />

        <div className='services-center'>
            {
                services.map( (item, index) => (
                    <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>

                    </article>
                ) )
            }
        </div>
    </section>

  )
}
