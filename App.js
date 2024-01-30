import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={{ flexDirection: 'column' }}>
			<View style={{ backgroundColor: 'green', padding: 4, margin: 4 }}>
				<Text>Text One</Text>
			</View>
			<Text style={{ fontFamily: 'Cochin' }}>Text Two</Text>
			<StatusBar style='auto' />
		</View>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });
