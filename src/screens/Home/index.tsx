import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';

import { useGetPosts } from '../../store';

import { View, Background } from './styles';

import Image from '../../components/Image';

export default function Home() {
  const { posts, loading } = useGetPosts();

  const renderItem = useCallback(
    ({ item }) => <Image title={item.title} url={item.url} />,
    []
  );

  return (
    <View>
      {loading && <Background />}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{
          marginVertical: 40,
        }}
      />
    </View>
  );
}
