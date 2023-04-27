import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // android (used for shadow)
        shadowColor: 'black', // ios
        shadowOffset: { width: 0, height: 2 }, // ios
        shadowRadius: 6, // ios
        shadowOpacity: 0.26, // ios
    },
})