import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
`;

const CardTitle = styled.h3``;

const CardImage = styled.img``;

const CardDescription = styled.p``;

const Card = ({ title, imageUrl, description }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardImage src={imageUrl} alt={title} />
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

export default Card;
