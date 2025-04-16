import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ArrowLeft2} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';
import {useNavigation} from '@react-navigation/native';

const ukiranList = [
  {
    id: 1,
    name: 'Ukiran Bali',
    image: require('../../assets/images/ukiran-bali.jpeg'),
    origin: 'Bali',
    info: 'Ukiran Bali memiliki motif khas dewa-dewi dan bentuk alami seperti bunga dan daun, sering digunakan dalam pura dan bangunan adat.',
  },
  {
    id: 2,
    name: 'Ukiran Dayak',
    image: require('../../assets/images/ukiran-dayak.jpg'),
    origin: 'Kalimantan',
    info: 'Ukiran Dayak sarat akan makna spiritual, dengan bentuk simbolis yang menggambarkan roh leluhur dan alam sekitar.',
  },
  {
    id: 3,
    name: 'Ukiran Jepara',
    image: require('../../assets/images/ukiran-jepara.jpeg'),
    origin: 'Jawa Tengah',
    info: 'Ukiran Jepara terkenal halus dan kompleks, sering digunakan dalam furniture, berasal dari tradisi ukir sejak zaman R.A. Kartini.',
  },
  {
    id: 4,
    name: 'Ukiran Melayu',
    image: require('../../assets/images/ukiran-melayu.jpeg'),
    origin: 'Sumatera',
    info: 'Ukiran Melayu menampilkan motif geometris dan floral, banyak ditemukan pada rumah adat dan kerajinan tangan.',
  },
  {
    id: 5,
    name: 'Ukiran Toraja',
    image: require('../../assets/images/ukiran-toraja.jpg'),
    origin: 'Sulawesi Selatan',
    info: 'Ukiran Toraja dikenal dengan pola simetris dan makna spiritual, biasanya menghiasi tongkonan dan peti jenazah.',
  },
];

const UkiranDetail = ({route}) => {
  const {id} = route.params;
  const selected = ukiranList.find(item => item.id === id);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 style={styles.icon} size="20" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>Detail</Text>
      </View>
      <View style={styles.card}>
        <Image style={styles.gambar} source={selected.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{selected.name}</Text>
          <Text style={styles.location}>Asal: {selected.origin}</Text>
          <Text style={styles.infoTitle}>Deskripsi</Text>
          <Text style={styles.info}>{selected.info}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black(),
  },
  header: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    top: 50,
    left: 0,
    paddingHorizontal: 16,
    zIndex: 100,
    alignItems: 'center',
  },
  text: {
    color: colors.woodBrown(),
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    marginTop: 90,
    marginBottom: 24,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: colors.gold(),
    padding: 16,
  },
  gambar: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 16,
  },
  title: {
    fontFamily: fontType['RoadRage'],
    fontSize: 24,
    color: colors.black(),
  },
  location: {
    fontFamily: fontType['String1'],
    fontSize: 18,
    color: colors.darkWood(),
    marginBottom: 4,
  },
  infoTitle: {
    fontFamily: fontType['String2'],
    color: colors.darkWood(),
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 10,
  },
  info: {
    fontFamily: fontType['String3'],
    color: colors.deepGreen(),
    fontSize: 14,
    lineHeight: 20,
  },
});

export default UkiranDetail;
