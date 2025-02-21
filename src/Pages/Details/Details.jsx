import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Details = () => {
      const cards = useLoaderData();
      const {id} = useParams()
      const idInt = parseInt(id)
      const card =  cards.find(card => card.id === idInt)
      console.log(card,id);
    
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="card bg-base-100 text-center shadow-xl">
  <figure>
    <img
      src={card.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title " > {card.estate_title} </h2>
    <h2 className="text-2xl font-bold text-base-800 mb-6">{card.description} </h2>
    <p className="text-3xl text-zinc-700"> {card.details} </p>
    <h2> {} </h2>
       
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                 
                  
            </div>
      );
};

export default Details;