import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import SearchBar from '../../components/SearchBar';
import {colors} from '../../theme';

const data = [
  {id: '1', title: 'Ukiran Bali'},
  {id: '2', title: 'Ukiran Dayak'},
  {id: '3', title: 'Ukiran Jepara'},
  {id: '4', title: 'Ukiran Melayu'},
  {id: '5', title: 'Ukiran Toraja'},
];

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <SearchBar value={query} onChangeText={setQuery} onSubmit={() => {}} />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('ukiranDetail', {id: parseInt(item.id)})
            }>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Tidak ada hasil</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.woodBrown(0.1)},
  item: {
    backgroundColor: colors.white(),
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  text: {color: colors.woodBrown(), fontSize: 16},
  empty: {textAlign: 'center', marginTop: 20, color: colors.darkWood()},
});

export default SearchScreen;
