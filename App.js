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
import Product from './components/product';

export default function App() {
	const [productInput, setProductInput] = React.useState('');
	const [products, setProducts] = React.useState([]);

	const handleAddProduct = () => {
		const id = Date.now().toString();
		setProducts((prev) => [...prev, { id, name: productInput }]);
		setProductInput('');
		console.log(products);
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
				<FlatList
					data={products}
					renderItem={({ item }) => <Product product={item} />}
				/>
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
});
