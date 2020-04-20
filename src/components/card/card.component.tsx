import React from 'react';
import { Monster } from '../../models/models';
import './card.styles.css';

export type CardProps = {
    monster: Monster
}

export const Card = (props: CardProps) => 
   <div className="card-container">
       <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
       <h2>{props.monster.name}</h2>
       <p>{props.monster.email}</p>
   </div>
