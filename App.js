import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	TextInput,
} from 'react-native';
import React from 'react';

const Person = ({ name }) => (
	<View style={styles.textBlock}>
		<Text style={styles.text}>Hey i'm {name}</Text>
	</View>
);

export default function App() {
	const [count, setCount] = React.useState(0);
	const [names, setNames] = React.useState([]);
	const [input, setInput] = React.useState('');
	return (
		<SafeAreaView>
			<View style={styles.wrapper}>
				{names.map((name, i) => (
					<Person key={i} name={name} />
				))}
			</View>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'start',
				}}
			>
				<TextInput
					style={styles.input}
					value={input}
					placeholder='Enter your name'
					onChangeText={(value) => setInput(value)}
				/>
				<Button
					title='Save'
					color={'#0009'}
					disabled={false}
					accessibilityLabel='Learn more'
					onPress={() => setNames((ns) => [...ns, input])}
				/>
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
	input: {
		marginVertical: 8,
		marginHorizontal: 8,
		paddingVertical: 10,
		paddingHorizontal: 6,
		borderRadius: 2,
		fontSize: 16,
		borderWidth: 1,
		borderColor: '#0005',
		backgroundColor: '#0001',
		flex: 1,
	},
});
