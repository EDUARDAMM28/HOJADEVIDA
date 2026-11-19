import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type NombreIcono = React.ComponentProps<typeof Ionicons>["name"];

interface MiBotonProps {
  titulo: string;
  onPress: () => void;
  icono?: NombreIcono;
}

export default function MiBoton({ titulo, onPress, icono }: MiBotonProps) {
  return (
    <TouchableOpacity
      style={styles.boton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.contenido}>
        {icono && <Ionicons name={icono} size={22} color="#FFFFFF" />}

        <Text style={styles.texto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#0d21d3",
    padding: 15,
    borderRadius: 14,
    marginVertical: 7,
    elevation: 3,
  },
  contenido: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
