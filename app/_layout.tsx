import { Stack } from 'expo-router';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const applloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  return (
    <ApolloProvider client={applloClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ApolloProvider>
  );
}
