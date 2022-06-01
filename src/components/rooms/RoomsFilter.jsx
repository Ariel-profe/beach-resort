import React, {useContext} from 'react'
import { RoomContext } from '../../context'
import { Title } from '../home';

export const RoomsFilter = ({rooms}) => {

  //get all unique values
  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

  const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, pets, breakfast} = useContext(RoomContext);
  
  //get unique types
  let types = getUnique(rooms, 'type');

  //add all
  types = ['all', ...types];

  return (
    <section className="filter-container">
      <Title title='search rooms' />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
              name="type"
              id="type"
              value={type}
              className="form-control" 
              onChange={handleChange}
          >
            {
              types.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
              })
            }
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  )
}
