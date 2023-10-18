import { StyleSheet, Text, TextInput, View } from 'react-native'

const Card = ({ children }) => {
	return <View>{children}</View>
}

export default Card

const styles = StyleSheet.create({
	instructionText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		marginBottom: 8
	},
	startGameInput: {
		borderBottomWidth: 2,
		padding: 5,
		borderBottomColor: '#264653',
		fontWeight: 'bold',
		marginVertical: 8,
		textAlign: 'center',
		width: 100
	}
})
