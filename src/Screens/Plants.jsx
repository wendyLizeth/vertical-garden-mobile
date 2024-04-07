import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

const plants = [
  {
    name: 'Tomato',
    date: 'Solanum lycopersicum',
    image: 'https://i.postimg.cc/44DkZbc2/jitomate1.png',
  },
  {
    name: 'Corn',
    date: 'Zea mays',
    image: 'https://i.postimg.cc/3wBfDmps/maiz-removebg-preview.png',
  },
];

const plant = [
  {
    name: 'Radish',
    date: 'Raphanus sativus',
    image: 'https://i.postimg.cc/Pq4Fw1PH/rabano1.png',
  },
  {
    name: 'Watermelon',
    date: 'Citrullus lanatus',
    image: 'https://i.postimg.cc/zvLxMQMN/sandia-removebg-preview.png',
  },
];

const plantss = [
  {
    name: 'Chili puya',
    date: 'Puya chilensis',
    image: 'https://i.postimg.cc/CKGp6Z5r/puya1.png',
  },
  {
    name: 'Celery',
    date: 'Coriandrum sativum',
    image: 'https://i.postimg.cc/SRg5GctQ/cilantro1.png',
  },
];

const plantt = [
  {
    name: 'Strawberry',
    date: 'Fragaria',
    image: 'https://i.postimg.cc/hjQy362D/fresa1.png',
  },
  {
    name: 'Habanero pepper',
    date: 'Capsicum chinense',
    image: 'https://i.postimg.cc/ZqMsH4Fs/habanero1.png',
  },
];

const Plants = () => {
  const styles = {
    container: { paddingTop: Constants.statusBarHeight + 52, paddingLeft: 18 },
    header: {
      fontSize: 28,
      fontWeight: '700',
      color: 'rgba(105, 105, 105, 1)',
      marginTop: 12,
      marginBottom: 22,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>🏵️ Plants in the garden</Text>
      </View>
      <View>
        <Slider data={plants} />
        <Slider data={plant} />
        <Slider data={plantss} />
        <Slider data={plantt} />
      </View>
    </ScrollView>
  );
};

const Slider = ({ data }) => {
  const styles = {
    plantContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    itemContainer: { flex: 1, alignItems: 'center' },
    image: { width: 200, height: 170, marginBottom: 0 },
    greenBox: { backgroundColor: '#C8E6C9', padding: 8, borderRadius: 8, width: 200 },
    nameText: { color: 'rgba(0,0,0,0.87)', marginBottom: 5, fontSize: 16, fontWeight: 'bold' },
    dateContainer: { flexDirection: 'row', alignItems: 'center' },
    blueBox: { backgroundColor: '#4CAF50', padding: 5, borderRadius: 5, marginRight: 5 },
    dateText: { color: 'white', fontSize: 12 },
  };

  return (
    <View style={styles.plantContainer}>
      {data.map((plant, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image source={{ uri: plant.image }} style={styles.image} />
          <View style={styles.greenBox}>
            <Text style={styles.nameText}>{plant.name}</Text>
            <View style={styles.dateContainer}>
              <View style={styles.blueBox}>
                <Text style={styles.dateText}>{plant.date}</Text>
              </View>
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Plants;
