import React from 'react';
import { Link } from 'react-router-dom';
import CharacterList from './CharacterList';
const Charcter = () => {
  return (
    <div style={{ color: 'red', textAlign: 'center' }}>
      {CharacterList.map((charcater) => {
        return (
          <div>
            <img src={charcater.img} alt="" />
            <h2>This is {charcater.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Charcter;
