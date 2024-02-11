import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	FlatList,
	TextInput,
	Button,
} from 'react-native';
import React from 'react';

export default function App() {
	const [productInput, setProductInput] = React.useState('');
	const [products, setProducts] = React.useState([]);

	const handleAddProduct = () => {
		setProducts((prev) => [...prev, productInput]);
		setProductInput('');
	};
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						placeholder='write something'
						value={productInput}
						onChangeText={(t) => setProductInput(t)}
					/>
					<Button title='Valider' onPress={handleAddProduct} />
				</View>
				<ScrollView>
					{products.map((product, i) => (
						<Text key={i} style={styles.product}>
							#-{i + 1 + ' '} {product}
						</Text>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 40,
		paddingTop: 6,
	},
	inputContainer: {
		flexDirection: 'row',
		paddingTop: 20,
		marginBottom: 8,
	},
	textInput: {
		borderColor: '#0003',
		borderWidth: 1,
		fontSize: 18,
		padding: 6,
		borderRadius: 4,
		flex: 1,
	},
	button: {
		border: 2,
	},
	product: {
		shadowColor: '#0003',
		backgroundColor: '#0001',
		borderRadius: 4,
		marginVertical: 6,
		padding: 10,
		fontSize: 18,
	},
});
