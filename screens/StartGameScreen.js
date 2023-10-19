import { useState } from 'react'
import {
	Alert,
	useWindowDimensions,
	StyleSheet,
	TextInput,
	View,
	KeyboardAvoidingView
} from 'react-native'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colors from '../utils/colors'

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState('')

	const { width, height } = useWindowDimensions()

	const numberInputHandler = (enteredText) => {
		setEnteredNumber(enteredText)
	}

	const resetInputHandler = () => {
		setEnteredNumber('')
	}

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber)

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Error', 'Invalid number entered. Please try again', [
				{
					text: 'Okay',
					style: 'destructive',
					onPress: resetInputHandler
				}
			])
			return
		}

		onPickNumber(chosenNumber)
	}

	const marginTopStyling = height < 380 ? 30 : 100

	return (
		<View style={[styles.topView, { marginTop: marginTopStyling }]}>
			<Title>Guess my Number</Title>
			<View style={styles.startGameView}>
				<Card>
					<InstructionText style={styles.instructionStyle}>
						Enter A Number
					</InstructionText>
					<TextInput
						style={styles.startGameInput}
						placeholder='Guess'
						keyboardType='number-pad'
						maxLength={2}
						value={enteredNumber}
						onChangeText={numberInputHandler}
					/>
				</Card>
				<View style={styles.secondInnerView}>
					<PrimaryButton onPress={resetInputHandler}>
						Reset
					</PrimaryButton>
					<PrimaryButton onPress={confirmInputHandler}>
						Confirm
					</PrimaryButton>
				</View>
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
		backgroundColor: Colors.accent500,
		marginHorizontal: 10,
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 4, height: 4 },
		shadowRadius: 6
	},

	firstInnerView: {},
	secondInnerView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		gap: 20
	},
	topView: {
		flex: 1,
		marginTop: 100,
		padding: 16,
		alignItems: 'center'
	},
	startGameInput: {
		borderBottomWidth: 2,
		padding: 5,
		borderBottomColor: '#264653',
		fontWeight: 'bold',
		marginVertical: 8,
		textAlign: 'center',
		width: 100
	},
	instructionStyle: {
		marginBottom: 20
	}
})
