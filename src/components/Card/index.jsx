import React from "react";
import Title from '../Title'
import './styles.css';
import Image from "../Image";
import Subtitle from "../Subtitle";
import Description from "../Description";
import Button from "../Button";


const Card = ({title, src, subtitle, description, buttonLabel}) => {
  const onClickButton = () => {
    console.log({title, subtitle, description})
  }
  return (
    <div className="card">
      <Title title={title} />

      <Image src={src} />

      <Subtitle subtitle={subtitle} />

      <Description description={description} />
    
      <Button label={buttonLabel} onClick={onClickButton} />
    </div>
  );
};

export default Card;