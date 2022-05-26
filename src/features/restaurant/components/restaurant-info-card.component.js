import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

// Kalau yang di dalam tanda kurung artinya spesifik component
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

// Penulisannya bisa juga seperti ini
// const Title = styled.Text`
const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = () => {
  const restoran = {
    name: "Nama Restoran",
    photos:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
  };

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover
          key={restoran.name}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Title>{restoran.name}</Title>
      </RestaurantCard>
    </>
  );
};
