import { useEffect, useState } from "react";
import Card from '../catd/Card';

const Cards = () => {
     
      
     
     
      const [cards,setCards] = useState([]);
      // const [dataLength,setDataLength] = useState(6);

      useEffect(() =>{
            
            fetch('cards.json')
            .then(res => res.json())
            .then(data => setCards(data))
      },[])
     
      return (
           
            <div>
               <div className="grid grid-cols-2 lg:grid-cols-3">
                 
                  {
                     cards.map(card =><Card key={card.id} card={card} ></Card>)   

                  }
               </div>
                  
            </div>
      );
};

export default Cards;
