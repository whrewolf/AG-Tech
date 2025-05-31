// src/components/SearchBar.jsx
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../theme';

const SearchBar = ({value, onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder || 'Search...'}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.woodBrown(0.8)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ivoryWhite(),
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    elevation: 2,
  },
  input: {
    fontSize: 16,
    color: colors.woodBrown(),
  },
});

export default SearchBar;
