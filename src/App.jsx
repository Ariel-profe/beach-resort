import {useEffect, useState} from 'react';
import { AppRouter } from './components/router/AppRouter';
import items from './database/data';

import './App.css'
import { RoomContext } from './context/RoomContext';

const initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
  type: 'all',
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false
};

export const App = () => {

  const [roomState, setRoomState] = useState(initialState);

  useEffect(() => {
    let rooms = formatData(items); 
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    setRoomState(prevState => ({
      ...prevState,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
      formatData,
      handleChange,
      getRoom
    }));

  }, []);

  const formatData = (items) =>{
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = {...item.fields, images, id};
      return room;
    });
    return tempItems;
  };

  const getRoom = slug => {
    let tempRooms = [...roomState.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  const handleChange = event => {
    const target = event.target;
    const name = event.target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setRoomState(prevState => ({
      ...prevState,
      [name]: value
    })), filterRooms();
  };

  const filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = roomState;

    let tempRooms = [...rooms];

    //filter by type
    if(type !== 'all'){
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    // //filter by capacity
    // if(capacity !== 1){
    //   tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    // }

    // //filter by price
    // tempRooms = tempRooms.filter(room => room.price <= price);

    // //filter by size
    // tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

    // //filter by breakfast
    // if(breakfast){
    //   tempRooms = tempRooms.filter(room => room.breakfast === true);
    // }

    // //filter by pets
    // if(pets){
    //   tempRooms = tempRooms.filter(room => room.pets === true);
    // }

    //change state
    setRoomState(prevState => ({
      ...prevState,
      sortedRooms: tempRooms
    }));
  };
  
  return (
    <RoomContext.Provider value={roomState}>
      <AppRouter />
    </RoomContext.Provider>
  )
}


