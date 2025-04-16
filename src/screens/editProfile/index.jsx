import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ArrowLeft2} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';
import {useNavigation, useRoute} from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {user} = route.params || {};

  const [form, setForm] = useState({
    nama: '',
    bio: '',
    alamat: '',
    email: '',
    telepon: '',
  });

  useEffect(() => {
    if (user) {
      setForm({
        nama: user.name || '',
        bio: user.bio || '',
        alamat: user.location || '',
        email: user.email || '',
        telepon: user.phone || '',
      });
    }
  }, [user]);

  const handleChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleSave = () => {
    const updatedUser = {
      name: form.nama,
      bio: form.bio,
      location: form.alamat,
      email: form.email,
      phone: form.telepon,
      profileImage: user.profileImage, // tetap pakai foto lama
    };

    navigation.navigate('Profile', {updatedUser});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 style={styles.icon} size="20" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>Edit Profile</Text>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.image}>
          <Text style={{colors}}>Pilih Foto</Text>
        </TouchableOpacity>

        {/* Nama */}
        <Text style={styles.label}>Nama</Text>
        <TextInput
          style={styles.input}
          value={form.nama}
          onChangeText={text => handleChange('nama', text)}
          placeholderTextColor="#FFF8DC"
          placeholder="Masukkan nama"
        />

        {/* Bio */}
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, {height: 100}]}
          value={form.bio}
          onChangeText={text => handleChange('bio', text)}
          placeholderTextColor="#FFF8DC"
          placeholder="Tuliskan bio singkat"
          multiline
        />

        {/* Alamat */}
        <Text style={styles.label}>Alamat</Text>
        <TextInput
          style={styles.input}
          value={form.alamat}
          onChangeText={text => handleChange('alamat', text)}
          placeholderTextColor="#FFF8DC"
          placeholder="Masukkan alamat"
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={form.email}
          onChangeText={text => handleChange('email', text)}
          placeholderTextColor="#888"
          placeholder="Masukkan email"
          keyboardType="email-address"
        />

        {/* Telepon */}
        <Text style={styles.label}>Telepon</Text>
        <TextInput
          style={styles.input}
          value={form.telepon}
          onChangeText={text => handleChange('telepon', text)}
          placeholderTextColor="#888"
          placeholder="Masukkan no. telepon"
          keyboardType="phone-pad"
        />

        {/* Tombol Simpan */}
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSave}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.black()},
  header: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    top: 50,
    left: 0,
    paddingHorizontal: 16,
    zIndex: 100,
  },
  text: {
    color: colors.ivoryWhite,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    marginTop: 90,
    borderRadius: 10,
    elevation: 5,
    height: '100%',
    backgroundColor: colors.black(),
    padding: 16,
  },
  label: {
    color: colors.ivoryWhite(),
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    color: colors.ivoryWhite(),
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: colors.woodBrown(),
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.ivoryWhite(),
    fontFamily: fontType['Bold'],
  },
});

export default EditProfile;
