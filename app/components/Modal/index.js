import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
 
export default function index({
  modalProps,
  toggleModal,
  wraperStyle,
  is80Pecent,
  is60Pecent,
  children,
}) {
  const getHeight = () => {
    if (is80Pecent) {
      return 0.95;
    }
    if (is60Pecent) {
      return 0.75;
    }

    return 0.5;
  };
  const _renderCloseHnadle = () => {
    return (
      <View style={styles.handleContainer}>
        <View style={styles.handle} />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Modal
        swipeDirection={['down']}
        propagateSwipe={true}
        {...modalProps}
        onSwipeComplete={toggleModal}
        style={{flex: 1, margin: 0, justifyContent: 'flex-end'}}>
        <View style={[{flex: getHeight(), ...styles.wraperStyle}, wraperStyle]}>
          {_renderCloseHnadle()}
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wraperStyle: {bottom: 0, backgroundColor: appColors.white},
  handleContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: scale(3),
  },
  handle: {
    backgroundColor: appColors.black,
    height: scale(5),
    width: '40%',
    borderRadius: scale(5),
  },
});
