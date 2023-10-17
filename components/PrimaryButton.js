import { View, Pressable, StyleSheet, Text } from 'react-native'

const PrimaryButton = ({ children }) => {
	const onPressHandler = () => {
		console.log('pressed')
	}

	return (
		<Pressable
			onPress={onPressHandler}
			style={styles.buttonView}
			android_ripple={{ color: '#640233' }}
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
		backgroundColor: '#F4A261',
		color: 'white',
		elevation: 2
	},
	buttonText: {
		color: 'white',
		textAlign: 'center'
	}
})
