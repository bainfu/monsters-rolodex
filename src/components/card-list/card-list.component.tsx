import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';
import { CardListProps } from '../../models/models';


export const CardList = (props: CardListProps) => 
    <div className="card-list"> 
    {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>
    ))}
    </div>;


