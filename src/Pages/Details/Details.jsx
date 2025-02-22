import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { saveCardItems } from "../../LocalStoage/LocalStoage";
import { toast, ToastContainer } from "react-toastify";


const Details = () => {

      

      const cards = useLoaderData();
      const {id} = useParams()
      const idInt = parseInt(id)
      const card =  cards.find(card => card.id === idInt)
      console.log(card,id);

      const handelCard = () =>{
            saveCardItems(idInt)
            toast('You have Order successfully');
      }
     
    
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="card bg-base-100 text-center shadow-xl">
  <figure>
    <img
      src={card.image}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-4xl text-base-700  mx-auto my-3" > {card.estate_title} </h2>
            
              <h2 className="text-[17px] text-zinc-800 space-y-3">{card.description}{card.details}
   
     </h2>
           
           <hr />
        <h2 className="text-[16px] my-3 text-zinc-500 space-y-4"><span className="text-4xl text-zinc-800">Ingredients:</span>  {card.recipe.ingredients}<br></br><hr />
        <span className="text-4xl text-zinc-800  ">Instructions:</span>  {card.recipe.instructions} </h2>

        <p className="text-3xl" >Price : {card.price} </p>
       
              <div className="card-actions w-full text-center  ml-96">
      <button onClick={handelCard} className="text-center btn bg-gradient-to-r from-[#25b202] to-[#c32902]
       text-white px-40 py-8 pl-44 font-bold rounded-sm text-2xl mt-3">Buy Now <div className="text-3xl p-5"><ToastContainer></ToastContainer></div> </button>
    </div>
  </div>
                 
                  
            </div>
            </div>
      );
};

export default Details;