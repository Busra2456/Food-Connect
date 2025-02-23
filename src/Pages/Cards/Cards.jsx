import { useContext, useState } from "react";
import Card from '../catd/Card';
import { AuthContext } from "../../Provider/AuthProvider";

const Cards = () => {
      const {cards} = useContext(AuthContext);
      
     
     
     
      const [dataLength,setDataLength] = useState(6);


     
      return (
           
            <div>
               <div className="grid grid-cols-2 lg:grid-cols-3">
                 
                  {
                     cards.slice(0,dataLength).map(card =><Card key={card.id} card={card} ></Card>)   

                  }
               </div>
  <div className={dataLength === cards.length ? 'hidden' :'' }>
  <button onClick={() => setDataLength(cards.length)}  className=" btn bg-gradient-to-r from-[#5baa47] to-[#b85339]
       text-black  px-40 py-8 font-bold rounded-sm text-3xl ml-96 rounded-bl-4xl my-10 rounded-tr-4xl">Show Details</button>
  </div>
                  
            </div>
      );
};

export default Cards;
