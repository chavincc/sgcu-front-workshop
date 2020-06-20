import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVICE_DOMAIN = 'https://jsonplaceholder.typicode.com/';

const User = ({ ...props }) => {
  const [onMountItem, setOnMountItem] = useState([]);
  const [onEventItem, setOnEventItem] = useState([]);

  const userId = props.match.params.id;

  useEffect(() => {
    (async () => {
      // ***TODO : get user data
    })();
  }, []);

  const handleOnEventItem = async () => {
    // ***TODO : get user post
  };

  return (
    <>
      <div className="card" id="on-mount">
        <div className="list">
          {onMountItem.map((item) => (
            <div className="list-item" key={`list-user-${item.id}`}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="card" id="on-event">
        <button onClick={handleOnEventItem}>show post</button>
        <div className="list">
          {onEventItem.map((item) => (
            <div className="list-item" key={`list-post-${item.id}`}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default User;
