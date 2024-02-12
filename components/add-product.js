import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddProduct({ addProduct }) {
	const [productInput, setProductInput] = React.useState('');

	const handleAddProduct = () => {
		const id = Date.now().toString();
		addProduct({ id, name: productInput });
		setProductInput('');
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder='write something'
				value={productInput}
				onChangeText={(t) => setProductInput(t)}
			/>
			<Button title='Valider' onPress={handleAddProduct} />
		</View>
	);
}

const styles = StyleSheet.create({
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
