import { Link } from "react-router-dom";



const Card = ({card}) => {
   const {estate_title,description,image,id,price} = card;
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
  
    <div className="card-actions w-full">
      <button  className="text-center ml-6 btn bg-gradient-to-r from-[#25b202] to-[#c32902]
       text-white px-24 py-6 rounded-sm text-xl mt-3 ">Buy Now</button>
    </div>
    
  </div>
</div>


                  </div>

                     

                  
            </div>
      );
};

export default Card;