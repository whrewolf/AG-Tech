
import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  TextInput, 
  Pressable 
} from 'react-native';
import colors from './src/theme/colors';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.icons}>
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
        />
        <Pressable style={styles.searchButton}>
        </Pressable>
      </View>

      {/* Product Listings */}
      <ScrollView contentContainerStyle={styles.productContainer}>
        <View style={styles.productCard}>
          <Image
            source={require('./src/assets/images/ukiran1.jpeg')}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>Ukiran Kayu Jepara</Text>
          <Text style={styles.productPrice}>Rp 1.200.000</Text>
        </View>
        <View style={styles.productCard}>
          <Image
            source={require('./src/assets/images/ukiran2.jpeg')}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>Patung Garuda Kencana</Text>
          <Text style={styles.productPrice}>Rp 2.500.000</Text>
        </View>
        <View style={styles.productCard}>
          <Image
            source={require('./src/assets/images/ukiran3.jpeg')}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>Pintu Ukir Kaligrafi</Text>
          <Text style={styles.productPrice}>Rp 3.800.000</Text>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={[styles.footerText, {color: colors.gold()}]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Keranjang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.woodBrown(0.1),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darkWood(),
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.ivoryWhite(),
  },
  icons: {
    flexDirection: 'row',
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

