import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: black;
  font-weight: bold;
  margin: 0;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;

const Card = ({ title, imageUrl, description }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardImage src={imageUrl} alt={title} />
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

export default Card;
