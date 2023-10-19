import {
	View,
	Image,
	StyleSheet,
	Text,
	useWindowDimensions,
	ScrollView
} from 'react-native'
import Title from '../components/ui/Title'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({ restartGame }) => {
	const { width, height } = useWindowDimensions()

	let imageSize = 300

	if (width < 380) {
		imageSize = 150
	}

	if (height < 400) {
		imageSize = 80
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize
	}

	return (
		<ScrollView>
			<View style={styles.rootGameOverView}>
				<View style={styles.gameOverView}>
					<Title>Game is Over</Title>
					<Image
						source={require('../assets/images/nike.png')}
						height={100}
						width={100}
						style={imageStyle}
					/>
					{/* TODO: Some game logging */}
					<Text style={styles.gameOverText}>
						Your Phone Needed{' '}
						<Text style={styles.highlightedText}>X</Text> rounds to
						guess the number{' '}
						<Text style={styles.highlightedText}>Y</Text>
					</Text>
				</View>
				<PrimaryButton onPress={restartGame}>
					Start New Game
				</PrimaryButton>
			</View>
		</ScrollView>
	)
}

export default GameOverScreen

const styles = StyleSheet.create({
	rootGameOverView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	gameOverView: {
		flex: 1,
		padding: 10,
		marginTop: 40,
		alignItems: 'center',
		gap: 10
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
