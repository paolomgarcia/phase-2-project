import React from 'react';
import SnowboardCard from './SnowboardCard'
import { Card } from "semantic-ui-react";

function SnowboardCollection({snowboards}) {

    const snowboardCards = snowboards.map(snowboard => (
        <SnowboardCard
          key={snowboard.id}
          brand={snowboard.brand}
          model={snowboard.model}
          image={snowboard.image}
          terrain={snowboard.terrain}
          size={snowboard.size}
          shape={snowboard.shape}
          price={snowboard.price}
          />
      ))

      return (
        <Card.Group itemsPerRow={5}>{snowboardCards}</Card.Group>
      );
    }

export default SnowboardCollection;