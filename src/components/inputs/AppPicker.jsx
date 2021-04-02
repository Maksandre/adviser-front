// https://github.com/DieTime/react-native-date-picker

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RADIUS } from '../../constants/commonui';

const AppPicker = ({
  value,
  elements,
  onChange,
  height,
  fontSize,
  textColor,
  markColor,
  markHeight,
  markWidth,
  pickerHeight,
  pickerWidth,
}) => {
  const dHeight = Math.round(height / 1); // TODO to prop

  const mHeight = markHeight || Math.min(dHeight, 65);
  const mWidth = markWidth || '70%';

  const scrollRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current.scrollTo({
        y: dHeight * elements.indexOf(value),
        animated: false,
      });
    }, 1); // because of Modal
  }, []);

  const handleChange = ({ nativeEvent }) => {
    const element = nativeEvent.contentOffset.y / dHeight;
    onChange(elements[element]);
  };

  return (
    <View style={[styles.picker, { height: pickerHeight, width: pickerWidth }]}>
      <View style={styles.block}>
        <View
          style={[
            styles.mark,
            {
              top: (height - mHeight) / 2,
              backgroundColor: markColor || 'rgba(0, 0, 0, 0.05)',
              height: mHeight,
              width: mWidth,
            },
          ]}
        />
        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          snapToInterval={dHeight}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={0}
          onScroll={handleChange}
        >
          {elements.map((value, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  scrollRef.current.scrollTo({
                    y: dHeight * index,
                    animated: true,
                  });
                }}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: fontSize || 22,
                      color: textColor || '#000000',
                      marginBottom:
                        index === elements.length - 1
                          ? height / 2 - dHeight / 2
                          : 0,
                      marginTop: index === 0 ? height / 2 - dHeight / 2 : 0,
                      lineHeight: dHeight,
                      height: dHeight,
                    },
                  ]}
                >
                  {value}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  scroll: {
    width: '100%',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  mark: {
    position: 'absolute',
    borderRadius: RADIUS,
  },
});

export default AppPicker;
