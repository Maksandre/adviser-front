import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { BOLD } from '../../constants/commonui';
import { AppText } from '../text';

import ConnectionRequisite from './ConnectionRequisite';

const ExpensesConnectionRequisite = ({
  item,
  assets,
  liabilities,
  onLiabilityAdd,
  onLiabilityDelete,
  onAssetAdd,
  onAssetDelete,
}) => {
  const selectedAssets = assets.filter((a) => a.id === item.assetId);
  const selectedLiabilities = liabilities.filter(
    (l) => l.id === item.liabilityId,
  );
  const connectedToAsset = selectedAssets.length > 0;
  const connectedToLiability = selectedLiabilities.length > 0;
  const connected = connectedToAsset || connectedToLiability;

  return (
    <View style={styles.container}>
      {!connected && <AppText style={styles.text}>You may connect </AppText>}
      {connected && <AppText style={styles.text}>{`Connected to  `}</AppText>}
      {(!connected || connectedToAsset) && (
        <ConnectionRequisite
          selectedElements={selectedAssets}
          title="Assets"
          buttonText="Asset"
          elements={assets}
          multiple={false}
          onDelete={onAssetDelete}
          onSelect={onAssetAdd}
        />
      )}
      {!connected && <AppText style={styles.text}> or </AppText>}
      {(!connected || connectedToLiability) && (
        <ConnectionRequisite
          selectedElements={selectedLiabilities}
          buttonText="Liability"
          title="Liabilies"
          elements={liabilities}
          multiple={false}
          onDelete={onLiabilityDelete}
          onSelect={onLiabilityAdd}
        />
      )}
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
    liabilities: state.liabilities,
  };
}

export default connect(mapStateToProps)(ExpensesConnectionRequisite);
