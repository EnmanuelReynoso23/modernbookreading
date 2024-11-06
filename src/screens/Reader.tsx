import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Reader'>;
  route: RouteProp<RootStackParamList, 'Reader'>;
};

const Reader: React.FC<Props> = ({ navigation, route }) => {
  const [fontSize, setFontSize] = useState(18);
  const { book } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>
          {book.title}
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={[styles.bookContent, { fontSize }]}>{book.content}</Text>
      </ScrollView>

      <View style={styles.controls}>
        <View style={styles.fontControls}>
          <TouchableOpacity
            style={styles.fontButton}
            onPress={() => setFontSize((size) => Math.max(14, size - 2))}
          >
            <Text style={styles.fontButtonText}>A-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.fontButton}
            onPress={() => setFontSize((size) => Math.min(24, size + 2))}
          >
            <Text style={styles.fontButtonText}>A+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  backButtonText: {
    fontSize: 24,
    color: '#4B5563',
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  bookContent: {
    color: '#1F2937',
    lineHeight: 28,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  fontControls: {
    flexDirection: 'row',
    gap: 8,
  },
  fontButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  fontButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
});

export default Reader;