import React from 'react'
import { useState,useEffect } from 'react'
import './Game.css'
import Card from './Card';
import { ReactComponent as ZoovuO1 } from  './img/zoovu-o.svg'
import { ReactComponent as ZoovuO2 } from  './img/zoovu-o2.svg'
import { ReactComponent as ZoovuU } from  './img/zoovu-u.svg'
import { ReactComponent as ZoovuV} from  './img/zoovu-v.svg'
import { ReactComponent as ZoovuZ } from  './img/zoovu-z.svg'

const Game = ({name}) => {

    const [cards, setCards] = useState([
        <ZoovuO1 />,
<ZoovuO2 />,
<ZoovuU/>,
<ZoovuV />,
<ZoovuZ />
    ])
    const [unorderedCards, setUnorderedCards] = useState([])
    const [orderedCards, setOrderedCards] = useState(['p','a','b','l','o'])
    const [time, setTime] = useState(0)

    const randomizeCards = (cards) => {
        setUnorderedCards(cards.sort(() => Math.random() - 0.5))
    
    }

        //randomize cards order
    useEffect(() => {
        randomizeCards(cards)
    }, [])

    // setting the interval gametime
    useEffect(() => {
      const interval =  setInterval(() => {
            setTime(time => time+1)     
        }, 1000);
        return () => clearInterval(interval)
    }, [])

// final
    useEffect(() => {
        if(orderedCards === cards) {
            console.log('game finished')
        }
    }, [orderedCards])
   


    return (
        <div className="game">
            <div className="header">
                <div className="header__left">
    <strong>Good luck, {name.name}!</strong>
                    <small>Pick up the right cards</small>
                </div>

                <div className="header__right">
    <p>Your score: {time} seconds</p> 
                    <small>The faster the better!</small>
                </div>
                </div>
                <div className="game__dashboard">
                <div className="game__cards">
                   {unorderedCards.map((unorderedCard,i) => (
                       <div key={i}>
                            <Card
                            cardInfo={unorderedCard}
                            />
                       </div>
                   ))}
                   
                </div>
                <small>...and drop them here to make the logo great again!</small>
                <div className="game__orderedCards">
                   {orderedCards.map((orderedCard,i) => (
                       <div  key={i}>
                           <Card
                          
                           cardInfo={orderedCard} />
                       </div>
                   ))}

                </div>
                </div>

            
        </div>
    )
}

export default Game
