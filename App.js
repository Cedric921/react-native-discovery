import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Person = ({ name, lastName }) => (
	<View style={styles.textBlock}>
		<Text style={styles.text}>Hey i'm {name}</Text>
		<Text style={styles.text}>{lastName}</Text>
	</View>
);

export default function App() {
	const name = 'Cedric VB';
	return (
		<SafeAreaView>
			<View style={styles.wrapper}>
				<Person name={'Cedric'} lastName={'Karungu'} />
				<Person name={'Arick'} lastName={'Ndeko'} />
				<Person name={'Cedric'} lastName={'Karungu'} />

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
	text: {
		color: 'white',
	},
});
