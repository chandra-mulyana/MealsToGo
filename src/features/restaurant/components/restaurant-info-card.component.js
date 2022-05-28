import React from "react";
// import { Text, Image, View } from "react-native";
import { SvgXml } from "react-native-svg";
// SVG gambar star
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

// =========================================================
//  STYLED COMPONENT
// =========================================================
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";
// =========================================================
//  END OF STYLE COMPONENT
// =========================================================

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
          <Text variant="label">{restoran.name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {restoran.isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {restoran.isOpenNow && (
                  <SvgXml xml={open} width={20} height={20} />
                )}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: restoran.icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{restoran.address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
