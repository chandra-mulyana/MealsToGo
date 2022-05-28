import React from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
// SVG gambar star
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantInfoCard = () => {
  const restoran = {
    name: "Nama Restoran",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    address: "Jl. Ucing Oren",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  };

  const ratingArray = Array.from(new Array(Math.floor(restoran.rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover
          key={restoran.name}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <Info>
          <Title>{restoran.name}</Title>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {restoran.isClosedTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <View style={{ paddingLeft: 16 }} />
              {restoran.isOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
              <View style={{ paddingLeft: 16 }} />
              <Image
                style={{ width: 15, height: 15 }}
                source={{ uri: restoran.icon }}
              />
            </SectionEnd>
          </Section>
          <Address>{restoran.address}</Address>
        </Info>
        <Title />
      </RestaurantCard>
    </>
  );
};
