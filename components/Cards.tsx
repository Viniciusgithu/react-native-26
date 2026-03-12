import { ScrollView, View, Text, Image, StyleSheet } from "react-native"


export default function Cards(){

  return (
    <ScrollView style={cardStyles.scroll}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <View key={item} style={[cardStyles.card]}>
            <Image
              source={require('../assets/images/news-placeholder.png')}
              style={cardStyles.cardImage}
              resizeMode="cover"
            />
            <Text style={cardStyles.cardTitle}>Elevator {item}</Text>
            <Text style={cardStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Text>
          </View>
        ))}
      </ScrollView> 
  )
}

const cardStyles = StyleSheet.create({
  scroll: {
    flex: 1,
    padding: 20
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
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  }
});