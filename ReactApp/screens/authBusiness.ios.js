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

  commit = () => {

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
        <View style={{height: 10,width:AppConfig.windowWidth, backgroundColor:'#ffffff'}}/>
        <View style={styles.uploadPicItem}>
          <Image style={styles.uploadPicExample} source={require('../images/icons/authentication_sl_pic.png')}/>
          <Image style={styles.uploadPicExample} source={require('../images/icons/upload_id_pic.png')}/>
        </View>
        <View style={styles.uploadPicItem}>
          <Image style={styles.uploadPicExample} source={require('../images/icons/authentication_sl_pic_correct.png')}/>
          <Image style={styles.uploadPicExample} source={require('../images/icons/upload_id_pic.png')}/>
        </View>
        <View style={styles.uploadPicItem}>
          <Image style={styles.uploadPicExample} source={require('../images/icons/validation_icon_case3.png')}/>
          <Image style={styles.uploadPicExample} source={require('../images/icons/upload_id_pic.png')}/>
        </View>
        <View style={styles.uploadPicItem}>
          <Image style={styles.uploadPicExample} source={require('../images/icons/validation_icon_case4.png')}/>
          <Image style={styles.uploadPicExample} source={require('../images/icons/upload_id_pic.png')}/>
        </View>
        <View style={{height: 10,width:AppConfig.windowWidth, backgroundColor:'#ffffff'}}/>
        <View style={styles.commitView}>
          <View style={styles.ruleTextView}>
            <Text style={styles.ruleTextTips}>提交验证即表示您已同意</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.ruleText}>《平台服务使用协议》</Text>
            </TouchableOpacity>
          </View>
          <Button
            text={'提交验证'}
            height={45}
            type={'outlined'}
            backgroundColor={'#00bf71'}
            borderColor={'#00bf71'}
            borderRadius={4}
            textColor={'#ffffff'}
            marginLeft={15}
            width={AppConfig.windowWidth - 30}
            style={styles.commitBtn}
            textSize={16}
            onPress={()=>this.commit} />
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
  uploadPicItem: {
    width: AppConfig.windowWidth,
    height: 120,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  uploadPicExample: {
    marginLeft: 25,
    marginRight: 25,
    width: 100,
    height: 100,
    // backgroundColor: '#778899',
  },
  commitView: {
    width: AppConfig.windowWidth,
    height: 100,
    backgroundColor: '#ece8e7',
  },
  ruleTextView: {
    width: AppConfig.windowWidth,
    height: 40,
    backgroundColor: '#ece8e7',
    paddingLeft: 15,
    paddingRight: 15,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  ruleTextTips: {
    fontSize:12,
    color: '#999999'
  },
  ruleText: {
    fontSize: 12,
    color: '#00bf71'
  },
  commitBtn: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

/* Export Component ==================================================================== */
module.exports = AuthBusiness;
module.exports.details = {
  title: 'AuthBusiness'
};
