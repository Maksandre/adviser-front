import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { BOLD } from '../../constants/commonui';
import { AppText } from '../text';
import ConnectionRequisite from './ConnectionRequisite';

const IncomeConnectionRequisite = ({
  item,
  assets,
  onAssetDelete,
  onAssetSelect,
}) => {
  const selectedAssets = assets.filter((a) => a.id === item.assetId);
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>
        {selectedAssets.length > 0
          ? 'Connected assets: '
          : 'You could define parent '}
      </AppText>
      <ConnectionRequisite
        elements={assets}
        selectedElements={selectedAssets}
        buttonText="Asset"
        title="Assets"
        multiple={false}
        onSelect={onAssetSelect}
        onDelete={onAssetDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    fontWeight: BOLD,
  },
});

function mapStateToProps(state) {
  return {
    assets: state.assets,
  };
}

export default connect(mapStateToProps)(IncomeConnectionRequisite);
