import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
	const [userNumber, setUserNumber] = useState()

	const startGameHandler = (pickedNumber) => {
		setUserNumber(pickedNumber)
	}

	let screen = <StartGameScreen />

	if (userNumber) {
		screen = <GameScreen />
	}

	return (
		<LinearGradient
			colors={['#ff4653', '#2A9D8F']}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require('./assets/images/game_intro_background.jpg')}
				resizeMode='cover'
				imageStyle={styles.rootImageBackground}
				style={{
					flex: 1
				}}
			>
				{screen}
			</ImageBackground>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
		justifyContent: 'center'
	},
	rootImageBackground: {
		opacity: 0.75
	}
})
