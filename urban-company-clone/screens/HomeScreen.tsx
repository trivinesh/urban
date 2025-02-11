import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native"
import { services } from "../data/services"

const HomeScreen = ({ navigation }) => {
  const renderServiceItem = ({ item }) => (
    <TouchableOpacity
      style={styles.serviceItem}
      onPress={() => navigation.navigate("ServiceDetails", { service: item })}
    >
      <Image source={{ uri: item.image }} style={styles.serviceImage} />
      <Text style={styles.serviceName}>{item.name}</Text>
      <Text style={styles.servicePrice}>${item.price}/hr</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList data={services} renderItem={renderServiceItem} keyExtractor={(item) => item.id} numColumns={2} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  serviceItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    alignItems: "center",
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  servicePrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
})

export default HomeScreen

