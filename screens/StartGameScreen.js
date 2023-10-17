import { TextInput } from 'react-native'
import { View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { StyleSheet } from 'react-native'

const StartGameScreen = () => {
	return (
		<View style={styles.startGameView}>
			<TextInput />
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	)
}

export default StartGameScreen

const styles = StyleSheet.create({
	startGameView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		padding: 16,
		backgroundColor: '#E9C46A',
		margin: 10,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 4, height: 4 }
	}
})
