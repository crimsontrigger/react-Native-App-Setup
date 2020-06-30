import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, Image} from 'react-native';
import info from '../../assets/10.png';

class SnackBar extends Component {
  constructor() {
    super();

    this.animatedValue = new Animated.Value(50);
    this.ShowSnackBar = false;
    this.HideSnackBar = true;
    this.state = {
      SnackBarInsideMsgHolder: '',
    };
  }

  ShowSnackBarFunction(
    SnackBarInsideMsgHolder = 'Default SnackBar Message...',
    duration = 2000,
  ) {
    if (this.ShowSnackBar === false) {
      this.setState({SnackBarInsideMsgHolder: SnackBarInsideMsgHolder});

      this.ShowSnackBar = true;

      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 400,
      }).start(this.hide(duration));
    }
  }

  hide = duration => {
    this.timerID = setTimeout(() => {
      if (this.HideSnackBar === true) {
        this.HideSnackBar = false;

        Animated.timing(this.animatedValue, {
          toValue: 50,
          duration: 400,
        }).start(() => {
          this.HideSnackBar = true;
          this.ShowSnackBar = false;
          clearTimeout(this.timerID);
        });
      }
    }, 2000);
  };

  SnackBarCloseFunction = () => {
    if (this.HideSnackBar === true) {
      this.HideSnackBar = false;
      clearTimeout(this.timerID);

      Animated.timing(this.animatedValue, {
        toValue: 50,
        duration: 400,
      }).start(() => {
        this.ShowSnackBar = false;
        this.HideSnackBar = true;
      });
    }
  };

  render() {
    return (
      <Animated.View
        style={[
          {transform: [{translateY: this.animatedValue}]},
          styles.SnackBarContainter,
        ]}>
        <Image
          source={info}
          style={{height: 15, width: 15, marginRight: '2%'}}
        />
        <Text numberOfLines={1} style={styles.SnackBarMessage}>
          Passcode mismatch. Re-enter carefully!
        </Text>
      </Animated.View>
    );
  }
}

export default SnackBar;

const styles = StyleSheet.create({
  SnackBarContainter: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#2b2b81',
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    bottom: 0,
    right: 0,
    height: 50,
    paddingLeft: 10,
    paddingRight: 55,
  },

  SnackBarMessage: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Heebo-Medium',
  },

  SnackBarUndoText: {
    color: '#FFEB3B',
    fontSize: 18,
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    padding: 5,
  },
});
