import { StyleSheet } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
	return (
		<LinearGradient
			colors={['#E76F51', '#F4A261', '#E9C46A']}
			style={styles.rootScreen}
		>
			<StartGameScreen />
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
		justifyContent: 'center'
	}
})
