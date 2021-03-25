import React from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';

function AppDraggableList(props) {
  const handleDragEnd = ({ data, from, to }) => {
    if (from !== to) {
      const elementBefore = from > to ? props.data[to - 1] : props.data[to];
      const elementAfter = from > to ? props.data[to] : props.data[to + 1];

      const positionBefore = elementBefore?.position;
      const positionAfter = elementAfter?.position;

      console.log('before', elementBefore);
      console.log('after', elementAfter);

      let newPosition;
      if (positionAfter === undefined) {
        newPosition = positionBefore > 0 ? 0 : positionBefore - 1;
      } else if (to > positionBefore && to < positionAfter) {
        newPosition = to;
      } else if (positionBefore + 1 >= positionAfter) {
        newPosition = (positionAfter - positionBefore) / 2 + positionBefore;
      } else {
        newPosition = positionAfter + 1;
      }

      data[to].position = newPosition;

      props.onDragEnd(data[to]);
    }
  };

  return (
    <DraggableFlatList
      data={props.data}
      renderItem={props.renderItem}
      keyExtractor={props.keyExtractor}
      onDragEnd={handleDragEnd}
      ListFooterComponent={props.footerComponent}
      ListFooterComponentStyle={props.footerStyle}
    />
  );
}

export default AppDraggableList;
