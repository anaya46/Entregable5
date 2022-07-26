import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import getTypeColor from '../utils/getTypeColor.jsx';


const CharacterItem = ({characterUrl}) => {
     
    
    const [character, setCharacter]=useState({})
    const navigate = useNavigate();
    useEffect(()=> {
        axios.get(characterUrl)
        .then(res => setCharacter(res.data))
    }, []);
    
  
    return (
        <div 
            onClick={()=>navigate(`/pokedex/${character.id}`)} 
            className='card' 
            style={{background: getTypeColor(character.types?.[0]?.type?.name)}}
        >
            <div className='description'>
                <div className='list'>
                    <h3 className='name'>{character?.name}</h3>                       
                    <h4><b>types </b>   : {character.types?.[0]?.type?.name} / {character.types?.[1]?.type?.name}</h4>                
                    <h4>hp: {character.stats?.[0].base_stat}</h4>                    
                    <h4>attack: {character.stats?.[1].base_stat}</h4>
                    <h4>defense : {character.stats?.[2].base_stat}</h4>
                    <h4>speed : {character.stats?.[5].base_stat}</h4>
                </div>
            </div>    
            <div className='cont-img'>
                <img className='img-card' src={character?.sprites?.other.home.front_default} alt="" />
            </div>
            
        </div>
    );
};

export default CharacterItem;