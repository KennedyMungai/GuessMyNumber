import { StyleSheet, Text, Platform } from 'react-native'

const Title = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		borderWidth: Platform.OS === 'android' ? 2 : 0,
		borderColor: 'white',
		padding: 12,
		borderRadius: 8,
		maxWidth: '80%',
		width: 300
	}
})
