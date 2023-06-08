import './styles.scss';

import React from 'react';
import horse_map from '../../assets/horse_map.jpg';

export const HorseMapImage = () => {
  return (
    <div className="eq-horse_map_image">
      <img src={horse_map} alt="Map of horse muscles" />
    </div>
  );
};
