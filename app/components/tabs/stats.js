import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../styles/tab'

class StatsTab extends Component {

    render() {

        const { tintColor } = this.props

        return <Icon
            name="show-chart"
            style={[ styles.icon, { color: tintColor }]}
        />
    }
}

const styles = StyleSheet.create({
    ...Styles,
    // icon: {
    //     marginTop: 14,
    //     fontSize: 20
    // },
});

export default StatsTab
