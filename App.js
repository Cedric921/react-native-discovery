import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
	return (
		<SafeAreaView>
			<View style={styles.wrapper}>
				<View style={styles.textBlock}>
					<Text>Text One</Text>
					<Text>Text One</Text>
				</View>
				<View style={styles.textBlock}>
					<Text>Text Two</Text>
					<Text>Text Two</Text>
					<Text>Text Two</Text>
					<Text>Text Two</Text>
				</View>
				<Text style={styles.textTwo}>Text Two</Text>
				<StatusBar style='auto' />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	wrapper: { flexDirection: 'column' },
	textBlock: {
		backgroundColor: 'green',
		padding: 8,
		margin: 4,
		borderRadius: 5,
	},
	textTwo: {
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'Cochin',
		fontWeight: '700',
		padding: 8,
	},
});
