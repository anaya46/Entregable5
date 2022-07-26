import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import getTypeColor from '../utils/getTypeColor.jsx';
import { useNavigate } from 'react-router-dom';

const CharacterDetail = () => {
    const [character, setCharacter]= useState({})
    const [moves, setMoves] = useState([])
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setCharacter(res.data) ) 
        

    },[id])
    const navigate = useNavigate();

    return (
        <div 
            className='container-detail'
            style={{background: getTypeColor(character.types?.[0]?.type?.name)}}
            >
            <div className='container-arrow'>   
                <button 
                    onClick={()=>navigate(-1)}
                    className='return'>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            </div> 
            <img className="logo"   src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="" />
            <div className='detail-ppal'>
                <img className='img-pokemon' src={character?.sprites?.other.dream_world.front_default} alt="" />
                <div className='wei-hei'>
                    <div className='info-weihei'>
                        <h2 className='info-weihei'>{character.weight} 
                            <div className='font-clear'>Weight</div>  
                        </h2>
                    </div>    
                    <div className='info-weihei'>
                        <h2 className='info-weihei'>{character.height}
                            <div className='font-clear'>Height</div>
                        </h2>    
                    </div>     
                </div>    
                <h1>{character.name}</h1>
                
                <h3 className='id'> # {character.id}</h3>
            </div>
            <div className='rectangulo'>
                <div className='card1'>
                    <h1>Type </h1>
                    <div className='types-list'>
                        <div className='type'>
                            <h4 style={{background:"#696969"}}className='title-type' >{character.types?.[0]?.type?.name} </h4> 
                        </div>
                        <div className='type'>
                            <h4 style={{background:"#008080"}} className='title-type'>{character.types?.[1]?.type?.name}</h4> 
                        </div>
                    </div>                
                </div>
            </div>
            <div className='rectangulo abilities'>
                <div className='card1 '>
                        <h1>Abilities </h1>
                    <div className='types-list'>
                        <div className='type'>
                            <h4 className='habilitie'>{character.abilities?.[0]?.ability.name} </h4> 
                        </div>
                        <div className='type'>    
                            <h4 className='habilitie'>{character.abilities?.[1]?.ability.name}</h4>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='rectangulo stats'>
                <div className='card1'>
                    <h1>Stats Base </h1>
                    <div className='types-list'>
                        <div className='type'>
                            <h4 className='habilitie'> <b className='subt'> Hp   </b>   {character.stats?.[0].base_stat} / 150 </h4>     
                        </div>
                        <div className='type'> 
                             <h4 className='habilitie'><b className='subt'> Attack  </b>{character.stats?.[1].base_stat} / 150 </h4>
                        </div>
                        <div className='type'>  
                            <h4 className='habilitie'>  <b className='subt'> Defense  </b>{character.stats?.[2].base_stat} / 150 </h4>
                        </div>
                        <div className='type'>
                             <h4 className='habilitie'><b className='subt'> Speed  </b> {character.stats?.[5].base_stat} / 150 </h4>
                        </div>
                    </div>
                 </div>   
            </div>        
            <div className='rectangulo movet'>
                <div className='card1 moves'>      
                    <h1>Movements </h1>
                    <ul className='list-moves'>
                            { character.moves?.map(move =>(
                                <li className='move' key={character.url}>{move.move.name}</li>
                                        
                                        ))
                                
                                }
                    </ul>
                </div>
            </div>    

        </div>
        
    );
};

export default CharacterDetail;