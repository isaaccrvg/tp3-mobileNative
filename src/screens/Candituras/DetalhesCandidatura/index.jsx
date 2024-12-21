import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from "../../../contexts/index";
import { getStyles } from './styles';

export default function DetalhesCandidatura({ route, navigation }) {
  const { desc } = route.params;

  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acompanhe sua candidatura:</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}
