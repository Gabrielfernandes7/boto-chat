import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { Message } from '@/domain/entities';
import { tokens } from '@/ui/theme';

type Props = {
  title: string;
  messages: Message[];
  onSend: (text: string) => Promise<void>;
};

export function ChatScreen({ title, messages, onSend }: Props) {
  const [draft, setDraft] = useState('');

  async function handleSend() {
    if (!draft.trim()) {
      return;
    }

    const current = draft;
    setDraft('');
    await onSend(current);
  }

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

      <View style={styles.inputRow}>
        <TextInput
          value={draft}
          onChangeText={setDraft}
          placeholder="Digite sua mensagem"
          placeholderTextColor={tokens.colors.textoPrimario}
          style={styles.input}
        />
        <Pressable style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </Pressable>
      </View>
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
    paddingBottom: tokens.spacing.md,
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
  inputRow: {
    flexDirection: 'row',
    gap: tokens.spacing.sm,
    marginTop: tokens.spacing.sm,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: tokens.colors.cinzaClaro,
    borderRadius: tokens.radius.md,
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.sm,
    backgroundColor: tokens.colors.white,
    color: tokens.colors.textoPrimario,
  },
  sendButton: {
    backgroundColor: tokens.colors.azulRio,
    borderRadius: tokens.radius.md,
    paddingHorizontal: tokens.spacing.md,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: tokens.colors.white,
    fontWeight: '700',
  },
});
