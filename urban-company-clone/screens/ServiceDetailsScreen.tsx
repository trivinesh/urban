import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"

const ServiceDetailsScreen = ({ route, navigation }) => {
  const { service } = route.params

  return (
    <View style={styles.container}>
      <Image source={{ uri: service.image }} style={styles.serviceImage} />
      <Text style={styles.serviceName}>{service.name}</Text>
      <Text style={styles.serviceDescription}>{service.description}</Text>
      <Text style={styles.servicePrice}>${service.price}/hr</Text>
      <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate("Booking", { service })}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  serviceImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  serviceName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  serviceDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  servicePrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
  },
  bookButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
  },
  bookButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default ServiceDetailsScreen

