import React from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';

// Несет в себе логику обновления position у dragged компонента

function AppDraggableList({
  data: initialData,
  onDragEnd,
  renderItem,
  keyExtractor,
  footerComponent,
  footerStyle,
}) {
  const handleDragEnd = ({ data, from, to }) => {
    if (from !== to) {
      const elementBefore = from > to ? initialData[to - 1] : initialData[to];
      const elementAfter = from > to ? initialData[to] : initialData[to + 1];

      const positionBefore = elementBefore?.position;
      const positionAfter = elementAfter?.position;

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

      onDragEnd(data[to]);
    }
  };

  return (
    <DraggableFlatList
      data={initialData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onDragEnd={handleDragEnd}
      ListFooterComponent={footerComponent}
      ListFooterComponentStyle={footerStyle}
    />
  );
}

export default AppDraggableList;
