import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
  Platform,
  BackHandler,
  Image,
  Switch,
  Keyboard,
  TextInput,
} from 'react-native';
import {Button} from 'native-base';
import Dropdown_arrow from '../../assets/1.png';
import key from '../../assets/2.png';
import dot from '../../assets/3.png';
import huge_white_box from '../../assets/4.png';
import small_grey_box from '../../assets/5.png';
import big_grey_box from '../../assets/6.png';
import clock from '../../assets/8.png';
import light from '../../assets/9.png';
import info from '../../assets/10.png';
import back_arrow from '../../assets/back_arrow.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ToggleSwitch from './switch';
import PasswordInputText from './passwordInput';
//import SmoothPinCodeInput from './pinInput';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Toast from 'react-native-simple-toast';
import DropDownPicker from 'react-native-dropdown-picker';
// import Snackbar from 'react-native-snackbar';
import SnackBar from './snackbar';
//first_image

class MenuPage extends Component {
  constructor({navigation}, props) {
    super({navigation}, props);
    this.navigation = navigation;
    this.state = {
      isOn: false,
      password: '',
      optInterval0_12: true,
      optInterval12_20: false,
      optServiceMechanic: true,
      optServiceServant: false,
      optServiceBusinessman: false,
      km: '1 km',
    };
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }

