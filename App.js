import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import Product from './components/product';
import AddProduct from './components/add-product';

export default function App() {
	const [products, setProducts] = React.useState([]);

	const handleAddProduct = (data) => {
		setProducts((prev) => [...prev, data]);
	};

	const handleRemove = (id) =>
		setProducts((prev) => prev.filter((el) => el.id !== id));
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<AddProduct addProduct={handleAddProduct} />
				<FlatList
					data={products}
					renderItem={({ item }) => (
						<Product product={item} onRemove={handleRemove} />
					)}
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
});
