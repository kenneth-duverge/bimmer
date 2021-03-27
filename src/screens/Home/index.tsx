import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";

import { useStore, useDispatch } from "../../store";

const View = styled.SafeAreaView`
  background-color: #ffc600;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Image = styled.Image`
  width: 100%;
  height: 300px;

  margin-bottom: 50px;
`;

export const Background = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffc600;
`;

export default function App() {
  const { posts, loading } = useStore();
  const dispatch = useDispatch();
  const renderItem = useCallback(({ item }) => <Image source={item.url} />, []);

  const timeout = setTimeout(() => {
    dispatch.setLoading(false);

    clearTimeout(timeout);
  }, 5000);

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
