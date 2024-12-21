import { Text, View, FlatList } from 'react-native';
import { getStyles } from './styles';
import { useTheme } from "../../contexts/index";

const Projects = ({ projects }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View>
      <Text>Projetos</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.projectCard}>
            <Text style={styles.projectName}>{item.name}</Text>
            <Text style={styles.projectDesc}>{item.description || 'Sem descrição'}</Text>
            <Text style={[styles.projectLink, { textDecorationLine: 'underline', color: 'blue' }]}>
              {item.html_url}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Projects;
