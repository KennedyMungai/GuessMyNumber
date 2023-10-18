import { StyleSheet, Text } from 'react-native'

const InstructionText = ({ children, style }) => {
	return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
	instructionText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		marginBottom: 8
	}
})
