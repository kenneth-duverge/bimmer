import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';

import { useStore, useDispatch } from '../../store';

import { View, Background } from './styles';

import Image from '../../components/Image';

export default function Home() {
  const { posts, loading } = useStore();
  const dispatch = useDispatch();
  const renderItem = useCallback(
    ({ item }) => <Image title={item.title} url={item.url} />,
    []
  );

  useEffect(() => {
    if (loading) {
      dispatch.getPosts();
    }
  }, [loading]);

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
