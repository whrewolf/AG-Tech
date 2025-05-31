import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors, fontType} from '../../theme';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {Edit2, Trash} from 'iconsax-react-native';
import * as Animatable from 'react-native-animatable';

import { db } from '../../firebase/firebaseConfig';
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';

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
  const isFocused = useIsFocused();
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'ukiran'));
      const list = [];
      querySnapshot.forEach(docSnap => {
        list.push({id: docSnap.id, ...docSnap.data()});
      });
      setArticles(list);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = id => {
    Alert.alert('Konfirmasi', 'Yakin ingin menghapus?', [
      {text: 'Batal', style: 'cancel'},
      {
        text: 'Hapus',
        onPress: async () => {
          try {
            await deleteDoc(doc(db, 'ukiran', id));
            fetchArticles();
          } catch (err) {
            console.error(err);
          }
        },
      },
    ]);
  };

  useEffect(() => {
    if (isFocused) {
      fetchArticles();
    }
  }, [isFocused]);

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

      <Text style={styles.articleHeader}>Daftar Ukiran</Text>
      {articles.map(item => (
        <Animatable.View
          key={item.id}
          animation="fadeInUp"
          delay={100}
          style={styles.articleCard}>
          <Image source={{uri: item.image}} style={styles.articleImage} />
          <View style={{flex: 1}}>
            <Text style={styles.articleTitle}>{item.name}</Text>
            <Text style={styles.articleOrigin}>{item.origin}</Text>
            <Text style={styles.articleDesc} numberOfLines={2}>
              {item.description}
            </Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddUkiran', {editData: item})}
                style={styles.editButton}>
                <Edit2 color={colors.ivoryWhite()} size={18} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDelete(item.id)}
                style={styles.deleteButton}>
                <Trash color={colors.ivoryWhite()} size={18} />
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.black(), padding: 16},
  header: {marginTop: 50, alignItems: 'center', marginBottom: 20},
  profileImage: {
    width: 100, height: 100, borderRadius: 50,
    borderWidth: 2, borderColor: colors.ivoryWhite(), marginBottom: 10,
  },
  name: {fontSize: 24, color: colors.ivoryWhite(), fontFamily: fontType['RoadRage']},
  bio: {
    fontSize: 16, fontFamily: fontType['String1'],
    color: colors.darkWood(), textAlign: 'center', marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: colors.darkWood(),
    borderRadius: 10, padding: 16, marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18, fontFamily: fontType['String2'],
    marginBottom: 10, color: colors.ivoryWhite(),
  },
  infoItem: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8,
  },
  infoLabel: {fontFamily: fontType['String3'], color: colors.ivoryWhite()},
  infoValue: {fontFamily: fontType['String3'], color: colors.ivoryWhite()},
  button: {
    backgroundColor: colors.ivoryWhite(),
    borderRadius: 5, paddingVertical: 10, alignItems: 'center',
  },
  buttonText: {color: colors.black(), fontFamily: fontType['String1']},
  addButton: {
    backgroundColor: colors.darkWood(), padding: 15,
    position: 'absolute', bottom: -320, right: 0, borderRadius: 50,
  },
  articleHeader: {
    marginTop: 30, fontSize: 20, fontFamily: fontType['String2'],
    color: colors.ivoryWhite(), marginBottom: 10,
  },
  articleCard: {
    flexDirection: 'row', gap: 10,
    backgroundColor: colors.darkWood(),
    padding: 10, borderRadius: 8, marginBottom: 10,
  },
  articleImage: {width: 80, height: 80, borderRadius: 8},
  articleTitle: {color: colors.ivoryWhite(), fontFamily: fontType['String2']},
  articleOrigin: {color: colors.ivoryWhite(), fontSize: 12},
  articleDesc: {color: colors.ivoryWhite(), fontSize: 11},
  actionRow: {
    marginTop: 10, flexDirection: 'row', gap: 16,
  },
});

export default Profile;
