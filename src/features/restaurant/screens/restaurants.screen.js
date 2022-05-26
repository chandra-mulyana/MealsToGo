import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

// - SafeAreaView digunakan untuk iOS agar tidak motong status bar iOS
// - StatusBar.currentHeight : Untuk mengukur statusbar pada Android
//    Hal ini tidak berlaku pada iOS
//    Sebelumnya parameternya nya adalah sbb :
//
//    margin-top: ${StatusBar.currentHeight}px;
//
//    Diganti menjadi di bawah ini, artinya :
//    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
//
//    Jika StatusBar.currentHeight ada nilainya (klo iOS akan NULL), maka
//    margin-top: ${StatusBar.currentHeight}px;
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

// Untuk Section search dibiarkan tidak menggunakan flex
const SearchContainer = styled.View`
  padding: 16px;
`;

// Untuk Section List Full diisi sisanya
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
