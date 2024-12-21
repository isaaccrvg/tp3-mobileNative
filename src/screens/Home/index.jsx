import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from "../../contexts/index";
import { getStyles } from './styles';

export default function Home({ navigation }) {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.iconTouchable}
          onPress={() => navigation.navigate('Configurations')}
        >
          <Feather
            name='settings'
            size={40}
            color={theme === 'light' ? '#fff' : '#000'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View>
          <View style={styles.resumoContainer}>
            <Text style={styles.resumoText}>
              Estudante de Engenharia de Software, com conhecimento em{' '}
              <Text style={styles.htmlText}>HTML</Text>,{' '}
              <Text style={styles.cssText}>CSS</Text>,{' '}
              <Text style={styles.scssText}>SCSS</Text>,{' '}
              <Text style={styles.jsText}>JavaScript</Text>,{' '}
              <Text style={styles.tsText}>TypeScript</Text> e{' '}
              <Text style={styles.reactText}>ReactJs{' '}</Text>...
            </Text>
          </View>

          <View style={styles.btnProfileContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={styles.btnProfile}
            >
              <Text style={styles.btnProfileText}>Ir para Perfil Completo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
