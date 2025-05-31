import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ArrowLeft2} from 'iconsax-react-native';
import {colors, fontType} from '../../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

import { db } from '../../firebase/firebaseConfig' ;
import {
  doc,
  setDoc,
  addDoc,
  collection,
  updateDoc,
} from 'firebase/firestore';

import { displayNotification } from '../../utils/notification'; 

const AddUkiran = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const editData = route.params?.editData;

  const [form, setForm] = useState({
    name: '',
    origin: '',
    description: '',
    material: '',
    year: '',
    image: '',
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (field, value) => {
    setForm({...form, [field]: value});
  };

  const handleSubmit = async () => {
    try {
      if (editData) {
        
        const docRef = doc(db, 'ukiran', editData.id);
        await updateDoc(docRef, form);
        Alert.alert('Sukses', 'Ukiran berhasil diperbarui');
        await displayNotification('Sukses', 'Ukiran berhasil diperbarui'); 
      } else {
       
        await addDoc(collection(db, 'ukiran'), form);
        Alert.alert('Sukses', 'Ukiran berhasil ditambahkan');
        await displayNotification('Sukses', 'Ukiran berhasil ditambahkan'); 
      }
      navigation.goBack();
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Terjadi kesalahan saat menyimpan data');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 size="24" color={colors.ivoryWhite()} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{editData ? 'Edit Ukiran' : 'Tambah Ukiran'}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Gambar (URL)</Text>
        <TextInput
          style={styles.input}
          placeholder="https://..."
          value={form.image}
          onChangeText={text => handleChange('image', text)}
        />

        <Text style={styles.label}>Nama Ukiran</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama ukiran"
          value={form.name}
          onChangeText={text => handleChange('name', text)}
        />

        <Text style={styles.label}>Asal Daerah</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Jepara"
          value={form.origin}
          onChangeText={text => handleChange('origin', text)}
        />

        <Text style={styles.label}>Deskripsi</Text>
        <TextInput
          style={[styles.input, {height: 100}]}
          placeholder="Deskripsi ukiran"
          multiline
          value={form.description}
          onChangeText={text => handleChange('description', text)}
        />

        <Text style={styles.label}>Bahan</Text>
        <TextInput
          style={styles.input}
          placeholder="Kayu Jati, Mahoni, dll."
          value={form.material}
          onChangeText={text => handleChange('material', text)}
        />

        <Text style={styles.label}>Tahun Pembuatan</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 2023"
          keyboardType="numeric"
          value={form.year}
          onChangeText={text => handleChange('year', text)}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{editData ? 'Update' : 'Simpan'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.black(), padding: 16},
  header: {
    marginTop: 50, flexDirection: 'row', alignItems: 'center', marginBottom: 20,
  },
  headerTitle: {
    color: colors.ivoryWhite(), fontSize: 20,
    fontFamily: fontType['RoadRage'], marginLeft: 10,
  },
  card: {
    backgroundColor: colors.darkWood(),
    borderRadius: 10, padding: 16,
  },
  label: {
    color: colors.ivoryWhite(),
    fontFamily: fontType['String2'],
    marginTop: 15, marginBottom: 5,
  },
  input: {
    borderWidth: 1, borderColor: colors.ivoryWhite(),
    borderRadius: 8, padding: 10,
    color: colors.ivoryWhite(), fontFamily: fontType['String3'],
  },
  buttonContainer: {
    marginTop: 30, backgroundColor: colors.ivoryWhite(),
    borderRadius: 5, paddingVertical: 10, alignItems: 'center',
  },
  buttonText: {
    color: colors.black(), fontFamily: fontType['String1'],
  },
});

export default AddUkiran;
