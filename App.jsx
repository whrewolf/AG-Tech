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
import { colors, fontType } from './src/theme';
import React, { useState } from 'react';
import { Home, SearchNormal, ShoppingCart, UserOctagon } from 'iconsax-react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.icons} />
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
          <View key={index} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Home size={32} color="#fff" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <ShoppingCart size={32} color="#fff" />
          <Text style={styles.footerText}>Keranjang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <UserOctagon size={32} color="#fff" />
          <Text style={styles.footerText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const products = [
  {
    image: require('./src/assets/images/ukiran-jepara.jpeg'),
    title: 'Ukiran Kayu Jepara',
    price: 'Rp 1.200.000',
  },
  {
    image: require('./src/assets/images/ukiran-bali.jpeg'),
    title: 'Patung Garuda Kencana',
    price: 'Rp 2.500.000',
  },
  {
    image: require('./src/assets/images/ukiran-toraja.jpg'),
    title: 'Pintu Ukir Kaligrafi',
    price: 'Rp 3.800.000',
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.darkWood(),
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: colors.ivoryWhite(),
  },
});
