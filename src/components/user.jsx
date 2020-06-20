import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVICE_DOMAIN = 'https://jsonplaceholder.typicode.com';

const User = ({ ...props }) => {
  const [onMountItem, setOnMountItem] = useState([]);
  const [onEventItem, setOnEventItem] = useState([]);

  const userId = props.match.params.id;

  useEffect(() => {
    (async () => {
      // ***TODO : get user data
      const response = await axios.get(`${SERVICE_DOMAIN}/users/${userId}`);
      setOnMountItem([response.data]);
    })();
  }, [userId]);

  const handleOnEventItem = async () => {
    // ***TODO : get user post
    const response = await axios.get(
      `${SERVICE_DOMAIN}/posts?userId=${userId}`
    );
    setOnEventItem(response.data);
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
        <button onClick={handleOnEventItem}>show user's post</button>
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
