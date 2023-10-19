import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import {
	Alert,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	useWindowDimensions
} from 'react-native'
import NumberContainer from '../components/game/NumberContainer'
import LogItems from '../components/game/logItems'
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

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateNumberBetween(1, 100, userNumber)

	const [currentGuess, setCurrentGuess] = useState(initialGuess)
	const [guessRounds, setGuessRounds] = useState([initialGuess])

	const { width, height } = useWindowDimensions()

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

	let content = (
		<>
			<NumberContainer>{currentGuess}</NumberContainer>
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
		</>
	)

	if (width > 500) {
		content = (
			<>
				<Text style={styles.gameText}>Higher or Lower?</Text>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center'
					}}
				>
					<PrimaryButton
						onPress={nextGuessHandler.bind(this, 'upper')}
					>
						<Ionicons name='md-add' size={32} color={'black'} />
					</PrimaryButton>
					<NumberContainer>{currentGuess}</NumberContainer>
					<PrimaryButton
						onPress={nextGuessHandler.bind(this, 'lower')}
					>
						<Ionicons name='md-remove' size={32} color={'black'} />
					</PrimaryButton>
				</View>
			</>
		)
	}

	return (
		<SafeAreaView style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{content}
			<FlatList
				data={guessRounds}
				renderItem={(itemData) => (
					<LogItems index={itemData.index} content={itemData.item} />
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
		marginTop: 40,
		justifyContent: 'center'
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
