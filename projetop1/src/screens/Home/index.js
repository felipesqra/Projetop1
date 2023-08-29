import React, {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import {db} from '../../../firebase/firebase';
import { CARD_SCREEN } from '../../constants/screens'
import {collection, setDoc, doc, getDoc} from 'firebase/firestore';
function Home({ navigation }) {
    const specialOfTheDay = doc(db, 'users/8wE0dMGbNDDKP6eXgz4m');
    function write() {
        const docData = {
            debts: {},
            email: "admin@local.com",
            groups: [],
            name: "BOm dia",
            pix: "2313414",
            userId: "ni4n32i4n24i"
            };
        setDoc(specialOfTheDay, docData).then(() => {
            console.log("Document written");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });

    }

    function read() {
        const usersCollection = collection(db, "users");

        const documentRef = doc(usersCollection, "8wE0dMGbNDDKP6eXgz4m");

        getDoc(documentRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data();
                console.log(data);
            } else {
                console.log("Document does not exist");
            }
        }).catch((error) => {
            console.error("Error getting document: ", error);
        });
    }

    useEffect(() => {
        write();
        read();
    }, []);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Card</Text>
      <Button
        title="Ir para outra página"
        onPress={() => navigation.navigate(CARD_SCREEN)}
      />
    </View>
  );
}

export default Home;
