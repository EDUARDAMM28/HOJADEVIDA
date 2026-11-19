import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

interface TarjetaHobbyProps {
  nombre: string;
  emoji: string;
  descripcion: string;
}

export default function TarjetaHobby({
  nombre,
  emoji,
  descripcion,
}: TarjetaHobbyProps) {
  const mostrarAlerta = () => {
    if (Platform.OS === "web") {
      window.alert(`${nombre}\n\n${descripcion}`);
    } else {
      Alert.alert(nombre, descripcion);
    }
  };

  return (
    <TouchableOpacity
      style={styles.tarjeta}
      onPress={mostrarAlerta}
      activeOpacity={0.7}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.descripcion}>Toca para conocer más</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 8,
    elevation: 3,
    cursor: "pointer",
  },
  emoji: {
    fontSize: 38,
  },
  nombre: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#0d21d3",
    marginTop: 8,
  },
  descripcion: {
    fontSize: 12,
    color: "#777777",
    marginTop: 5,
  },
});
