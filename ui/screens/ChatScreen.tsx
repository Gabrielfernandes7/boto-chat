import { useState, useRef } from 'react';

import { 
  FlatList, 
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { Message } from '@/domain/entities';
import { getAppThemeColors, tokens } from '@/ui/theme';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Feather } from '@expo/vector-icons';

type Props = {
  title: string;
  messages: Message[];
  onSend: (text: string) => Promise<void>;
};

export function ChatScreen({ title, messages, onSend }: Props) {
  const [draft, setDraft] = useState('');
  const colorScheme = useColorScheme();
  const palette = getAppThemeColors(colorScheme);
  const insets = useSafeAreaInsets();
  
  const flatListRef = useRef<FlatList>(null);

  async function handleSend() {
    if (!draft.trim()) {
      return;
    }

    const current = draft;
    setDraft('');
    await onSend(current);
    
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }

  const onFocus = () => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 300);
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 50}
    >
      <View style={[styles.container, { backgroundColor: palette.surface }]}> 
        <View style={[styles.header, { borderBottomColor: palette.border }]}> 
          <Text style={[styles.title, { color: palette.text }]}>{title}</Text>
          <Text style={styles.subtitle}>BLE · ~4m</Text>
        </View>

        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[styles.listContent, { backgroundColor: palette.surfaceAlt }]}
          onContentSizeChange={() => {
            flatListRef.current?.scrollToEnd({ animated: true });
          }}
          onLayout={() => {
            flatListRef.current?.scrollToEnd({ animated: false });
          }}
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

        <View style={[styles.inputRow, { 
          borderTopColor: palette.border, 
          backgroundColor: palette.surface, 
          paddingBottom: tokens.spacing.md + insets.bottom }]}> 
          <TextInput
            value={draft}
            onChangeText={setDraft}
            onFocus={onFocus}
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
            <Feather name="send" size={20} color={tokens.colors.white} />
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    alignItems: 'center',
    width: 44,
    height: 44,
  },
  sendButtonText: {
    color: tokens.colors.white,
    fontWeight: '600',
    fontSize: 11,
  },
});