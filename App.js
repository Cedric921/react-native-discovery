import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	FlatList,
} from 'react-native';
import React from 'react';

const data = [
	{ id: '1', name: 'cedric', age: 12 },
	{ id: '2', name: 'James', age: 12 },
	{ id: '3', name: 'Patrick', age: 12 },
	{ id: '4', name: 'Arick', age: 12 },
	{ id: '5', name: 'Patrick', age: 12 },
	{ id: '6', name: 'Patrick', age: 12 },
	{ id: '7', name: 'Larry', age: 12 },
	{ id: '8', name: 'Larry', age: 12 },
	{ id: '9', name: 'Rodrigue', age: 12 },
	{ id: '10', name: 'Rodrigue', age: 12 },
	{ id: '11', name: 'cedric', age: 12 },
	{ id: '12', name: 'cedric', age: 12 },
	{ id: '13', name: 'Patrick', age: 12 },
	{ id: '14', name: 'Arick', age: 12 },
	{ id: '15', name: 'Patrick', age: 12 },
	{ id: '16', name: 'Patrick', age: 12 },
	{ id: '17', name: 'Larry', age: 12 },
	{ id: '18', name: 'Larry', age: 12 },
	{ id: '19', name: 'Rodrigue', age: 12 },
	{ id: '20', name: 'Rodrigue', age: 12 },
];

const renderItem = ({ item }) => (
	<View style={styles.textBlock}>
		<Text style={styles.textTwo}>{item.name}</Text>
		<Text style={styles.textSecondary}>{item.age} year </Text>
	</View>
);

export default function App() {
	const [users, setUsers] = React.useState(data);

	return (
		<SafeAreaView>
			<FlatList
				data={users}
				renderItem={renderItem}
				keyExtractor={(u) => u.id}
			/>
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	wrapper: { height: '100vh' },
	textBlock: {
		backgroundColor: '#144a',
		padding: 8,
		margin: 4,
		borderRadius: 5,
	},
	textTwo: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '700',
		padding: 8,
		color: 'white',
	},
	textSecondary: {
		fontSize: 16,
		textAlign: 'center',
		fontWeight: '500',
		padding: 4,
		color: 'white',
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
