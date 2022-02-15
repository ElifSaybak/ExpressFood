import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import { ceil } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import {colors, parameters} from '../global/styles'



export default function HomeHeader({navigation}) {

    const BadgeIcon = withBadge(0)(Icon);

    return (
        <View style={styles.header}>
            <View style= {{alignItems:'center', justifyContent:'center', marginLeft:15}}>
                <Icon
                    type="material-community"
                    name="menu"
                    color={colors.cardbackground}
                    size={32}
                    onPress={() => {
                        navigation.toggleDrawer()
                    }}
                    
                />
            </View>
            
            <View style= {{alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.headerText}>
                    XWEŞ XWARIN
                </Text>
            </View>

            <View style= {{marginRight:20, alignItems:'center', justifyContent:'center'}}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={32}
                    color={colors.cardbackground}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        justifyContent:"space-between",
    },

    headerText: {
        color: colors.cardbackground,
        fontSize: 22,
        fontWeight: "bold",
    }
})