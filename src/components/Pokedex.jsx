import { useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';
import { useState } from 'react'
import CharacterItem from './CharacterItem';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {
//para acceder a lo que hay en la store:
//el objeto que hay en el store se llama state,
//accedo a la propiedad USER del objeto STATE.    
    const user = useSelector(state =>state.user)

    const [characters, setCharacteres] = useState([])
    const [characterSearch, setcharacterSearch] = useState("");
    const [types, setTypes] = useState ([])
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`)
        .then(res => setCharacteres(res.data.results))

        axios.get(`https://pokeapi.co/api/v2/type/`)
        .then(res => setTypes(res.data.results))
    }, []);
  

    const search = e => {
        e.preventDefault();
        navigate(`/pokedex/${characterSearch}`)

    }
    const filterType = e =>{
            axios.get(e.target.value)
            .then(res => setCharacteres(res.data.pokemon))
            
    }
    const [page,setPage] = useState(1)
    const lastIndex = page * 12
    const firstIndex = lastIndex - 12
    const lastPage = Math.ceil(characters.length / 12)
    const pokePaginated = characters.slice(firstIndex,lastIndex); 
    const numbers = [];
    for( let i=1; i<=lastPage; i++){
        numbers.push(i)
    }



    return (
        <div className='App'>
            <div className='container'> 
                <h1 className='title-pokedex'>Pokedex</h1>
                <p className='welcome'>Welcome <b>{user} </b>!!! let's find your favorite pokemon</p>

                <form className='form'   onSubmit={search}>
                    <input 
                        placeholder='Search Here...'
                        className='search'
                        type="text" 
                        value={characterSearch}
                        onChange={e => setcharacterSearch(e.target.value) }/> 
                    <button className="button-search">
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </form>

                <select className='select-type' onChange={filterType}>
                    <option value="">Select a type</option>
                    {
                        types.map(type => (
                            <option 
                                value={type.url}
                                key={type.url}>
                                {type.name}
                             </option>
                        ))
                        }
                </select>

                <ul className='card-container'>
                    
                        { pokePaginated.map(character =>(
                                <CharacterItem 
                                characterUrl={character.url ? character.url : character.pokemon.url } 
                                key={character.url ? character.url : character.pokemon.url} />
                        ))
                        
                        }
                    
                </ul>
                <div className='pagination'>
                    <button 
                        onClick={()=>setPage (page - 1)}
                        disabled = {page === 1}
                        > 
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    {numbers.map(number => (
                        <button onClick={()=>setPage(number)}>
                            {number}
                        </button>
                    ))}
                    <button 
                        onClick={()=>setPage (page + 1)}
                        disabled = {page === lastPage}
                        > <i className="fas fa-chevron-right"></i>
                        </button>
                </div>
                
            </div>   
        </div>
    );
};

export default Pokedex;