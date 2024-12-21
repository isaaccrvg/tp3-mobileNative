import 'react-native-gesture-handler';
import { useFonts } from '@expo-google-fonts/montserrat';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Routes from './src/routes/index';
import { Loading } from './src/components/Loading';
import { ThemeProvider } from './src/contexts/index';

export default function App() {
  const [fontesLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontesLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}
