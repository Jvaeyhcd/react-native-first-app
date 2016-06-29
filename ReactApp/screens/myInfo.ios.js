/**
 *  ____    ___   _        ___  _____  ____  ____  ____
 * |      /    | T      /  _]/ ___/ /    T|    |    * |  o  )Y     Y| |     /  [_(   _ Y  o  ||  o  )  o  )
 * |   _/ |  O  || l___ Y    _]__  T|     ||   _/|   _/
 * |  |   |     ||     T|   [_ /   ||  _  ||  |  |  |
 * |  |   l     !|     ||     T    ||  |  ||  |  |  |
 * l__j    ___/ l_____jl_____j ___jl__j__jl__j  l__j
 *
 * Polesapp reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
'use strict';
import React, {
  PropTypes,
} from 'react';

import {
  View,
} from 'react-native';

export default class MyInfoView extends React.Component {
  constructor(props) {
    super(props);
  }

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

  render() {
    return (
      <View></View>
    );
  }
}
MyInfoView.propTypes = {};
MyInfoView.defaultProps = {};
