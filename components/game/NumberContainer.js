import { StyleSheet, Text, View, Dimensions } from 'react-native'

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	)
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: 'white',
		padding: deviceWidth < 450 ? 12 : 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 16
	},
	numberText: {
		color: 'white',
		fontSize: 36,
		fontWeight: 'bold'
	}
})
