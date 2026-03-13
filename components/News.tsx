import { View, Switch, ScrollView, Text, StyleSheet, SafeAreaView, Platform, Image } from "react-native";
import Cards from "./Cards";
import { useTheme } from "./ThemeContext";

const News: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();

  const dynamicStyles = getDynamicStyles(darkMode);

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.container]}>
      <View style={[styles.header, dynamicStyles.headerBorder]}>
        <Text style={[styles.title, dynamicStyles.text]}>Elevator News</Text>
        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, dynamicStyles.text]}>{darkMode ? "Dark" : "Light"}</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>
      </View>
      <Cards />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: Platform.OS === 'android' ? 40 : 24,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
    flexShrink: 1,
    marginRight: 10
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(128,128,128,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexShrink: 0
  },
  switchLabel: {
    marginRight: 8,
    fontSize: 14,
    fontWeight: '600'
  },

  card: {
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#E5E5EA'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
    letterSpacing: -0.5,
  }
});

function getDynamicStyles(isDark: boolean) {
  return StyleSheet.create({
    container: {
      backgroundColor: isDark ? '#0A0A0A' : '#d4d9e1ff'
    },
    text: {
      color: isDark ? '#FFFFFF' : '#1A1A1A'
    },
    card: {
      backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF'
    },
    headerBorder: {
      borderBottomColor: isDark ? '#333333' : '#E5E5EA'
    }
  });
}

export default News;