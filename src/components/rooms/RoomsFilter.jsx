import React, {useContext} from 'react'
import { RoomContext } from '../../context'
import { Title } from '../home';

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};



export const RoomsFilter = ({rooms}) => {


  const {roomState, handleChange} = useContext(RoomContext);
  const {type, capacity, price, minPrice, maxPrice, minSize, maxSize, pets, breakfast} = roomState;
  

  //get unique types
  let types = getUnique(rooms, "type");

  //add all
  types = ['all', ...types];

  //get unique capacity
  let people = getUnique(rooms, "capacity");


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
              onChange={handleChange}
              className="form-control" 
              value={type}
          >
            {types.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))
            }
          </select>
        </div>
        {/* end select type */}

        {/* select capactity */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
              name="capacity"
              id="capacity"
              onChange={handleChange}
              className="form-control" 
              value={capacity}
          >
            {people.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))
            }
          </select>
        </div>
        {/* end select capactity */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
              className='form-control'
              type='range'
              name='price'
              min={minPrice}
              max={maxPrice}
              id='price'
              vale={price}
              onChange={handleChange} />
        </div>
        {/* end room price */}

        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input 
              type="number"
              name="minSize"
              id="size"
              className="size-input"
              value={minSize}
              onChange={handleChange}
            />
            <input 
              type="number"
              name="maxSize"
              id="size"
              className="size-input"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end size */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input 
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input 
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  )
}
