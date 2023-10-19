import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../utils/colors'

const LogItems = ({ content, index }) => {
	return (
		<View style={styles.mainGuessView}>
			<Text>{index}</Text>
			<Text style={styles.guessRoundText}>{content}</Text>
		</View>
	)
}

export default LogItems

const styles = StyleSheet.create({
	guessRoundText: {
		color: '#DDD',
		fontSize: 24,
		textAlign: 'center',
		backgroundColor: Colors.primary800,
		marginTop: 2,
		borderRadius: 8
	},
	mainGuessView: {
		justifyContent: 'center'
	}
})
