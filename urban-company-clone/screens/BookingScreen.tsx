"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native"

const BookingScreen = ({ route }) => {
  const { service } = route.params
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleBooking = () => {
    if (date && time) {
      Alert.alert("Booking Confirmed", `Your ${service.name} service has been booked for ${date} at ${time}.`, [
        { text: "OK" },
      ])
    } else {
      Alert.alert("Error", "Please enter both date and time.", [{ text: "OK" }])
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book {service.name} Service</Text>
      <TextInput style={styles.input} placeholder="Date (YYYY-MM-DD)" value={date} onChangeText={setDate} />
      <TextInput style={styles.input} placeholder="Time (HH:MM)" value={time} onChangeText={setTime} />
      <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
        <Text style={styles.bookButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default BookingScreen

