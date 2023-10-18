import { StyleSheet, Text, TextInput, View } from 'react-native'

const Card = ({ enteredNumber, numberInputHandler }) => {
	return (
		<View>
			<Text style={styles.instructionText}>Enter A Number</Text>
			<TextInput
				style={styles.startGameInput}
				placeholder='Guess'
				keyboardType='number-pad'
				maxLength={2}
				value={enteredNumber}
				onChangeText={numberInputHandler}
			/>
		</View>
	)
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
