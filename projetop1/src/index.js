import { CARD_SCREEN } from './constants/screens'
import { createUser, readUser, generateUserId } from '../database-config/user-service'
import {useEffect} from "react";
import {Button, View,Text} from "react-native";
function Home({ navigation }) {
    function write() {
        const docData = {
            debts: {},
            email: "bomdia@local.com",
            groups: [],
            name: "mal dia",
            pix: "434324234",
            userId: generateUserId()
        };
        createUser(docData).then(r => console.log("promise completa")).catch(() => {
            console.log("erro ao executar promise")
        })
    }

    function read() {
        let id = "ydfqLBcbvEzvllEu3JCU";
        readUser(id).then((res) => { console.log(res)})
            .catch((error) => {
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