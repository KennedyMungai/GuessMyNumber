import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'

const generateNumberBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min

	if (rndNum === exclude) {
		return generateNumberBetween(min, max, exclude)
	} else {
		return rndNum
	}
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber }) => {
	const initialGuess = generateNumberBetween(
		minBoundary,
		maxBoundary,
		userNumber
	)

	const [currentGuess, setCurrentGuess] = useState(initialGuess)

	const nextGuessHandler = (direction) => {
		if (direction === 'lower') {
			maxBoundary = currentGuess
		} else if (direction === 'upper') {
			minBoundary = currentGuess
		}

		const newRndNumber = generateNumberBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		)

		setCurrentGuess(newRndNumber)
	}

	return (
		<SafeAreaView style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Text></Text>
			<View style={styles.mainGameView}>
				<Text style={styles.gameText}>Higher or Lower?</Text>
				<View style={styles.gameButtonsView}>
					<PrimaryButton
						onPress={nextGuessHandler.bind(this, 'lower')}
					>
						➕
					</PrimaryButton>
					<PrimaryButton
						onPress={nextGuessHandler.bind(this, 'lower')}
					>
						➖
					</PrimaryButton>
				</View>
			</View>
			<View>{/* TODO: Logging the rounds of the game */}</View>
		</SafeAreaView>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 12,
		marginTop: 40
	},
	gameText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center'
	},
	gameButtonsView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 16
	},
	mainGameView: {
		marginTop: 32
	}
})
