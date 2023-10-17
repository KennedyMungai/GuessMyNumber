import { Text, View, StyleSheet } from 'react-native'

const GameScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			{/* TODO: Guess */}
			<View>
				<Text>Higher or Lower?</Text>
				{/* TODO: Plus and Minus button to show if higher or lower */}
			</View>
			<View>{/* TODO: Logging the rounds of the game */}</View>
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 12
	}
})
