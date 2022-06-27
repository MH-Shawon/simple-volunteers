import React, { useEffect, useState } from 'react';
import './Main.css'
import Activity from '../Activity/Activity';
import useVolunteers from '../../hooks/useVolunteers';

const Main = () => {
    const [volunteers, setVolunteers] = useVolunteers();

    return (
        <div>
            <h4>Volunteer Activities:{volunteers.length}</h4>
           <div className="activity-container">
           {
                volunteers.map(activity => <Activity 
                key={activity._id}
                activity={activity}
                ></Activity>)
            }
           </div>
        </div>
    );
};

export default Main;