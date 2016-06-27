/**
 * Button
 *
    <Button
      text={text}
      type={'outlined'}
      onPress={()=>{alert('Go To Entry View')}} />
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
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

// App Globals
import AppStyles from '../styles.ios'
import AppConfig from '../config.ios'


/* Component ==================================================================== */
class Button extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['', 'outlined']),
    text: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    text: '点击这里',
  }

  /**
    * RENDER
    */
  render = ()=> {
    let { text, height, borderRadius, borderColor, textColor,textSize, backgroundColor,marginTop, type, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}
        style={[styles.button, type == 'outlined' && styles.buttonOutline, {height: height, borderRadius: borderRadius, borderColor: borderColor, backgroundColor:backgroundColor, marginTop: marginTop}]}>
        <Text style={[AppStyles.baseText, styles.button_text, type == 'outlined' && styles.buttonOutline_text, {fontSize: textSize, color: textColor}]}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}


/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Standard
  button: {
    backgroundColor: AppConfig.primaryColor,
    height: 50,
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button_text: {
    color: "#FFF",
    textAlign: 'center',
    fontSize: 15,
    fontFamily: AppConfig.baseFont,
    fontWeight: '800',
  },

  // Outlined
  buttonOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: AppConfig.primaryColor,
  },
  buttonOutline_text: {
    backgroundColor: '#00000000',
    color: AppConfig.primaryColor,
  },
});


/* Export Component ==================================================================== */
module.exports = Button;
module.exports.details = {
  title: 'Button'
};
