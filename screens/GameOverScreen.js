import { View, Image, StyleSheet, Text } from 'react-native'
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
			<Text style={styles.gameOverText}>
				Your Phone Needed <Text style={styles.highlightedText}>X</Text>{' '}
				rounds to guess the number{' '}
				<Text style={styles.highlightedText}>Y</Text>
			</Text>
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
	},
	gameOverText: {
		color: 'white',
		fontSize: 16
	},
	highlightedText: {
		color: '#FF5566',
		fontWeight: 'bold',
		fontSize: 20
	}
})
