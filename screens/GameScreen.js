import { useState, useEffect } from 'react'
import {
	Alert,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View
} from 'react-native'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../utils/colors'

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

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateNumberBetween(1, 100, userNumber)

	const [currentGuess, setCurrentGuess] = useState(initialGuess)
	const [guessRounds, setGuessRounds] = useState([initialGuess])

	useEffect(() => {
		if (currentGuess === userNumber) {
			Alert.alert('You won!', 'You guessed the number', [
				{ text: 'Okay', style: 'destructive', onPress: () => {} }
			])
			onGameOver()
		}
	}, [currentGuess, userNumber, onGameOver])

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'upper' && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", 'You know this is wrong', [
				{ text: 'Sorry!', style: 'cancel' }
			])
			return
		}

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

		setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
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
						onPress={nextGuessHandler.bind(this, 'upper')}
					>
						<Ionicons name='md-add' size={32} color={'black'} />
					</PrimaryButton>
					<PrimaryButton
						onPress={nextGuessHandler.bind(this, 'lower')}
					>
						<Ionicons name='md-remove' size={32} color={'black'} />
					</PrimaryButton>
				</View>
			</View>
			<FlatList
				data={guessRounds}
				renderItem={(itemData) => (
					<Text style={styles.guessRoundText}>{itemData.item}</Text>
				)}
				keyExtractor={(item) => item}
			/>
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
	},
	guessRoundText: {
		color: '#DDD',
		fontSize: 24,
		marginBottom: 8,
		textAlign: 'center',
		backgroundColor: Colors.primary800,
		marginTop: 10,
		borderRadius: 8
	}
})
