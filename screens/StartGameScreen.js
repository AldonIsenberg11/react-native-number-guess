import { StyleSheet, TextInput, View } from "react-native"

import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
    return (
        <View style={styles.inputContainer} >
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4, // android (used for shadow)
        shadowColor: 'black', // ios
        shadowOffset: { width: 0, height: 2 }, // ios
        shadowRadius: 6, // ios
        shadowOpacity: 0.26, // ios
    }
})