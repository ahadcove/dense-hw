// React
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { retrieveData } from '../../redux/data/data.actions';
import { ISpaces } from '../../shared/interfaces/spaces.interface';
import { START_LISTENING, STOP_LISTENING } from '../../services/api/density.listeners';

const Home = () => {
	const dispatch = useDispatch();
	const [ loading, setLoading ] = useState(false);
	const spaces = useSelector((state: any) => state.data.spaces);

	useEffect(() => {
		START_LISTENING();
		getData();
		return () => {
			STOP_LISTENING();
		}
	}, []);

	useEffect(() => {}, [spaces]);

	const getData = async () => {
		try {
			setLoading(true);
			await dispatch(retrieveData());
			setLoading(false);
		} catch (err) {
			console.error('err: ', err);
			setLoading(false);
		}
	}

	const renderSpace = ({ item }: { item: ISpaces }) => (
    <View style={styles.spaceContain}>
			<Text style={styles.spaceText}>{item.current_count} - {item.name}</Text>
		</View>
  );

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.titleContain}>
				<Text style={styles.title}>Density Spaces</Text>
			</View>
			<FlatList
        data={spaces}
				onRefresh={getData}
				refreshing={loading}
        renderItem={renderSpace}
        keyExtractor={space => space.id}
      />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
		width: '100%',
		height: '100%',
  },
	titleContain: {
		marginTop: 10,
		marginBottom: 20,
	},
	title: {
    fontSize: 32,
		fontStyle: 'italic',
		fontWeight: '900',
		color: 'white',
		textAlign: 'center',
	},
  spaceContain: {
    backgroundColor: '#435664',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  spaceText: {
    color: 'white',
		fontSize: 18,
  },
});

export default Home;
