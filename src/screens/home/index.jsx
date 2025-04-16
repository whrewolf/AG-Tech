import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import {colors} from '../../theme';
import React, {useState} from 'react';
import {SearchNormal, ShoppingCart, UserOctagon} from 'iconsax-react-native';

export default function Homepage({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.icons}>
          {/* Tambahkan ikon jika perlu */}
        </TouchableOpacity>
        <Text style={styles.title}>UKIRAN NUSANTARA</Text>
        <TouchableOpacity style={styles.icons}>
          <Text style={styles.notif}>3</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cari kerajinan ukir..."
          placeholderTextColor={colors.woodBrown(0.8)}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Pressable style={styles.searchButton}>
          <SearchNormal size={20} color={colors.gold()} />
        </Pressable>
      </View>

      {/* Product Listings */}
      <ScrollView contentContainerStyle={styles.productContainer}>
        {products.map((product, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ukiranDetail', {id: index + 1})
            }>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const products = [
  {
    image: require('../../assets/images/ukiran-jepara.jpeg'),
    title: 'Ukiran Kayu Jepara',
    price: 'Rp 1.200.000',
    description:
      'Ukiran khas Jepara yang terkenal dengan detail halus dan motif tradisional.',
  },
  {
    image: require('../../assets/images/ukiran-bali.jpeg'),
    title: 'Patung Garuda Kencana',
    price: 'Rp 2.500.000',
    description:
      'Patung Garuda bergaya Bali yang melambangkan kekuatan dan kejayaan.',
  },
  {
    image: require('../../assets/images/ukiran-toraja.jpg'),
    title: 'Pintu Ukir Kaligrafi',
    price: 'Rp 3.800.000',
    description:
      'Pintu ukiran khas Toraja dengan sentuhan kaligrafi yang memukau.',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.woodBrown(0.1),
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darkWood(),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.ivoryWhite(),
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notif: {
    backgroundColor: colors.gold(),
    color: colors.woodBrown(),
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
    position: 'absolute',
    top: -5,
    right: -5,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: colors.ivoryWhite(),
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: colors.woodBrown(),
  },
  searchButton: {
    padding: 10,
  },
  productContainer: {
    padding: 10,
  },
  productCard: {
    backgroundColor: colors.ivoryWhite(),
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: colors.woodBrown(),
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gold(),
  },
});
