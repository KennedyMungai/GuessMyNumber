import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'

const generateNumberBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min

	if (rndNum === exclude) {
		return generateNumberBetween(min, max, exclude)
	} else {
		return rndNum
	}
}

const GameScreen = () => {
	return (
		<SafeAreaView style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{/* TODO: Guess */}
			<View>
				<Text>Higher or Lower?</Text>
				{/* TODO: Plus and Minus button to show if higher or lower */}
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
	}
})
