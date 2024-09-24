import React from 'react';

const DashboardStat = ({ title, description }) => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '4fr 8fr', // Title takes 4 columns, description takes 8 columns
    alignItems: 'center',
    height: '9.05vh',
    width: '20.84vw', 
    color: '#784429',
    paddingLeft: '15px',
  };

  const titleStyle = {
    textAlign: 'right',
    marginRight:'20px',
    fontWeight: 'bold',
    fontSize: '40px',
  };

  const descriptionStyle = {
    fontSize: '20px',
    fontWeight: '500',
  };

  return (
    <div className="dashboard-item" style={containerStyle}>
      <span style={titleStyle}>{title}</span>
      <span style={descriptionStyle}>{description}</span>
    </div>
  );
};

export default DashboardStat;
