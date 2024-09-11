import React from 'react';
import './main.css';

const Main = (props) => {
  console.log(props);
  return (
    <>
      {props.items.map((item) => {
        return (
          <div className='container' key={item.title}>
            <div className='title'>{item.title}</div>
            <div className='description'>{item.description}</div>
          </div>
        );
      })}
    </>
  );
};

export default Main;
