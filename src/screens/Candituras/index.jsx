import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "../../contexts/index";
import { getStyles } from './styles';

const candidaturas = [
  { id: '1', vaga: 'Desenvolvedor Frontend', status: 'Em andamento', desc: 'Você passou para a próxima fase, parabéns!' },
  { id: '2', vaga: 'Desenvolvedor Backend', status: 'Aprovado', desc: 'Parabéns, você foi aprovado!' },
  { id: '3', vaga: 'UX/UI', status: 'Rejeitado', desc: 'Infelizmente não será possível continuar essa aplicação de vaga...' },
];

export default function Candidaturas() {
  const navigation = useNavigation();
  
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetalhesCandidatura', { id: item.id, status: item.status, desc: item.desc })}>
      <View style={styles.card}>
        <Text style={{
          fontSize: 18,
          color: theme === 'light' ? '#fff' : '#0a0a0a'
        }}>
          {item.vaga}
        </Text>
        <Text style={{
          color: theme === 'light' ? '#fff' : '#0a0a0a'
        }}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Candidaturas</Text>
      <FlatList
        data={candidaturas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
