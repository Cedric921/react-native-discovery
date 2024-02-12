import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import Product from './components/product';
import AddProduct from './components/add-product';

export default function App() {
	const [products, setProducts] = React.useState([]);

	const handleAddProduct = (data) => {
		setProducts((prev) => [...prev, data]);
	};
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<AddProduct addProduct={handleAddProduct} />
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
});
