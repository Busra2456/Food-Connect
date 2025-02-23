import { Link,useParams} from "react-router-dom";
import { saveCardItems } from "../../LocalStoage/LocalStoage";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Card = ({card}) => {
  const {cards} = useContext(AuthContext);

   const {estate_title,description,image,id,price} = card;
   
   const {ids} = useParams()
   const idInt = parseInt(ids)
   const carded =  cards.find(carded => carded.ids === idInt)
   console.log(carded,id);

   const handelCards = () =>{
    saveCardItems(idInt)
         toast('You have Order successfully');
   }
  
 
   
   return (
           
            <div>
                 

                  <div className="grid lg:grid-cols-3">
                  <div className="card bg-base-100 w-96 max-w-auto shadow-xl">
  <figure className="px-10 pt-10">
  <img
      src={image}
      
      className="rounded-xl" />
      
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl text-zinc-700 "> {estate_title} </h2>
    <div className="text-zinc-400 text-[13px]">
      {
         description.length > 60 ? <p> {description.slice(0,60) }  </p> : <p>{description} </p>
        
}<Link to={`/card/${id}`}  className="text-blue-800 text-[12px]" >
Read more...</Link> 
</div>

<p className="text-2xl" >Price : {price} </p>

<div className="card-actions w-full text-center ">
      <button
       onClick={handelCards}
      
      className="text-center btn bg-gradient-to-r from-[#25b202] to-[#c32902]
       text-white px-22 py-7  font-bold rounded-sm text-2xl mt-3">Buy Now <div className="text-3xl p-5"><ToastContainer></ToastContainer></div> </button>
    </div>
  
  
    
  </div>
</div>


                  </div>

                     

                  
            </div>
      );
};

export default Card;