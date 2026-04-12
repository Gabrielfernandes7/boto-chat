import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { Message } from '@/domain/entities';
import { getAppThemeColors, tokens } from '@/ui/theme';

type Props = {
  title: string;
  messages: Message[];
  onSend: (text: string) => Promise<void>;
};

export function ChatScreen({ title, messages, onSend }: Props) {
  const [draft, setDraft] = useState('');
  const colorScheme = useColorScheme();
  const palette = getAppThemeColors(colorScheme);

  async function handleSend() {
    if (!draft.trim()) {
      return;
    }

    const current = draft;
    setDraft('');
    await onSend(current);
  }

  return (
    <View style={[styles.container, { backgroundColor: palette.surface }]}> 
      <View style={[styles.header, { borderBottomColor: palette.border }]}> 
        <Text style={[styles.title, { color: palette.text }]}>{title}</Text>
        <Text style={styles.subtitle}>BLE · ~4m</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[styles.listContent, { backgroundColor: palette.surfaceAlt }]}
        renderItem={({ item }) => {
          const outbound = item.direction === 'outbound';

          return (
            <View style={[styles.bubbleWrap, outbound ? styles.right : styles.left]}>
              <View
                style={[
                  styles.bubble,
                  outbound
                    ? { backgroundColor: palette.bubbleOutbound }
                    : {
                        backgroundColor: palette.bubbleInbound,
                        borderColor: palette.bubbleInboundBorder,
                      },
                ]}>
                <Text style={[styles.bubbleText, { color: outbound ? palette.bubbleOutboundText : palette.text }]}>
                  {item.body}
                </Text>
              </View>
            </View>
          );
        }}
      />

      <View style={[styles.inputRow, { borderTopColor: palette.border, backgroundColor: palette.surface }]}> 
        <TextInput
          value={draft}
          onChangeText={setDraft}
          placeholder="Mensagem..."
          placeholderTextColor={palette.textMuted}
          style={[
            styles.input,
            {
              borderColor: palette.border,
              backgroundColor: palette.bubbleInbound,
              color: palette.text,
            },
          ]}
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
  },
  header: {
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 9,
    color: tokens.colors.blue,
    marginTop: 2,
  },
  listContent: {
    gap: tokens.spacing.sm,
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.md,
    flexGrow: 1,
  },
  bubbleWrap: {
    width: '100%',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  bubble: {
    maxWidth: '80%',
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.sm,
    borderRadius: 13,
    borderWidth: 1,
  },
  bubbleText: {
    fontSize: 11,
    lineHeight: 16,
  },
  inputRow: {
    flexDirection: 'row',
    gap: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.md,
    paddingTop: tokens.spacing.sm,
    paddingBottom: tokens.spacing.md,
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: 8,
    fontSize: 11,
  },
  sendButton: {
    backgroundColor: tokens.colors.pink,
    borderRadius: 99,
    paddingHorizontal: tokens.spacing.md,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: tokens.colors.white,
    fontWeight: '600',
    fontSize: 11,
  },
});
