import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
// import { TextField } from 'react-native-material-textfield';
import {Input} from 'native-base';

class PasswordInputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icEye: 'visibility-off',
      isPassword: true,
    };
  }

  getRef = ref => {
    if (this.props.getRef) this.props.getRef(ref);
  };

  changePwdType = () => {
    const {isPassword} = this.state;
    // set new state value
    this.setState({
      icEye: isPassword ? 'visibility' : 'visibility-off',
      isPassword: !isPassword,
    });
  };

  render() {
    const {iconSize, iconColor, label, style} = this.props;
    const {icEye, isPassword} = this.state;

    return (
      <View style={style}>
        <TextInput
          keyboardType="numeric"
          {...this.props}
          ref={this.getRef}
          secureTextEntry={isPassword}
          label={label}
          style={{
            fontSize: 40,
            color: '#2b2b81',
            borderColor: '#d8d8d9',
            borderWidth: 2,
            width: 150,
            height: 50,
            padding: 0,
            marginLeft: 10,
            textAlignVertical: 'center',
          }}
        />
        {/* <Icon
          style={styles.icon}
          name={icEye}
          size={iconSize}
          color={iconColor}
          onPress={this.changePwdType}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 33,
    right: 0,
  },
});

PasswordInputText.defaultProps = {
  iconSize: 10,
  label: 'Password',
  iconColor: 'yellow',
};

// PasswordInputText.propTypes = {
//     iconSize: PropTypes.number,
//     label: PropTypes.string,
//     iconColor: PropTypes.string
// };

export default PasswordInputText;
