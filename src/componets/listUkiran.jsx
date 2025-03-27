import {ArrowUp, Profile2User} from 'iconsax-react-native';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fontType} from '../theme';

const CarvingList = ({ carvings, selectedTab }) => {
  return (
    <ScrollView>
      {carvings.filter((carving) => carving.origin === selectedTab)
        .map((carving, index) => (
        <CarvingCard
          key={index}
          name={carving.name}
          origin={carving.origin}
          info={carving.info}
          material={carving.material}
          image={carving.image}
        />
      ))}
    </ScrollView>
  );
};

const CarvingCard = ({name, info, image, material}) => {
  return (
    <View style={carvingStyles.card}>
      <View style={carvingStyles.materialContainer}>
        <View style={carvingStyles.material}>
          <View style={carvingStyles.materialIcon}>
            <Profile2User size="24" color={colors.white()} />
          </View>
          <Text style={carvingStyles.materialText}>{ material }</Text>
        </View>
        <View style={carvingStyles.iconContainer}>
          <ArrowUp size="32" color="#FF8A65" style={carvingStyles.icon} />
        </View>
      </View>
      <Text style={carvingStyles.title}>Ukiran</Text>
      <Text style={carvingStyles.title} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
      <Text style={carvingStyles.infoText} numberOfLines={1} ellipsizeMode="tail">{info}</Text>
      <Image source={image} style={carvingStyles.image} />
    </View>
  );
};

export default CarvingList;

const carvingStyles = StyleSheet.create({
  card: {
    marginBottom: 15,
    backgroundColor: colors.grey(),
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,
    elevation: 5,
    padding: 5,
    width: '100%',
  },
  materialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  material: {
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black(),
    padding: 5,
    borderRadius: 50,
  },
  materialIcon: {
    padding: 3,
    borderRadius: 50,
    backgroundColor: colors.yellow(),
  },
  materialText: {
    fontSize: 16,
    fontFamily: fontType['Light'],
    marginTop: -5,
    marginLeft: 10,
    color: colors.white(),
  },
  title: {
    fontSize: 38,
    fontFamily: fontType['ExtraBold'],
    color: colors.white(),
    marginVertical: -10,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  infoText: {
    fontSize: 18,
    color: colors.white(),
    fontFamily: fontType['Light'],
    marginVertical: 15,
    marginHorizontal: 10,
  },
  iconContainer: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: colors.white(),
  },
  icon: {
    transform: [{rotate: '45deg'}],
  },
});

const carvings = [
  {
    name: 'Ukiran Jepara',
    origin: 'Jawa Tengah',
    info: 'Ukiran khas Jepara terkenal dengan motif floral dan detail halus yang sering digunakan pada furnitur dan dekorasi rumah.',
    material: 'Kayu Jati',
    image: require('./assets/images/ukiran-jepara.jpg'),
  },
  {
    name: 'Ukiran Bali',
    origin: 'Bali',
    info: 'Ukiran Bali memiliki gaya unik dengan tema dewa, makhluk mitologi, dan ornamen khas budaya Hindu Bali.',
    material: 'Kayu Mahoni',
    image: require('./assets/images/ukiran-bali.jpg'),
  },
  {
    name: 'Ukiran Dayak',
    origin: 'Kalimantan',
    info: 'Ukiran Dayak menampilkan simbol-simbol spiritual dengan bentuk abstrak dan geometris.',
    material: 'Kayu Ulin',
    image: require('./assets/images/ukiran-dayak.jpg'),
  },
  {
    name: 'Ukiran Toraja',
    origin: 'Sulawesi Selatan',
    info: 'Ukiran Toraja sering ditemukan pada rumah adat Tongkonan dengan motif kerbau dan pola khas lainnya.',
    material: 'Kayu Meranti',
    image: require('./assets/images/ukiran-toraja.jpg'),
  }
];