  DisplaySnackBar = () => {
    this.refs.ReactNativeSnackBar.ShowSnackBarFunction('Snackbar example');
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
          }}>
          <View
            style={{
              paddingLeft: 15,
              paddingTop: 15,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Icon name="keyboard-arrow-left" size={42} color="#00006f" />

            <ToggleSwitch
              isOn={this.state.isOn}
              onColor="#e8ebfa"
              offColor="#f1f5f9"
              labelStyle={{color: 'black', fontWeight: '900'}}
              size="medium"
              onToggle={isOn => this.setState({isOn: isOn})}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 15,
              }}>
            <DropDownPicker
                items={[
                    {label: '1 km', value: '1 km'},
                    {label: '2 km', value: '2 km'},
                    {label: '3 km', value: '3 km'},
                    {label: '4 km', value: '4 km'},
                    {label: '5 km', value: '5 km'},
                    {label: '6 km', value: '6 km'},
                    {label: '7 km', value: '7 km'},
                ]}
                itemStyle={{}}

                labelStyle={{
                    fontSize: 20,
                    color: '#00006f',
                    fontFamily: 'Heebo-Medium',
                }}
                placeholderStyle={{
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
                dropDownMaxHeight={320}
                max='7'
                defaultValue={this.state.km}
                containerStyle={{width: 100}}

                onChangeItem={item => this.setState({
                    country: item.value
                })}
                 onChangeItem={item => this.setState({
                    km: item.value
                })}
            />
            </View>
          </View>
          <View
            style={{
              padding: 40,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                color: '#00006f',
                fontFamily: 'Heebo-Medium',
                fontWeight: 'bold',
              }}>
              Set Passcode
            </Text>
            <Image
              source={key}
              style={{
                height: 13,
                width: 30,
                marginTop: '2%',
                marginLeft: '2%',
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: '#2b2b81',
                fontSize: 15,
                paddingLeft: 40,
                paddingBottom: 15,
                fontFamily: 'Heebo-Medium',
              }}>
              Enter your new 6 digit passcode
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
                style={{
                 alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
                borderColor: '#fff',
                borderWidth: 2,
                width: '100%',
                borderRadius: 10,
              }}>
              <SmoothPinCodeInput
                codeLength={6}
                cellStyle={{
                  width: 30,
                  borderBottomWidth: 2,
                  borderColor: 'gray',
                }}
                cellStyleFocused={{
                  borderColor: 'black',
                }}
                placeholder={
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 25,
                      opacity: 0,
                      backgroundColor: 'blue',
                    }}
                  />
                }
                mask={
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 25,
                      backgroundColor: '#2b2b81',
                    }}
                  />
                }
                maskDelay={1000}
                password={true}
                value={this.state.password}
                onTextChange={password => this.setState({password})}
              />
            </View>
          </View>
          <View style={{padding: 30}}>
            <TextInput
              selectionColor={'red'}
              multiline={true}
              numberOfLines={10}
              placeholder="Write Here"
              style={{
                borderColor: '#d8d8d9',
                borderWidth: 2,
                borderRadius: 10,
                height: 145,
                textAlignVertical: 'top',
                fontSize: 17,
                padding: 10,
                color: '#2b2b81',
                fontFamily: 'Heebo-Medium',
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Button
              onPress={()=>{Toast.show("Now is clicked")}}
              style={{
                width: 145,
                height: 55,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 7,
              }}>
              <Image
                source={clock}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: '2%',
                  marginRight: '2%',
                }}
              />
              <Text
                style={{
                  color: '#2b2b81',
                  fontSize: 20,
                  fontFamily: 'Heebo-Medium',
                }}>
                Now
              </Text>
            </Button>
            <Button
              onPress={()=>{Toast.show("View all is clicked")}}
              style={{
                width: 75,
                height: 45,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 7,
              }}>
              <Text
                style={{
                  color: '#2b2b81',
                  fontSize: 15,
                  fontFamily: 'Heebo-Medium',
                }}>
                View All
              </Text>
            </Button>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              margin: 10,
              padding: 10,
              overflow:'hidden',
            }}>
            <Button
            onPress={()=>{this.setState({optInterval0_12:true, optInterval12_20:false})}}
              style={{
                width: 125,
                height: 45,
                backgroundColor: this.state.optInterval0_12?'#2b2b81':'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 7,
                marginRight: 20,
              }}>
              <View
                style={{
                  flex: 3,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    color: !this.state.optInterval0_12?'#2b2b81':'white',
                    fontSize: 20,
                    marginLeft: '25%',
                    fontFamily: 'Heebo-Medium',
                  }}>
                  0 - 12
                </Text>
              </View>

              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: !this.state.optInterval0_12?'#2b2b81':'white',
                    fontSize: 10,
                    flex: 1,
                    fontFamily: 'Heebo-Medium',
                  }}>
                  Free
                </Text>
              </View>
            </Button>
            <Button
              onPress={()=>{this.setState({optInterval0_12:false, optInterval12_20:true})}}
              style={{
                width: 125,
                height: 45,
                backgroundColor: this.state.optInterval12_20?'#2b2b81':'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 7,
              }}>
              <View
                style={{
                  flex: 3,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    color: !this.state.optInterval12_20?'#2b2b81':'white',
                    fontSize: 20,
                    marginLeft: '25%',
                    fontFamily: 'Heebo-Medium',
                  }}>
                  12 - 20
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Icon
                  name="euro-symbol"
                  size={6}
                  color= {!this.state.optInterval12_20?'#2b2b81':'white'}
                  style={{paddingBottom: '75%'}}
                />
                <Text
                  style={{
                    color: !this.state.optInterval12_20?'#2b2b81':'white',
                    fontSize: 10,
                    flex: 1,
                    paddingBottom: '75%',
                    fontFamily: 'Heebo-Medium',
                  }}>
                  50
                </Text>
              </View>
            </Button>
            <Button
                style={{
                  marginLeft:20,
                  opacity:0.1,
                  width: 125,
                  height: 45,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,

                  elevation: 6,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}>
                <View
                  style={{
                    flex: 3,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text
                    style={{
                      color: '#2b2b81',
                      fontSize: 20,
                      marginLeft: '25%',
                      fontFamily: 'Heebo-Medium',
                    }}>
                    20 - 30
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <Icon
                    name="euro-symbol"
                    size={6}
                    color="#2b2b81"
                    style={{paddingBottom: '75%'}}
                  />
                  <Text
                    style={{
                      color: '#2b2b81',
                      fontSize: 10,
                      flex: 1,
                      paddingBottom: '75%',
                      fontFamily: 'Heebo-Medium',
                    }}>
                    50
                  </Text>
                </View>
              </Button>

          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              source={light}
              style={{
                height: 20,
                width: 20,
                marginTop: '2%',
                marginRight: '2%',
              }}
            />
            <Button
              onPress={() => {
                this.setState({
                  optServiceMechanic: true,
                  optServiceBusinessman: false,
                  optServiceServant: false,
                });
              }}
              style={{
                height: 35,
                marginRight: '3%',
                width: 85,
                borderRadius:5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 10,
                backgroundColor: !this.state.optServiceMechanic?'white':'#2b2b81',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                borderColor: '#393185',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  color: this.state.optServiceMechanic?'white':'#2b2b81',
                  fontSize: 13,
                  fontFamily: 'Heebo-Medium',
                }}>
                Mechanic
              </Text>
            </Button>
            <Button
              onPress={() => {
                this.setState({
                  optServiceMechanic: false,
                  optServiceServant: true,
                  optServiceBusinessman: false,
                });
              }}
              style={{
                height: 35,
                marginRight: '3%',
                width: 85,
                borderRadius:5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 10,
                backgroundColor: !this.state.optServiceServant?'white':'#2b2b81',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                borderColor: '#393185',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  color: this.state.optServiceServant?'white':'#2b2b81',
                  fontSize: 13,
                  fontFamily: 'Heebo-Medium',
                }}>
                Servant
              </Text>
            </Button>
            <Button
              onPress={() => {
                this.setState({
                  optServiceMechanic: false,
                  optServiceBusinessman: true,
                  optServiceServant: false,
                });
              }}
              style={{
                height: 35,
                marginRight: '3%',
                width: 105,
                borderRadius:5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 7,
                backgroundColor: !this.state.optServiceBusinessman?'white':'#2b2b81',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                borderColor: '#393185',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  color: this.state.optServiceBusinessman?'white':'#2b2b81',
                  fontSize: 13,
                  fontFamily: 'Heebo-Medium',
                }}>
                Buisnessman
              </Text>
            </Button>
          </View>
          <View
            style={{
              paddingTop: 50,
              paddingLeft: 20,
              paddingRight: 20,
              height: 60,
            }}>
            <Button
              // onPress={() => {
              //   Snackbar.show({
              //     text: 'Hello world',
              //     duration: Snackbar.LENGTH_SHORT,
              //   });
              // }}
              onPress={this.DisplaySnackBar}
              style={{
                height: 60,
                backgroundColor: '#2b2b81',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontFamily: 'Heebo-Medium',
                }}>
                Post
              </Text>
            </Button>
          </View>
          <SnackBar ref="ReactNativeSnackBar" />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default MenuPage;
