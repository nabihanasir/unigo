import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import RootNavigator from './navigation/RootNavigator';
import { UserAuthContextProvider } from './components/UserAuthContextProvider';
import { createMultipleRoutes } from './functionalities/routefunctions';
export default function App() {
      useEffect(() => {
               addStudents();
               createMultipleRoutes(Routes);  
               }, []);
    return( 
        <UserAuthContextProvider>
        <StatusBar/>
        <RootNavigator />
        </UserAuthContextProvider>
    )
}
 
    const BASE_URL='https://madassigmentnabihanasir-default-rtdb.firebaseio.com/';
    async function addStudents() {
    const studentsData = {
    total: [
    { id: '1', name: 'nabiha', address: 'address No : 1', status: 'present' },
    { id: '2', name: 'hadia', address: 'address No : 2', status: 'present' },
    { id: '3', name: 'jannat', address: 'address No : 2', status: 'present'},
    { id: '4', name: 'ayesha', address: 'address No : 4', status: 'present' },
    { id: '5', name: 'emaan', address: 'address No : 2', status: 'absent' },
    { id: '6', name: 'kashaf ', address: 'address No : 7', status: 'absent' },
    { id: '7', name: 'neha', address: 'address No : 10', status: 'absent' },
   
  ]
};   
      const response = await axios.post(`${BASE_URL}/students.json`,studentsData);
      console.log(response);
    }
    const Routes = [
  {
    locationName: 'House No. 123, Street 4, Soan Garden, Islamabad',
    pickupTime: '20:10',
  },
  {
    locationName: 'House No. 45, Street 9, Jinnah Garden, Islamabad',
    pickupTime: '20:12',
  },
  {
    locationName: 'House No. 77, Street 2, PWD Housing Society, Islamabad',
    pickupTime: '20:15',
  },
];


    