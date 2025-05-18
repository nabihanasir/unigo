import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TABS = ['Total Students', 'Presents', 'Absent', 'Waiting', 'Missed'];
  const [studentsData, setStudentsData] = useState([]); 
  const BASE_URL = 'https://madassigmentnabihanasir-default-rtdb.firebaseio.com';

  async function getNotes() {
    try {
      const response = await axios.get(`${BASE_URL}/students.json`);
      const data = response.data; 
      const arraydata = data ? Object.values(data) : [];  
      setStudentsData(arraydata);
    } catch (e) {
      console.error('Error:', e);
    }
  }

  useEffect(() => {
    getNotes();  
  }, []);


export default function StudentDetailsScreen() {
  const [activeTab, setActiveTab] = useState('Total Students');

  const filteredStudents = activeTab === 'Total Students'
    ? studentsData.total
    : studentsData.total.filter(student => student.status === activeTab.toLowerCase());

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student's Details</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
        {TABS.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={[styles.tab, activeTab === tab && styles.activeTab]}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredStudents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, item.status === 'absent' && styles.absentCard]}>
            <Image source={item.image} style={styles.avatar} />
            <View style={styles.cardText}>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="call" size={24} color="green" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabBar: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#FFC107',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FAF3D3',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  absentCard: {
    backgroundColor: '#F44336',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  cardText: {
    flex: 1,
  },
  address: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  name: {
    fontSize: 14,
  },
});
