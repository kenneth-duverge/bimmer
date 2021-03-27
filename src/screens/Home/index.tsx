import React, { useCallback, useEffect } from "react";
import { FlatList } from "react-native";

import { useStore, useDispatch } from "../../store";

import { Image, View, Background } from './styles';

export default function Home() {
  const { posts, loading } = useStore();
  const dispatch = useDispatch();
  const renderItem = useCallback(({ item }) => <Image source={item.url} />, []);

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
