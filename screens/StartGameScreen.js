import { TextInput } from 'react-native'
import { View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { StyleSheet } from 'react-native'

const StartGameScreen = () => {
	return (
		<View style={styles.startGameView}>
			<View>
				<TextInput
					style={styles.startGameInput}
					placeholder='Guess'
					keyboardType='number-pad'
					maxLength={2}
				/>
			</View>
			<View style={styles.secondInnerView}>
				<PrimaryButton>Reset</PrimaryButton>
				<PrimaryButton>Confirm</PrimaryButton>
			</View>
		</View>
	)
}

export default StartGameScreen

const styles = StyleSheet.create({
	startGameView: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		gap: 10,
		padding: 16,
		backgroundColor: '#E9C46A',
		margin: 10,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 4, height: 4 },
		shadowRadius: 6
	},
	startGameInput: {
		borderBottomWidth: 2,
		padding: 5,
		borderBottomColor: '#264653',
		fontWeight: 'bold',
		marginVertical: 8,
		textAlign: 'center'
	},
	firstInnerView: {},
	secondInnerView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		gap: 20
	}
})
