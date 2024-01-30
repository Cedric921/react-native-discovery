import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import React from 'react';

const Person = ({ name, lastName }) => (
	<View style={styles.textBlock}>
		<Text style={styles.text}>Hey i'm {name}</Text>
		<Text style={styles.text}>{lastName}</Text>
	</View>
);

export default function App() {
	const [count, setCount] = React.useState(0);
	return (
		<SafeAreaView>
			<View style={styles.wrapper}>
				<Person name={'Cedric'} lastName={'Karungu'} />
				<Person name={'Arick'} lastName={'Ndeko'} />
				<Person name={'Cedric'} lastName={'Karungu'} />
			</View>
			<Text style={styles.count}>{count}</Text>
			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				<Button
					title='decrease'
					color={'red'}
					disabled={false}
					accessibilityLabel='Learn more'
					onPress={() => setCount((c) => c - 1)}
				/>
				<Button
					title='Increase'
					color={'green'}
					disabled={false}
					accessibilityLabel='Learn more'
					onPress={() => setCount((c) => c + 1)}
				/>
			</View>
			<StatusBar style='auto' />
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
	count: {
		fontSize: 24,
		textAlign: 'center',
		margin: 12,
	},
});
