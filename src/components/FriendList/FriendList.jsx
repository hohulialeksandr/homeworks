import React from 'react';

import './FriendList.css'

const FriendList = ({ friends }) => {
    return (
        <div className='main'>
            {
                friends.map((e, id) =>
                    <li className="item" key={id}>
                        <span className="status" style={!e.isOnline ? { background: 'red' } : { background: 'green' }}></span>
                        <img className="avatar" src={e.avatar} alt="User avatar" width="48" />
                        <p className="name">{e.name}</p>
                    </li>)
            }
        </div>
    )
}

export default FriendList