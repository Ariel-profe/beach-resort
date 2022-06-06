import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { Title } from "../home/Title";
import { Loading } from "../ui";
import { RoomCard } from "./";

export const FeaturedRooms = () => {

  const {roomState} = useContext(RoomContext);
  const {featuredRooms, loading} = roomState;

  return (
    <section className="featured-rooms">
      <Title title='Featured rooms' />
        <div className="featured-rooms-center">
          {
            loading 
                ? <Loading />
                : featuredRooms.map(room => (
                  <RoomCard key={room.id} room={room} />
                ))
          }
        </div>
    </section>
  )
};
