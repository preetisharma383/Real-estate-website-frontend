import React from 'react';

const Logo = ({ size = 60 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main Trunk */}
    <path 
      d="M100 160V100" 
      stroke="#555555" 
      strokeWidth="4" 
      strokeLinecap="round"
    />
    
    {/* Tree Canopy Structure */}
    <path 
      d="M100 105C85 105 70 95 70 75C70 55 85 45 100 45C115 45 130 55 130 75C130 95 115 105 100 105Z" 
      stroke="#555555" 
      strokeWidth="2"
    />
    
    {/* Leaves - Green Accents */}
    <circle cx="100" cy="40" r="5" fill="#97db8d" />
    <circle cx="120" cy="55" r="5" fill="#97db8d" />
    <circle cx="80" cy="55" r="5" fill="#97db8d" />
    <circle cx="135" cy="75" r="5" fill="#97db8d" />
    <circle cx="65" cy="75" r="5" fill="#97db8d" />
    <circle cx="120" cy="95" r="5" fill="#97db8d" />
    <circle cx="80" cy="95" r="5" fill="#97db8d" />
    
    {/* Text Elements */}
    <text 
      x="100" 
      y="180" 
      textAnchor="middle" 
      fontFamily="serif" 
      fontSize="14" 
      fill="#555555" 
      letterSpacing="2"
    >
      VIGHNAHARTA
    </text>
    <text 
      x="100" 
      y="200" 
      textAnchor="middle" 
      fontFamily="sans-serif" 
      fontWeight="bold" 
      fontSize="22" 
      fill="#333333"
    >
      INFINITY
    </text>
  </svg>
);

export default Logo;