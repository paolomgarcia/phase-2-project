import React from 'react';
import SnowboardCard from './SnowboardCard'
import { Card } from "semantic-ui-react";

function SnowboardCollection({snowboards}) {

    const snowboardCards = snowboards.map(snowboard => (
        <SnowboardCard
          key={snowboard.id}
          brand={snowboard.brand}
          model={snowboard.model}
          images={snowboard.image}
          terrain={snowboard.terrain}
          size={snowboard.size}
          shape={snowboard.shape}
          />
      ))

      return (
        <Card.Group itemsPerRow={5}>{snowboardCards}</Card.Group>
      );
    }

export default SnowboardCollection;