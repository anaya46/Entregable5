import React, { useState } from 'react';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';



const UserInput = () => {
const navigate = useNavigate()
const[userName, setUserName]= useState("")
const dispatch = useDispatch();

const submit = e => {
    e.preventDefault();
    dispatch(changeUser(userName));
    navigate("/pokedex")
}
  return (
    <div className='App'>
      <div className='container-initial'>
        <div className='greeting'>
          <h1 className='title-gretting'>Hello trainer!!</h1>
          <img className='img-trainer' src="	https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="" />
        </div>
        <p className='title-trainer'>With your name we can start</p>
      </div>
   
      <form onSubmit={submit}>
        <input 
          type="text" 
          value={userName}
          onChange={e => setUserName(e.target.value) }
          />
        <button className='button-input'>
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>

  );
};

export default UserInput;