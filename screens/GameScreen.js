import { Text, View } from 'react-native'

const GameScreen = () => {
	return (
		<View>
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
