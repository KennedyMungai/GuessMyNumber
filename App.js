import { StyleSheet } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground } from 'react-native'

export default function App() {
	return (
		<LinearGradient
			colors={['#264653', '#2A9D8F']}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require('./assets/images/game_intro_background.jpg')}
				resizeMode='cover'
				imageStyle={styles.rootImageBackground}
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<StartGameScreen />
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
