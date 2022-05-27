import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

// asalnya
// background-color: white;
// menjadi
// background-color: ${(props) => props.theme.colors.bg.primary};
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

// asalnya
// padding: 20px;
// background-color: white;
// menjadi
// padding: ${(props) => props.theme.space[3]};
// background-color: ${(props) => props.theme.colors.bg.primary};

// Untuk spacing, karena 20px ga ada, kita cari yang terdekat, yaitu 16px
// value 16px ada di index ke-3 di file spacing.js
// export const space = ["0px", "4px", "8px", "16px", "32px", "64px"];

// Kalau yang di dalam tanda kurung artinya spesifik component
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

// Penulisannya bisa juga seperti ini
// const Title = styled.Text`
// Penggunaan Theme , sebelumnya fixed
// color: red;
// Sekarang sudah berdasarkan theme
// color: ${(props) => props.theme.colors.ui.primary};
const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
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
