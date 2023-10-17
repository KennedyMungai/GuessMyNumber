import { View, Pressable, StyleSheet, Text } from 'react-native'
import Colors from '../utils/colors'

const PrimaryButton = ({ children, onPress }) => {
	return (
		<Pressable
			onPress={onPress}
			style={styles.buttonView}
			android_ripple={{ color: Colors.primary600 }}
		>
			<View>
				<Text style={styles.buttonText}>{children}</Text>
			</View>
		</Pressable>
	)
}

export default PrimaryButton

const styles = StyleSheet.create({
	buttonView: {
		padding: 10,
		borderRadius: 5,
		backgroundColor: Colors.primary500,
		color: 'white',
		elevation: 2,
		width: 150
	},
	buttonText: {
		color: 'white',
		textAlign: 'center'
	}
})
