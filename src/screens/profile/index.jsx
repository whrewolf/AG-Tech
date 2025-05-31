import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors, fontType} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {Edit2} from 'iconsax-react-native';
import * as Animatable from 'react-native-animatable'; // Import animasi

const user = {
  name: 'Zidan',
  bio: 'Tukang Tatah',
  location: 'Malang, Indonesia',
  email: 'anzazidan@gmail.com',
  phone: '085232441239',
  profileImage: require('../../assets/images/profile.jpg'),
};

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={800} style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          style={styles.profileImage}
          source={user.profileImage}
        />
        <Animatable.Text animation="fadeIn" delay={300} style={styles.name}>
          {user.name}
        </Animatable.Text>
        <Animatable.Text animation="fadeIn" delay={500} style={styles.bio}>
          {user.bio}
        </Animatable.Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={700} style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informasi Kontak</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Lokasi:</Text>
          <Text style={styles.infoValue}>{user.location}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Telepon:</Text>
          <Text style={styles.infoValue}>{user.phone}</Text>
        </View>
      </Animatable.View>

      <Animatable.View animation="zoomIn" delay={900}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EditProfile', {user})}>
          <Text style={styles.buttonText}>Edit Profil</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Animatable.View animation="bounceInUp" delay={1000}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddUkiran')}>
          <Edit2 color={colors.ivoryWhite()} variant="Linear" size={20} />
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black(),
    padding: 16,
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.ivoryWhite(),
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    color: colors.ivoryWhite(),
    fontFamily: fontType['RoadRage'],
  },
  bio: {
    fontSize: 16,
    fontFamily: fontType['String1'],
    color: colors.darkWood(),
    textAlign: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: colors.darkWood(),
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: fontType['String2'],
    marginBottom: 10,
    color: colors.ivoryWhite(),
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: 'String2',
    fontFamily: fontType['String3'],
    color: colors.ivoryWhite(),
  },
  infoValue: {
    fontFamily: fontType['String3'],
    color: colors.ivoryWhite(),
  },
  button: {
    backgroundColor: colors.ivoryWhite(),
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.black(),
    fontFamily: fontType['String1'],
  },
  addButton: {
    backgroundColor: colors.darkWood(),
    padding: 15,
    position: 'absolute',
    bottom: -320,
    right: 0,
    borderRadius: 50,
  },
});

export default Profile;
