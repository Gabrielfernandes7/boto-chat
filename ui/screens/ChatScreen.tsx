import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Message } from '@/domain/entities';
import { tokens } from '@/ui/theme';

type Props = {
  title: string;
  messages: Message[];
};

export function ChatScreen({ title, messages }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.direction === 'outbound' ? styles.outbound : styles.inbound]}>
            <Text style={[styles.bubbleText, item.direction === 'outbound' && styles.outboundText]}>{item.body}</Text>
          </View>
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
  listContent: {
    gap: tokens.spacing.sm,
  },
  bubble: {
    maxWidth: '80%',
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.md,
  },
  inbound: {
    backgroundColor: tokens.colors.white,
    borderWidth: 1,
    borderColor: tokens.colors.cinzaClaro,
    alignSelf: 'flex-start',
  },
  outbound: {
    backgroundColor: tokens.colors.azulRio,
    alignSelf: 'flex-end',
  },
  bubbleText: {
    color: tokens.colors.textoPrimario,
  },
  outboundText: {
    color: tokens.colors.white,
  },
});
