import  { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

// import { Helmet } from 'react-helmet-async';
import { getStoredJobApplication } from '../../../LocalStoage/LocalStoage';

const Menu = () => {
      const cards = useLoaderData();
      const [menuCards,setMenuCards] = useState([]);
      const [displayCard,setDisplayCard] = useState([]);
      const handleCardFilter = filter =>{
            if(filter === 'all'){
                  setDisplayCard(menuCards);
            }
            else if (filter === 'remote'){
                  const remoteJobs = menuCards.filter(card => card.estate_title === 'Remote');
                  setDisplayCard(remoteJobs);
            }
            else if(filter === 'onsite'){
                  const onsiteJobs = menuCards.filter(card => card.estate_title === 'Onsite');
                  setDisplayCard(onsiteJobs);
            } 
      }
      useEffect(() =>{
            const storedJobIds = getStoredJobApplication();
            if(cards.length > 0){
                  // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))

                  const jobsApplied = [] ;
                  for(const id of storedJobIds){
                        const card = cards.find(card => card.id === id);
                        if(card){
                              jobsApplied.push(card)
                        }
                  }
                  setMenuCards(menuCards);
                  setDisplayCard(menuCards);
                  // console.log(jobs,storedJobIds,jobApplied)
            }
      },[cards])
      return (
            <div>
                  {/* <Helmet><title> Home | Menu</title></Helmet> */}
                  <h1>Order Items: {menuCards.length} </h1>

                  <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={() =>  handleCardFilter('all')} ><a>All</a></li>
    <li  onClick={() =>  handleCardFilter('remote')} ><a>Remote</a></li>
    <li  onClick={() =>  handleCardFilter('onsite')} ><a>onsite</a></li>
  </ul>
</details>


                  <ul>
                        {
                              displayCard.map(card => <li key={card.id}><span> {card.estate_title} {card.details}: {card.price} </span> </li>)
                        }
                  </ul>
            </div>
      );
};



export default Menu;