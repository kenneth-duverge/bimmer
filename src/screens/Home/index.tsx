import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import { useGetPosts } from '../../store';

import { HeaderContainer, View, Background } from './styles';

import Image from '../../components/Image';
import Header from '../../components/Header';

export default function Home() {
  const { posts, loading } = useGetPosts();

  const renderItem = useCallback(
    ({ item }) => <Image title={item.title} url={item.url} />,
    []
  );

  return (
    <View>
      {loading && <Background />}
      <Header />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
