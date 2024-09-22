import React from 'react';

const DashboardStat = ({ title, description }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center', 
    height: '90px',    
    color:'#784429',    
    paddingLeft:'30px', 
  };

  const titleStyle = {
    fontWeight: 'bold',      
    fontSize: '40px',        
    marginRight: '20px',     
  };

  const descriptionStyle = {
    fontSize: '20px',    
  };

  return (
    <div className="dashboard-item" style={containerStyle}>
      <span style={titleStyle}>{title}</span>
      <span style={descriptionStyle}>{description}</span>
    </div>
  );
};

export default DashboardStat;
