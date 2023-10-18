import { View, Image, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'

const GameOverScreen = () => {
	return (
		<View style={styles.gameOverView}>
			<Title>Game is Over</Title>
			<Image
				source={require('../assets/images/nike.png')}
				height={100}
				width={100}
				style={styles.gameOverImage}
			/>
			{/* TODO: Some game logging */}
			<Text>Your Phone Needed X rounds to guess the number Y</Text>
		</View>
	)
}

export default GameOverScreen

const styles = StyleSheet.create({
	gameOverView: {
		flex: 1,
		padding: 10,
		marginTop: 40,
		alignItems: 'center'
	},
	gameOverImage: {
		width: 250,
		height: 250
	}
})
