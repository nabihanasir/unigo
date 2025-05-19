import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const TABS = ['Total Students', 'Presents', 'Absent'];
const BASE_URL = 'https://madassigmentnabihanasir-default-rtdb.firebaseio.com';

export default function StudentDetailsScreen() {
  const [students, setStudents] = useState([]);
  const [activeTab, setActiveTab] = useState('Total Students');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/students.json`);
        const data = res.data || {};
        // flatten all student objects from nested keys (like total)
        const list = Object.values(data)
          .flatMap(group => group.total || [])
          .map((item, index) => ({
            ...item,
            id: item.id || item.email || `${index}-${item.name}`,
            status: item.status?.toLowerCase() || 'present' // default to present if no status
          }));
        setStudents(list);
      } catch (error) {
        console.log('Error loading students:', error);
      }
    };
    fetchStudents();
  }, []);

  // filter students according to active tab
  let filteredStudents;
  if (activeTab === 'Total Students') {
    filteredStudents = students;
  } else if (activeTab === 'Presents') {
    filteredStudents = students.filter(s => s.status === 'present');
  } else if (activeTab === 'Absent') {
    filteredStudents = students.filter(s => s.status === 'absent');
  } else {
    filteredStudents = students;
  }

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
        data={filteredStudents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              item.status === 'absent' ? styles.absentCard : null,
              item.status === 'present' ? styles.presentCard : null,
            ]}
          >
            <View style={styles.cardText}>
              <Text style={styles.address}>{item.address || 'No Address'}</Text>
              <Text style={styles.name}>{item.name || 'No Name'}</Text>
              <Text style={styles.status}>Status: {item.status}</Text>
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
  tab: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  activeTab: { backgroundColor: '#FFC107' },
  tabText: { fontSize: 14, color: '#333' },
  activeTabText: { fontWeight: 'bold', color: '#000' },
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
  presentCard: {
    backgroundColor: '#8BC34A',
  },
  cardText: { flex: 1 },
  address: { fontWeight: 'bold', fontSize: 14 },
  name: { fontSize: 14 },
  status: { fontSize: 12, marginTop: 4, fontStyle: 'italic' },
});
