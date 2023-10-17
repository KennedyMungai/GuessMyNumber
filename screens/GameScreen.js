import { SafeAreaView } from 'react-native'
import { Text, View, StyleSheet } from 'react-native'
import Title from '../components/Title'

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
