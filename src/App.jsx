import {useEffect, useState} from 'react';
import { AppRouter } from './components/router/AppRouter';
// import items from './database/data';


import './App.css'
import { RoomContext } from './context/RoomContext';
import { client } from './database/contentFul';

export const App = () => {

  const [roomState, setRoomState] = useState({
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
  });


  const getData = async () => {

    try {
      let response = await client.getEntries({
        content_type: 'beachResort',
        order: 'fields.name'
      });

      let rooms = formatData(response.items); 
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

    setRoomState({
      ...roomState,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    })
      
    } catch (error) {
      console.log(error);
    }
    }
  
  useEffect(() => {
    getData();
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

  const handleChange = (event) => {

    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = roomState;

    capacity = parseInt(capacity);

    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = event.target.name;
    
    //all the roms
    let tempRooms = [...rooms];

    //filter by type
    if( name === 'type' && value !== "all"){
      tempRooms = tempRooms.filter(room => room.type === value);
    }
    
    //filter by capacity
    if(name === 'capacity' && value !== 1){
     
      tempRooms = tempRooms.filter(room => room.capacity >= value);
    }

    //filter by price
    if(name === 'price'){
      price = parseInt(price);
      tempRooms = tempRooms.filter(room => room.price <= value);
    }

    //filter by size
    if(name === 'minSize' && value !== 0 || name === 'maxSize' && value !== 0){
      tempRooms = tempRooms.filter(room => room.size >= value);
    }

    //filter by breakfast
    if(name === 'breakfast' && value === true){
      tempRooms = tempRooms.filter(room => room.breakfast === value);
    }

    //filter by pets
    if(name === 'pets' && value === true){
      tempRooms = tempRooms.filter(room => room.pets === value);
    }
    
    setRoomState(
       {
        ...roomState,
        [name]: value,
        sortedRooms: tempRooms
      }
      );
  
  };

  return (
    <RoomContext.Provider value={{roomState, setRoomState, getRoom, handleChange}}>
      <AppRouter />
    </RoomContext.Provider>
  )
}


