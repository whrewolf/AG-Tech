import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

const AddUkiran = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: '',
    origin: '',
    description: '',
    material: '',
    year: '',
    image: null,
  });

  const handleChange = (field, value) => {
    setForm({...form, [field]: value});
  };

  const handleSubmit = () => {
    Alert.alert('Ukiran Disimpan', JSON.stringify(form, null, 2));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 size="24" color={colors.ivoryWhite()} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tambah Ukiran</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Gambar</Text>
        <TouchableOpacity style={styles.imagePicker}>
          <Text style={styles.imagePickerText}>Pilih Gambar</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Nama Ukiran</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama ukiran"
          placeholderTextColor={colors.darkWood()}
          value={form.name}
          onChangeText={text => handleChange('name', text)}
        />

        <Text style={styles.label}>Asal Daerah</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Jepara"
          placeholderTextColor={colors.darkWood()}
          value={form.origin}
          onChangeText={text => handleChange('origin', text)}
        />

        <Text style={styles.label}>Deskripsi</Text>
        <TextInput
          style={[styles.input, {height: 100}]}
          placeholder="Deskripsi ukiran"
          placeholderTextColor={colors.darkWood()}
          multiline
          value={form.description}
          onChangeText={text => handleChange('description', text)}
        />

        <Text style={styles.label}>Bahan</Text>
        <TextInput
          style={styles.input}
          placeholder="Kayu Jati, Mahoni, dll."
          placeholderTextColor={colors.darkWood()}
          value={form.material}
          onChangeText={text => handleChange('material', text)}
        />

        <Text style={styles.label}>Tahun Pembuatan</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 2023"
          placeholderTextColor={colors.darkWood()}
          keyboardType="numeric"
          value={form.year}
          onChangeText={text => handleChange('year', text)}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: colors.ivoryWhite(),
    fontSize: 20,
    fontFamily: fontType['RoadRage'],
    marginLeft: 10,
  },
  card: {
    backgroundColor: colors.darkWood(),
    borderRadius: 10,
    padding: 16,
  },
  label: {
    color: colors.ivoryWhite(),
    fontFamily: fontType['String2'],
    marginTop: 15,
    marginBottom: 5,
  },
  imagePicker: {
    width: 150,
    height: 150,
    backgroundColor: colors.ivoryWhite(),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  imagePickerText: {
    color: colors.darkWood(),
    fontFamily: fontType['String3'],
  },
  input: {
    borderWidth: 1,
    borderColor: colors.ivoryWhite(),
    borderRadius: 8,
    padding: 10,
    color: colors.ivoryWhite(),
    fontFamily: fontType['String3'],
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: colors.ivoryWhite(),
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.black(),
    fontFamily: fontType['String1'],
  },
});

export default AddUkiran;
