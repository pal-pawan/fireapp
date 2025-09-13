import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import auth from "@react-native-firebase/auth";

const { width } = Dimensions.get("window");

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      setMessage(`Signed up successfully with ${userCredential.user.email}`);
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const isDisabled = !email || !password;

  return (
    <LinearGradient
      colors={["#1f005c", "#5b0060", "#870160", "#ac255e", "#ca485c"]}
      style={styles.gradient}
    >
      <View style={styles.glassCard}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <TouchableOpacity
          disabled={isDisabled}
          style={[styles.button, isDisabled && styles.buttonDisabled]}
          onPress={handleSignUp}
        >
          <LinearGradient
            colors={["#ff00cc", "#333399"]}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>

        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  glassCard: {
    width: width * 0.85,
    padding: 25,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    color: "white",
    marginBottom: 25,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    color: "white",
  },
  button: {
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
  },
  buttonGradient: {
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textShadowColor: "rgba(255,255,255,0.7)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  message: {
    marginTop: 15,
    color: "white",
    textAlign: "center",
  },
});
