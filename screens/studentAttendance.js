import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const TABS = ['Total Students', 'Presents', 'Absent'];
const BASE_URL = 'https://madassigmentnabihanasir-default-rtdb.firebaseio.com';

export default function StudentDetailsScreen() {
  const [students, setStudents] = useState([]);
  const [activeTab, setActiveTab] = useState('Total Students');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${BASE_URL}/students.json`);
        const data = res.data || {};
        // flatten and add id
        const list = Object.values(data).flatMap(d => d.total || []).map((item, i) => ({
          ...item,
          id: item.id || item.email || `${i}-${item.name}`,
        }));
        setStudents(list);
      } catch (error) {
        console.log('Error loading students', error);
      }
    }
    fetchData();
  }, []);

  // filter students by tab
  const filtered = activeTab === 'Total Students' ? students : students.filter(s => s.status?.toLowerCase() === activeTab.toLowerCase());

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student's Details</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, item.status === 'absent' && styles.absentCard]}>
            <View style={styles.cardText}>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  tabBar: { flexDirection: 'row', marginBottom: 16 },
  tab: { backgroundColor: '#eee', padding: 8, borderRadius: 8, marginRight: 10 },
  activeTab: { backgroundColor: '#FFC107' },
  tabText: { fontSize: 14, color: '#333' },
  activeTabText: { fontWeight: 'bold', color: '#000' },
  card: { flexDirection: 'row', backgroundColor: '#FAF3D3', padding: 12, borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  absentCard: { backgroundColor: '#F44336' },
  cardText: { flex: 1 },
  address: { fontWeight: 'bold', fontSize: 14 },
  name: { fontSize: 14 },
});
