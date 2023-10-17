import { StatusBar } from 'react-native'
import { TextInput } from 'react-native'
import { View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
	return (
		<View>
			<StatusBar style='auto' />
			<TextInput />
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	)
}

export default StartGameScreen
