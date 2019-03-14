import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
  Button,
  RefreshControl,
  Alert 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaView, } from 'react-navigation';
import CardToDo from '../../components/CardToDo';
import CardMemo from '../../components/CardMemo';
import CardShowLog from '../../components/CardShowLog';


const userToken = "778TIlaNHBcW1lwvk3dZ1HuTuPv1";



// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


const items_Text = [
  {
    name: "標題們",
    id: 0,
    children: [{
      title: "1月3日臨時動議",
      bady: "的確有這種風險，有關軍教課稅問題，有分別不同的狀況，只有我們台灣降半旗，大家都認為那是炒熱房地產價錢的元凶，理念是一致的，有些很過得去的家庭，我對選舉也不外行，賴委員可能不知道以下的數字，您一向都非常努力爭取桃園地區。",
      id: 20,
    }, {
      title: "2月起道路外開放",
      bady: "的確有這種風險，有關軍教課稅問題，有分別不同的狀況，只有我們台灣降半旗，大家都認為那是炒熱房地產價錢的元凶，理念是一致的，有些很過得去的家庭，我對選舉也不外行，賴委員可能不知道以下的數字，您一向都非常努力爭取桃園地區的建設。變調情人節，他絕對是個傳奇人物。",
      id: 21,
    }, {
      title: "性別",
      bady: "內容",
      id: 22,
    }, {
      title: "職稱",
      bady: "內容",
      id: 23,
    }, {
      title: "常態組別",
      bady: "內容",
      id: 24,
    }, {
      title: "是否全職",
      bady: "內容",
      id: 25,
    }, {
      title: "備註",
      bady: "內容",
      id: 26,
    },]
  },
]


class Card_Top extends React.Component {


  // 滑动tab
  renderScrollableTab() {
    return (
      <View style={{ flex: 1, padding: 15, }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-around" }}>
          <Text style={{ fontSize: 42, color: '#FFFFFF', paddingRight: 15 }}>{"生態組"}</Text>
          <Text style={{ fontSize: 22, color: '#FFFFFF', paddingLeft: 15, paddingVertical: 10 }}>{"巨木步道開路"}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 22, color: '#FFFFFF', paddingLeft: 15, paddingVertical: 10 }}>{"共事人員"}</Text>
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>{"A"}</Text>
        </View>
      </View>
      ////待實作for迴圈自動填入
    )
  }

  render() {
    return (
      <View style={styles.card_Top}>
        {this.renderScrollableTab()}
      </View>
    );
  }
}
class Card_Body extends React.Component {


  // 滑动tab
  renderScrollableTab() {
    return (
      <View style={{ flex: 1, padding: 15, }}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ fontSize: 22, color: '#4A667C' }}>{"特別備註"}</Text>
          {/* <Icon>{items_Text[0].children[0].name }</Icon> */}
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>

          <Text style={{ fontSize: 24, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>{"正常出勤、暑假我來了"}</Text>
        </View>
      </View>
      ////待實作for迴圈自動填入
    )
  }

  render() {
    return (
      <View style={styles.card_Body}>
        {this.renderScrollableTab()}
      </View>
    );
  }
}


class Card_Button extends React.Component {


  // 滑动tab
  renderScrollableTab() {
    return (
      <View style={{ flex: 1, padding: 15, }}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ fontSize: 22, color: '#4A667C' }}>{"本月出勤狀況"}</Text>
          {/* <Icon>{items_Text[0].children[0].name }</Icon> */}
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#8D8D8D' }}>{"正常出勤：18天："}</Text>
          <Text style={{ fontSize: 20, color: '#8D8D8D' }}>{"請假：18天"}</Text>
          <Text style={{ fontSize: 20, color: '#8D8D8D' }}>{"缺曠：18天"}</Text>

        </View>
      </View>
      ////待實作for迴圈自動填入
    )
  }

  render() {
    return (
      <View style={styles.card_Button}>
        {this.renderScrollableTab()}
      </View>
    );
  }
}

export default class Works extends Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
    };
  }
  componentDidMount() {
    //检测网络是否连接
    this.JSON_Post();
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.JSON_Post();

    // this.setState({refreshing: false});
  }
  JSON_Post = () => {
    // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
    let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getWork';

    fetch(url, {
      method: 'POST',
      // headers 加入 json 格式
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        "uid":"778TIlaNHBcW1lwvk3dZ1HuTuPv1"

      })
    }).then((response) => {
      return response.json();
    }).then((jsonData) => {
      console.warn(jsonData);
      console.warn(jsonData.excutionResult);
      if (jsonData.excutionResult == "success") {
        Alert.alert("更新成功");
        this.setState({ refreshing: false });
        // this.forceUpdate();
      }
      else {
        Alert.alert("更新失敗", "請檢查網路");
        this.setState({ refreshing: false });
        // this.forceUpdate();
      }
    }).catch((err) => {
      console.warn('錯誤:', err);
      Alert.alert("指派失敗", "請檢查網路");
      this.setState({ refreshing: false });
      // this.forceUpdate();
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
     <ScrollView style={styles.Scrollcontainer}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}/>}>



          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Card_Top/> */}

            <CardToDo />
            <CardMemo />
            <CardShowLog />
            {/* <Card_Body/> */}
            {/* <Card_Button/> */}
            {/* <Text   >Home!</Text>
<Icon name="battery-full" size={30} color="#6787A0" />
<Icon name="battery-three-quarters" size={30} color="#900" />
<Icon name="battery-half" size={30} color="#900" />
<Icon name="battery-quarter" size={30} color="#900" />
<Icon name="battery-empty" size={30} color="#900" />
<Icon name="bed" size={30} color="#900" />
<Icon name="american-sign-language-interpreting" size={30} color="#777" /> */}

          </View>

        </ScrollView>
      </SafeAreaView>


    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',


  },
  Scrollcontainer: {
    flex: 1,
    padding: 10,




  }, centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  card_Top: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.55,
    backgroundColor: '#7094B1',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: 10,
  }, card_Body: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.3,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: 10,
  },
  card_Button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.45,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: 10,
  },
  ButtonCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.3,
    height: width * 0.6,
    backgroundColor: '#ededed',
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
});