import React from 'react';
import EventData from './EventData';
import './event.scss';

const Events = () => {
  return (
    <article className="events" style={{ color: '', backgroundColor: '#fff' }}>
      {EventData.map((event) => {
        const { img, id, date, time, title } = event;
        return (
          <div className="events-content">
            <img src={img} alt="" />
            <h4>{title}</h4>
            <div>
              <p>{date}</p>
              <p>{time} </p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default Events;
