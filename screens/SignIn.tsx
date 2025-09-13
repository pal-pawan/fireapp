import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import auth from "@react-native-firebase/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  const handleSignin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      setMessage(`Welcome back, ${userCredential.user.email}`);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <LinearGradient
      colors={["#6a00f4", "#ff007f"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.inner}>
        <View style={styles.glassCard}>
          <Text style={styles.title}>Welcome Back 👋</Text>
          <Text style={styles.subtitle}>Login to continue</Text>

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#eee"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#eee"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          {/* Sign In Button */}
          <TouchableOpacity
            disabled={!isValid}
            style={[
              styles.buttonWrapper,
              !isValid && styles.buttonDisabled,
            ]}
            activeOpacity={0.8}
            onPress={handleSignin}
          >
            <LinearGradient
              colors={
                isValid ? ["#ff4fd8", "#7a37ff"] : ["#999", "#777"]
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  glassCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#eee",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
    color: "#fff",
    fontSize: 15,
  },
  buttonWrapper: {
    borderRadius: 14,
    overflow: "hidden",
    marginTop: 10,
  },
  button: {
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 14,
    shadowColor: "#ff4fd8",
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  message: {
    marginTop: 15,
    textAlign: "center",
    color: "#fff",
  },
});
