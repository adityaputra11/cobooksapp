import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {apiGet} from '../../api/api';
import {img} from '../../assets';
import Spacer from '../../components/spacer';
import Input from '../../components/textinput';
import {debounce} from '../../utils/time';
import {styles} from './styles';
import {Book, Books, PropsHome} from './types';

const initialStateBooks = {
  key: '',
  name: '',
  subject_type: '',
  work_count: 0,
  works: [],
};

const HomeScreen = (props: PropsHome) => {
  const [books, setBooks] = useState<Books>(initialStateBooks);

  useEffect(() => {
    apiGet('/subjects/love.json').then(setBooks);
  }, []);

  const navigateToDetail = (item: Book) => {
    props.navigation.navigate('DetailBook', {
      title: item.title,
      edition_count: item.edition_count,
      author: item.authors[0].name,
    });
  };

  const onSearchSubject = (e: string) => {
    apiGet(`/subjects/${e}.json`).then((it: Books) => {
      if (it.works) {
        setBooks(it);
      }
    });
  };

  const renderItem: ListRenderItem<Book> = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigateToDetail(item)}>
      <Image source={img.placeholder_book} style={styles.imgBook} />
      <Spacer width={10} />
      <View>
        <Spacer height={20} />
        <Text style={styles.titleBook} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text>{item.edition_count}</Text>
        <Text>{item.authors[0].name}</Text>
      </View>
      <View style={styles.statusBook}>
        <Text>Available</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Spacer height={10} />
      <Input
        placeholder="search subject example `love`"
        onChangeText={debounce(onSearchSubject)}
        testID={'input_subject'}
      />
      <Spacer height={10} />
      <FlatList
        style={styles.listContainer}
        data={books?.works}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default HomeScreen;
