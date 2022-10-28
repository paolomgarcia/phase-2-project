import React, {useState} from 'react';
import { Card, Icon, Image } from "semantic-ui-react";


function SnowboardCard({brand, model, image, terrain, size, shape, price}) {
    const [mainCard, setMainCard] = useState(true);


    function frontCard() {
        return (
            <Card className="card">
            <Image src={image.main} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{brand}</Card.Header>
              <Card.Meta>
                <span className='date'>{model}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='dollar sign' />
                {price}
              </a>
            </Card.Content>
          </Card>
        )
    }


    function backCard() {
        return (
            <Card className="card">
            <Image
            src={image.backup} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{brand}</Card.Header>
              <Card.Meta>
                <span className='date'>{model}</span>
              </Card.Meta>
              <Card.Description>
                <p>Terrain: {terrain}</p>
                <p>Size: {size}</p>
                <p>Shape: {shape}</p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='dollar sign' />
                {price}
              </a>
            </Card.Content>
          </Card>
        )
    }

    function handleClick() {
        setMainCard((mainCard) => !mainCard);
    }



return (
        <Card>
        <div onClick={handleClick}>
                {mainCard ? frontCard() : backCard()}
        </div>
        </Card>
    );
}

export default SnowboardCard;