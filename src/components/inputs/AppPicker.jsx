import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLOR } from '../../constants/colors.js';

const AppPicker = ({
  value,
  elements,
  onChange,
  height = 120,
  width = '100%',
  elementHeight,
  textStyle,
  markStyle,
  disabled,
}) => {
  const elHeight = elementHeight ? elementHeight : Math.round(height / 2.2);

  const mHeight = markStyle?.height || Math.min(elHeight, 60);
  const mWidth = markStyle?.width || '100%';

  const scrollRef = useRef(null);
  useEffect(() => {
    if (value !== undefined) {
      setTimeout(() => {
        // because of Modal
        scrollRef.current.scrollTo({
          y: elHeight * (value !== null ? elements.indexOf(value) : 0),
          animated: false,
        });
      }, 1);
    }
  }, [value]);

  const handleChange = ({ nativeEvent }) => {
    const element = nativeEvent.contentOffset.y / elHeight;
    onChange(elements[element]);
  };

  return (
    <View style={[styles.picker, { height, width }]}>
      <View style={styles.block}>
        <View
          style={[
            styles.mark,
            {
              top: (height - mHeight) / 2,
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              height: mHeight,
              width: mWidth,
            },
            markStyle,
          ]}
        />
        <ScrollView
          scrollEnabled={!disabled}
          ref={scrollRef}
          style={styles.scroll}
          snapToInterval={elHeight}
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
                    y: elHeight * index,
                    animated: true,
                  });
                }}
                disabled={disabled}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      marginBottom:
                        index === elements.length - 1
                          ? height / 2 - elHeight / 2
                          : 0,
                      marginTop: index === 0 ? height / 2 - elHeight / 2 : 0,
                      lineHeight: elHeight,
                    },
                    textStyle,
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
    color: COLOR.BLACK,
  },
  mark: {
    position: 'absolute',
  },
});

export default AppPicker;
