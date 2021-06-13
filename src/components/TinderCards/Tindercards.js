
import React,{useState} from 'react';
import TinderCard from 'react-tinder-card';
import './Tindercards.css'

function Tindercards() {
    const [people,setPeople] = useState([
        {
            name:"Elon Musk",
            url:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
        },
        {
            name:"Steve Jobs",
            url:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
        }
    ]);

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
