import { View, Pressable, StyleSheet, Text } from 'react-native'

const PrimaryButton = ({ children }) => {
	return (
		<Pressable>
			<View>
				<Text>{children}</Text>
			</View>
		</Pressable>
	)
}

export default PrimaryButton

const styles = StyleSheet.create({
	buttonView: {
		padding: 5,
		borderRadius: 5
	}
})
