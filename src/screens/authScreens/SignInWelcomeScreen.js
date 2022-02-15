import React, { useState, useRef, useContext,useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";
import { SignInContext } from "../../contexts/authContext";
import auth from "@react-native-firebase/auth";

export default function SignInWelcomeScreen({ navigation }) {
  const { dispatchSignedIn } = useContext(SignInContext);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: "signed-in" },
        });
      } else {
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: null },
        });
      }
    });
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View
        style={{
          flex: 3,
          paddingTop: 20,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 26,
            color: colors.background2,
            fontWeight: "bold",
          }}
        >
          RESTAURANTÊN KIFŞ BIKIN
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: colors.background2,
            fontWeight: "bold",
          }}
        >
          LI DORA XWE
        </Text>
      </View>

      <View style={{ flex: 4, justifyContent: "center" }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
        </Swiper>
      </View>

      <View
        style={{ flex: 4, justifyContent: "flex-end", marginHorizontal: 20 }}
      >
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button
            title="Têkevinê"
            buttonStyle={parameters.styleButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          ></Button>
        </View>

        <View style={{ marginVertical: 30, marginHorizontal: 20 }}>
          <Button
            title="Hesabek Saz Bikin"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },

  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    height: 42,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
