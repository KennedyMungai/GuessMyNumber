import { View, Pressable, StyleSheet, Text } from 'react-native'

const PrimaryButton = ({ children }) => {
	const onPressHandler = () => {
		console.log('pressed')
	}

	return (
		<Pressable onPress={onPressHandler} style={styles.buttonView}>
			<View>
				<Text>{children}</Text>
			</View>
		</Pressable>
	)
}

export default PrimaryButton

const styles = StyleSheet.create({
	buttonView: {
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#E76F51',
		color: 'white',
		elevation: 2
	}
})
