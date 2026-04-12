import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { Peer } from '@/domain/entities';
import { tokens } from '@/ui/theme';

type Props = {
  peers: Peer[];
  isLoading?: boolean;
  onOpenChat: (peer: Peer) => void | Promise<void>;
};

export function PeersListScreen({ peers, isLoading = false, onOpenChat }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pares próximos</Text>
      {isLoading ? <Text style={styles.loading}>Buscando peers...</Text> : null}
      <FlatList
        data={peers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => onOpenChat(item)}>
            <Text style={styles.name}>{item.displayName}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.offWhite,
    padding: tokens.spacing.md,
  },
  title: {
    fontSize: tokens.typography.heading,
    fontWeight: '700',
    color: tokens.colors.azulProfundo,
    marginBottom: tokens.spacing.md,
  },
  loading: {
    color: tokens.colors.textoPrimario,
    marginBottom: tokens.spacing.sm,
  },
  listContent: {
    gap: tokens.spacing.sm,
  },
  card: {
    backgroundColor: tokens.colors.white,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.colors.cinzaClaro,
  },
  name: {
    fontSize: tokens.typography.body,
    color: tokens.colors.textoPrimario,
    fontWeight: '600',
  },
  status: {
    marginTop: tokens.spacing.xs,
    color: tokens.colors.verdeFloresta,
    textTransform: 'capitalize',
  },
});
