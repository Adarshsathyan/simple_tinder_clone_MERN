
import React,{useState,useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './Tindercards.css';
import axios from '../../axios/Axios';


function Tindercards() {
    const [people,setPeople] = useState([]);

    useEffect(() => {
       axios.get('/tinder/cards').then((response)=>{
           setPeople (response.data)
       })
    }, [])

    const swiped = (direction,nameToDelete)=>{
        console.log("Removing : "+ nameToDelete);
    }
    
    const outOfFrame = (name)=>{
        console.log(name + "Lef the screen");
    }

    return (
        <div className="tindercards">
            
            <div className="tindercards_cardscontainer">
                {people.map((person)=>{
                    return(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                    >   
                        <div className="card"
                         style={{backgroundImage:`url("${person.url}")`}}
                         >
                            <h2>{person.name}</h2>
                        </div>
                    </TinderCard>
                    )
                   
                })}
            </div>
        </div>
    )
}

export default Tindercards
