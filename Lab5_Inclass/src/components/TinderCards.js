import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
//import database from '../firebase';
import './TinderCard.css'

function TinderCards() {

    const [cats, setcat] = React.useState([

    {
        name: 'Cat 5',
        url: 'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg'
    },
    {
        name: 'Cat 4',
        url: 'https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg'
    },
    {
        name: 'Cat 3',
        url: 'https://i.insider.com/61d1c0e2aa741500193b2d18?width=700'
    },
    {
        name: 'Cat 2',
        url: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/07-23/How+Much+Does+It+Cost+to+Have+a+Cat+_+ASPCA+Pet+Insurance+_+black+cat+with+yellow+eyes+peeking+out-min.jpg'
    },
    {
        name: 'Cat 1',
        url: 'https://pyxis.nymag.com/v1/imgs/54c/950/eff84c687e50d533f210c2582ffd570142-31-cat-food.jpg'
    },
  ]); 
  return (
    <div className='card__container'>
        {
           cats.map( cat =>(
                <TinderCard
                className="swipe"
                key={cat.name}
                preventSwipe={['up','down']}
                >
                    <div
                    style={ { backgroundImage: `url(${cat.url})` } }
                    className='card'
                    >
                        <h3>{cat.name}</h3>
                        </div>
                        </TinderCard>
            ))
            
        }
        </div>
  )
}
export default TinderCards
