import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
} from "react-native";
import { colors, parameters, title } from "../../global/styles";
import Header from "../../components/Header";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { SignInContext } from "../../contexts/authContext";

import { Formik } from "formik";
import auth from "@react-native-firebase/auth";

export default function SignInScreen({ navigation }) {
  const { dispatchSignedIn } = useContext(SignInContext);

  const [textInput2Fossued, setTextInput2Fossued] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  async function signIn(data) {
    try {
      const { password, email } = data;
      const user = await auth().signInWithEmailAndPassword(email, password);
      if (user) {
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: "signed-in" },
        });
      } 
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Header title="HESABÊ MIN" type="arrow-left" navigation={navigation} />

      <View style={{ marginLeft: 20, marginTop: 15 }}>
        <Text style={title}>Têketin</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>
          Ji kerema xwe emaile û şîfreya xwe binivîse
        </Text>
        <Text style={styles.text1}>bi hesabê xwe qeydkirî</Text>
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          signIn(values);
        }}
      >
        {(props) => (
          <View>
            <View style={{ marginTop: 20 }}>
              <View>
                <TextInput
                  style={styles.TextInput1}
                  placeholder="Email"
                  ref={textInput1}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
              </View>
              <View style={styles.TextInput2}>
                <Animatable.View
                  animation={textInput2Fossued ? "" : "fadeInLeft"}
                  duration={400}
                >
                  <Icon
                    name="lock"
                    iconStyle={{ color: colors.grey3 }}
                    type="material"
                    style={{}}
                  />
                </Animatable.View>
                <TextInput
                  style={{ width: "80%" }}
                  placeholder="Şîfre"
                  ref={textInput2}
                  onFocus={() => {
                    setTextInput2Fossued(false);
                  }}
                  onBlur={() => {
                    setTextInput2Fossued(true);
                  }}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                />
                <Animatable.View
                  animation={textInput2Fossued ? "" : "fadeInLeft"}
                  duration={400}
                >
                  <Icon
                    name="visibility-off"
                    iconStyle={{ color: colors.grey3 }}
                    type="material"
                    style={{ marginRight: 10 }}
                  />
                </Animatable.View>
              </View>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
              <Button
                title="Têkevinê"
                buttonStyle={parameters.styleButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
              ></Button>
            </View>
          </View>
        )}
      </Formik>

      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
          Şîfreya xwe ji bîr kir ?
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          AN
        </Text>
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 5 }}>
        <SocialIcon
          title="Bi Facebookê re Têkeve"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 5 }}>
        <SocialIcon
          title="Bi Googlê re Têkeve"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginTop: 5, marginLeft: 20 }}>
        <Text style={{ ...styles.text1 }}>Nû ji Xweş Xwarin re ?</Text>
      </View>

      <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 0,
    borderRadius: 12,
    marginBottom: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingLeft: 15,
    height: 50,
  },

  TextInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    height: 50,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },

  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: "#ff8c52",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
