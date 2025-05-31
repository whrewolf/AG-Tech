import {ArrowUp, Profile2User} from 'iconsax-react-native';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fontType} from '../theme';
import {useNavigation} from '@react-navigation/native';

const listUkiran = ({ukirans, selectedTab}) => {
  return (
    <ScrollView>
      {ukirans
        .filter(ukiran => ukiran.origin === selectedTab)
        .map((ukiran, index) => (
          <UkiranCard key={index} item={ukiran} />
        ))}
    </ScrollView>
  );
};

const UkiranCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ukiranDetail', {id: item.id})}>
      <View style={styles.materialContainer}>
        <View style={styles.material}>
          <View style={styles.materialIcon}>
            <Profile2User size="24" color={colors.white()} />
          </View>
          <Text style={styles.materialText}>{item.material}</Text>
        </View>
        <View style={styles.iconContainer}>
          <ArrowUp size="32" color="#FF8A65" style={styles.icon} />
        </View>
      </View>
      <Text style={styles.title}>Ukiran</Text>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>
      <Text style={styles.infoText} numberOfLines={1} ellipsizeMode="tail">
        {item.info}
      </Text>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );
};

export default listUkiran;

const styles = StyleSheet.create({
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
    backgroundColor: colors.gold(),
  },
  materialText: {
    fontSize: 16,
    fontFamily: fontType['String2'],
    marginTop: -5,
    marginLeft: 10,
    color: colors.ivoryWhitewhite(),
  },
  title: {
    fontSize: 38,
    fontFamily: fontType['String1'],
    color: colors.ivoryWhite(),
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
    fontFamily: fontType['String2'],
    marginVertical: 15,
    marginHorizontal: 10,
  },
  iconContainer: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: colors.ivoryWhite(),
  },
  icon: {
    transform: [{rotate: '45deg'}],
  },
});
