import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import * as SplashScreen from 'expo-splash-screen'
import { useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import GameOverScreen from './screens/GameOverScreen'
import GameScreen from './screens/GameScreen'
import StartGameScreen from './screens/StartGameScreen'
import { StatusBar } from 'expo-status-bar'

export default function App() {
	const [userNumber, setUserNumber] = useState()
	const [gameIsOver, setGameIsOver] = useState(false)

	SplashScreen.preventAutoHideAsync()

	const [fontsLoaded] = useFonts({
		'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf')
	})

	if (!fontsLoaded) {
		SplashScreen.hideAsync()
	}

	const startGameHandler = (pickedNumber) => {
		setUserNumber(pickedNumber)
	}

	const gameOverHandler = () => {
		setGameIsOver(true)
	}

	let screen = <StartGameScreen onPickNumber={startGameHandler} />

	if (userNumber) {
		screen = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		)
	}

	const restartGameHandler = () => {
		setUserNumber(null)
		setGameIsOver(false)
		screen = <StartGameScreen onPickNumber={startGameHandler} />
	}

	if (gameIsOver && userNumber) {
		screen = <GameOverScreen restartGame={restartGameHandler} />
	}

	return (
		<>
			<StatusBar style='inverted' />
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
		</>
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
