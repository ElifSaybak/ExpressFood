import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, parameters } from '../global/styles'
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';

export default function Header({title, type, navigation}) {
    return (
        <SafeAreaView style={styles.header}>
            <View style= {{marginLeft:20}}>
                <Icon
                    type="material-community"
                    name={type}
                    color={colors.headerText}
                    size={28}
                    onPress={() => {navigation.goBack()}}
                    
                />
            </View>
            <View>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },

    headerText: {
        color: colors.headerText,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft:30,
    }
})