import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { Peer } from '@/domain/entities';
import { getAppThemeColors, tokens } from '@/ui/theme';

type Props = {
  peers: Peer[];
  isLoading?: boolean;
  onOpenChat: (peer: Peer) => void | Promise<void>;
};

function getStatusCopy(status: Peer['status']) {
  if (status === 'online') {
    return { label: 'BLE · sinal forte', color: tokens.colors.blue, bg: tokens.colors.blueBg };
  }

  if (status === 'offline') {
    return { label: 'desconectado', color: tokens.colors.red, bg: tokens.colors.redBg };
  }

  return { label: 'sem identificação', color: tokens.colors.gray, bg: tokens.colors.grayLight };
}

export function PeersListScreen({ peers, isLoading = false, onOpenChat }: Props) {
  const colorScheme = useColorScheme();
  const palette = getAppThemeColors(colorScheme);

  return (
    <View style={[styles.container, { backgroundColor: palette.surface }]}> 
      <Text style={[styles.title, { color: palette.text }]}>Boto Chat</Text>
      <View style={[styles.tabRow, { borderBottomColor: palette.topBorder }]}> 
        <Text style={styles.tabActive}>Mensagens</Text>
        <Text style={[styles.tab, { color: palette.textMuted }]}>Próximos</Text>
      </View>

      {isLoading ? <Text style={[styles.loading, { color: palette.textMuted }]}>Buscando peers...</Text> : null}

      <FlatList
        data={peers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => {
          const status = getStatusCopy(item.status);

          return (
            <Pressable
              style={[styles.card, { backgroundColor: palette.cardBg, borderColor: palette.border }]}
              onPress={() => onOpenChat(item)}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.displayName.slice(0, 2).toUpperCase()}</Text>
              </View>

              <View style={styles.infoCol}>
                <Text style={[styles.name, { color: palette.text }]}>{item.displayName}</Text>
                <View style={[styles.statusPill, { backgroundColor: status.bg }]}> 
                  <View style={[styles.statusDot, { backgroundColor: status.color }]} />
                  <Text style={[styles.statusText, { color: status.color }]}>{status.label}</Text>
                </View>
              </View>
            </Pressable>
          );
        }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyTitle, { color: palette.text }]}>Ninguém por aqui ainda</Text>
            <Text style={[styles.emptyText, { color: palette.textMuted }]}>Descubra pessoas próximas pelo Bluetooth.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: tokens.spacing.sm,
  },
  tabRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: tokens.spacing.md,
  },
  tabActive: {
    fontSize: 11,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomWidth: 2,
    borderBottomColor: tokens.colors.pink,
    color: tokens.colors.pink,
    fontWeight: '600',
  },
  tab: {
    fontSize: 11,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  loading: {
    marginBottom: tokens.spacing.sm,
    fontSize: 11,
  },
  listContent: {
    gap: tokens.spacing.sm,
    paddingBottom: tokens.spacing.xl,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: tokens.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 99,
    backgroundColor: tokens.colors.pinkBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 11,
    fontWeight: '600',
    color: tokens.colors.pink,
  },
  infoCol: {
    flex: 1,
    gap: 3,
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
  },
  statusPill: {
    alignSelf: 'flex-start',
    borderRadius: 99,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusDot: {
    width: 5,
    height: 5,
    borderRadius: 99,
  },
  statusText: {
    fontSize: 9,
    fontWeight: '500',
  },
  emptyContainer: {
    paddingTop: tokens.spacing.xxl,
    alignItems: 'center',
    gap: tokens.spacing.xs,
  },
  emptyTitle: {
    fontSize: 13,
    fontWeight: '600',
  },
  emptyText: {
    fontSize: 11,
  },
});
