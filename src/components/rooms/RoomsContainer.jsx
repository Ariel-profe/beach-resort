import React, {useContext} from 'react';
import { RoomContext } from '../../context';
import { Loading } from '../ui';
import { RoomList, RoomsFilter } from './';



export const RoomsContainer = () => {

  const {roomState} = useContext(RoomContext);

  const {loading, sortedRooms, rooms} = roomState;

  if(loading) {
    return <Loading />
  } 

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  )
}
