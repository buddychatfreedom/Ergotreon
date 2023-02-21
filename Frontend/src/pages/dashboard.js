import React from 'react';

function Dashboard(props) {
  const { earnings, patrons, activity } = props;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="earnings">
          <h2>Earnings</h2>
          <p>{earnings}</p>
        </div>
        <div className="patrons">
          <h2>Patrons</h2>
          <p>{patrons}</p>
        </div>
        <div className="activity">
          <h2>Activity</h2>
          <p>{activity}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
