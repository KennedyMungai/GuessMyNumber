import { Text } from 'react-native'
import { View } from 'react-native'

const NumberContainer = ({ children }) => {
	return (
		<View>
			<Text>{children}</Text>
		</View>
	)
}

export default NumberContainer
