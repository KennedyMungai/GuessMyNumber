import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../../utils/colors'

const LogItems = ({ children }) => {
	return <Text style={styles.guessRoundText}>{children}</Text>
}

export default LogItems

const styles = StyleSheet.create({
	guessRoundText: {
		color: '#DDD',
		fontSize: 24,
		marginBottom: 3,
		textAlign: 'center',
		backgroundColor: Colors.primary800,
		marginTop: 10,
		borderRadius: 8
	}
})
