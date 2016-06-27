/**
 * Menu Contents
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
  ScrollView,
} from 'react-native'

// App Globals
import AppStyles from '../styles.ios'
import AppConfig from '../config.ios'

// Screens
import Index from '../screens/tabbar.ios'
import ComingSoon from '../screens/soon.ios'
import FormExample from '../screens/forms.ios'
import ListViewExample from '../screens/listview.ios'

// Components
import Button from './button.ios'

const ReactNative = require('react-native');
const { Dimensions, Animated, } = ReactNative;
const deviceScreen = Dimensions.get('window');

/* Component ==================================================================== */
class Menu extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      menu: [
        {title: '我的消息', image: require('../images/icons/leftbar_icon_msg.png'), component: Index},
        {title: '我的钱包', image: require('../images/icons/leftbar_icon_wallet.png'), component: FormExample},
        {title: '邀请有奖', image: require('../images/icons/leftbar_icon_recommend.png'), component: ListViewExample, props: {noImages: true}},
        {title: '平台手册', image: require('../images/icons/leftbar_icon_handbook.png'), component: ListViewExample},
        {title: '常见问题', image: require('../images/icons/leftbar_icon_question.png'), component: ListViewExample},
        {title: '系统通知', image: require('../images/icons/leftbar_icon_settings.png'), component: ListViewExample},
      ],
    };
  }

  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  }

  /**
    * RENDER
    */
  render = () => {
    let { navigate } = this.props;
    let { menu } = this.state;

    // Build the actual Menu Items
    let menuItems = [];
    menu.map((item)=>{
      let { title, image, component, props } = item;

      menuItems.push(
        <TouchableOpacity key={'menu-item-'+title}
          onPress={()=>navigate(title, component, props)}>
          <View style={[styles.menuItem]}>
            <Image source={image} style={styles.menuItem_Image} />
            <Text style={[AppStyles.baseText, styles.menuItem_text]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={[styles.menuContainer]}>
        <View style={[styles.menuHeadContainer]}>
          <TouchableOpacity activeOpacity={0.7}
          onPress={()=>navigate('我的资料', FormExample)}>
            <View style={styles.menuUserInfoContainer}>
              <Image source={require('../images/icons/default_icon_man.png')} style={styles.menuUserHead_Img} />
              <Text style={[AppStyles.baseText, styles.menuUserName_Text]}>黄成达</Text>
            </View>
          </TouchableOpacity>
          <Button
            text={'申请认证'}
            type={'outlined'}
            onPress={()=>navigate('申请认证', FormExample)}
            height={26}
            borderRadius={13}
            borderColor={'#ffffff'}
            textColor={'#ffffff'}
            textSize={12}
            backgroundColor={'#67c3ce'}
            marginTop={10}/>

          <View style={styles.menuOrderView}>
            <TouchableOpacity activeOpacity={0.7}
            onPress={()=>navigate('我的发单', FormExample)}>
              <View style={[styles.menuOrderItem, {width:deviceScreen.width * 4 / 10}]}>
                <Text style={[AppStyles.baseText, styles.orderNumber]}>12</Text>
                <Text style={[AppStyles.baseText, styles.orderNumberTips]}>我的发单</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.menuCutOffLine}></View>
            <TouchableOpacity activeOpacity={0.7}
            onPress={()=>navigate('我的接单', FormExample)}>
              <View style={[styles.menuOrderItem, {width:deviceScreen.width * 4 / 10}]}>
                <Text style={[AppStyles.baseText, styles.orderNumber]}>16</Text>
                <Text style={[AppStyles.baseText, styles.orderNumberTips]}>我的接单</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView automaticallyAdjustContentInsets={false} style={[styles.menu]}>
          {menuItems}
        </ScrollView>
      </View>
    );
  }
}


/* Styles ==================================================================== */
const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: "#3f4b57",
  },
  menuHeadContainer: {
    // flex: 1,
    left: 0,
    right: 0,
    height: 250,
    backgroundColor: "#67c3ce",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
  },
  menuUserInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
  },
  scrollMenu: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    height: AppConfig.windowHeight,
    backgroundColor: "#3f4b57",
    padding: 20,
    paddingTop: AppConfig.statusBarHeight,
  },
  menu: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    height: AppConfig.windowHeight,
    backgroundColor: "#3f4b57",
    padding: 20,
    paddingTop: AppConfig.statusBarHeight,
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    borderBottomWidth: 1,
    borderBottomColor: "#3b4753",
    paddingBottom: 15,
    paddingTop: 15,
  },
  menuItem_text: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
    flex: 1,
    color: "#EEE"
  },
  menuItem_Image: {
    width: 20,
    height: 20,
    // backgroundColor: "#889900",
  },
  menuUserHead_Img: {
    // marginTop: 40,
    width: 80,
    height: 80,
  },
  menuUserName_Text: {
    marginTop: 5,
    fontSize: 16,
    color: '#FFFFFF'
  },
  menuOrderView: {
    // backgroundColor: '#889900',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  menuOrderItem: {
    // backgroundColor: '#889900',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
  },
  orderNumber: {
    color: '#ffffff',
    fontSize: 16,
  },
  orderNumberTips: {
    color: '#ffffff',
    fontSize: 12,
  },
  menuCutOffLine: {
    backgroundColor: '#ffffff',
    height: 30,
    width: 1,
  }
});

/* Export Component ==================================================================== */
module.exports = Menu;
module.exports.details = {
  title: 'Menu'
};
