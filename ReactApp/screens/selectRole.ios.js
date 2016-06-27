/**
 * Coming Soon
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

// App Globals
import AppStyles from '../styles.ios'
import AppConfig from '../config.ios'

// Components
import Button from '../components/button.ios'

// Screens
import AuthCourier from '../screens/authCourier.ios'
import AuthBusiness from '../screens/authBusiness.ios'

var roleItemHeight = AppConfig.windowWidth / 3 + 30

/* Component ==================================================================== */
class SelectRole extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

  /**
    * Navigates to same scene (for Demo purposes)
    */
  _navigate = (navbarTitle, component) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: component,
      index: 2
    });
  }

  /**
    * RENDER
    */
  render = () => {
    let text = this.props.placeholder || 'Coming soon...'
    // Done
    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <TouchableOpacity activeOpacity={0.7} style={styles.roleItem}
        onPress={()=>this._navigate('快递员身份认证', AuthCourier)}>
          <View style={[styles.menuOrderItem]}>
            <Image source={require('../images/icons/icon_auth_courier.png')} style={styles.menuUserHead_Img} />
            <Text style={[AppStyles.baseText, styles.roleCourier]}>认证成为快递员</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.roleItem}
        onPress={()=>this._navigate('商家身份认证', AuthBusiness)}>
          <View style={[styles.menuOrderItem]}>
            <Image source={require('../images/icons/icon_auth_business.png')} style={styles.menuUserHead_Img} />
            <Text style={[AppStyles.baseText, styles.roleBusiness]}>认证成为商家</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  menuOrderItem: {
    // backgroundColor: '#889900',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
  },
  orderNumber: {
    color: '#333333',
    fontSize: 16,
  },
  roleCourier: {
    color: '#68afff',
    fontSize: 16,
    marginTop: 10,
  },
  roleBusiness: {
    color: '#ffbc2d',
    fontSize: 16,
    marginTop: 10,
  },
  menuUserHead_Img: {
    // marginTop: 40,
    width: roleItemHeight - 30,
    height: roleItemHeight - 30,
  },
  roleItem: {
    height: roleItemHeight,
    marginTop: 20,
    marginBottom: 20,
  },
});

/* Export Component ==================================================================== */
module.exports = SelectRole;
module.exports.details = {
  title: 'SelectRole'
};
