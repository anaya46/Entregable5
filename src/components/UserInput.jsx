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
          <img className='img-trainer' src="https://images.wikidexcdn.net/mwuploads/wikidex/7/72/latest/20091129174930/Rojo_RFVH_%28Ilustraci%C3%B3n%29.png" alt="" />
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