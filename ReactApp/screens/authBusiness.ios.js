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
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

// App Globals
import AppStyles from '../styles.ios'
import AppConfig from '../config.ios'

// Components
import Button from '../components/button.ios'

//
import SelectRole from '../screens/selectRole.ios'

/* Component ==================================================================== */
class AuthBusiness extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  }

  /**
    * Navigates to same scene (for Demo purposes)
    */
  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: AuthBusiness,
      index: 2
    });
  }

  updateText = (text) => {
    this.setState((state) => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
      };
    });
  }

  /**
    * RENDER
    */
  render = () => {
    let text = this.props.placeholder || 'Coming soon...'

    // Done
    return (
      <ScrollView automaticallyAdjustContentInsets={false}
        style={[AppStyles.container,styles.bgColor]}
        contentContainerStyle={[AppStyles.containerCentered, styles.container]}>
        <View style={[AppStyles.paddingHorizontal, styles.titleView]}>
          <View style={{height:1,backgroundColor:'#d3d1d1'}}></View>
          <Text style={styles.titleTips}>请填写您的真实身份信息</Text>
        </View>
        <TextInput
          autoCapitalize="none"
          placeholder="请输入您的姓名"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={(event) => this.updateText(
            'onChange text: ' + event.nativeEvent.text
          )}
          onEndEditing={(event) => this.updateText(
            'onEndEditing text: ' + event.nativeEvent.text
          )}
          onSubmitEditing={(event) => this.updateText(
            'onSubmitEditing text: ' + event.nativeEvent.text
          )}
          onSelectionChange={(event) => this.updateText(
            'onSelectionChange range: ' +
              event.nativeEvent.selection.start + ',' +
              event.nativeEvent.selection.end
          )}
          onKeyPress={(event) => {
            this.updateText('onKeyPress key: ' + event.nativeEvent.key);
          }}
          style={styles.inputText}
        />
        <View style={styles.cutOffLine}/>
        <TextInput
          autoCapitalize="none"
          placeholder="请输入身份证号码"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={(event) => this.updateText(
            'onChange text: ' + event.nativeEvent.text
          )}
          onEndEditing={(event) => this.updateText(
            'onEndEditing text: ' + event.nativeEvent.text
          )}
          onSubmitEditing={(event) => this.updateText(
            'onSubmitEditing text: ' + event.nativeEvent.text
          )}
          onSelectionChange={(event) => this.updateText(
            'onSelectionChange range: ' +
              event.nativeEvent.selection.start + ',' +
              event.nativeEvent.selection.end
          )}
          onKeyPress={(event) => {
            this.updateText('onKeyPress key: ' + event.nativeEvent.key);
          }}
          keyboardType="numbers-and-punctuation"
          style={styles.inputText}
        />
        <View style={styles.cutOffLine}/>
        <TextInput
          autoCapitalize="none"
          placeholder="请输入联系手机"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={(event) => this.updateText(
            'onChange text: ' + event.nativeEvent.text
          )}
          onEndEditing={(event) => this.updateText(
            'onEndEditing text: ' + event.nativeEvent.text
          )}
          onSubmitEditing={(event) => this.updateText(
            'onSubmitEditing text: ' + event.nativeEvent.text
          )}
          onSelectionChange={(event) => this.updateText(
            'onSelectionChange range: ' +
              event.nativeEvent.selection.start + ',' +
              event.nativeEvent.selection.end
          )}
          keyboardType="number-pad"
          onKeyPress={(event) => {
            this.updateText('onKeyPress key: ' + event.nativeEvent.key);
          }}
          style={styles.inputText}
        />
        <View style={styles.cutOffLine}/>
        <TextInput
          autoCapitalize="none"
          placeholder="请输入您的地址"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={(event) => this.updateText(
            'onChange text: ' + event.nativeEvent.text
          )}
          onEndEditing={(event) => this.updateText(
            'onEndEditing text: ' + event.nativeEvent.text
          )}
          onSubmitEditing={(event) => this.updateText(
            'onSubmitEditing text: ' + event.nativeEvent.text
          )}
          onSelectionChange={(event) => this.updateText(
            'onSelectionChange range: ' +
              event.nativeEvent.selection.start + ',' +
              event.nativeEvent.selection.end
          )}
          onKeyPress={(event) => {
            this.updateText('onKeyPress key: ' + event.nativeEvent.key);
          }}
          style={styles.inputText}
        />
        <View style={[AppStyles.paddingHorizontal, styles.titleView]}>
          <View style={{height:1,backgroundColor:'#d3d1d1'}}></View>
          <Text style={styles.titleTips}>请按照示例照片拍摄并上传您的照片</Text>
        </View>
      </ScrollView>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#ffffff',
  },
  titleView: {
    width: AppConfig.windowWidth,
    height: 30,
    backgroundColor: '#ebe8e8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  titleTips: {
    fontSize: 12,
    color: '#999999'
  },
  inputText: {
    height: 40,
    borderWidth: 0.0,
    borderColor: '#777888',
    flex: 1,
    fontSize: 13,
    paddingLeft: 15,
    paddingRight: 15,
  },
  cutOffLine: {
    width: AppConfig.windowWidth,
    height: 1,
    backgroundColor: '#f5f3f3',
  },
});

/* Export Component ==================================================================== */
module.exports = AuthBusiness;
module.exports.details = {
  title: 'AuthBusiness'
};
