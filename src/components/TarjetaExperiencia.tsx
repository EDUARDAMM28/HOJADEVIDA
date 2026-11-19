import { StyleSheet, Text, View } from "react-native";

interface TarjetaExperienciaProps {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: TarjetaExperienciaProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 15,
    marginVertical: 8,
    elevation: 3,
  },
  cargo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0d21d3",
  },
  empresa: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
  },
  periodo: {
    fontSize: 13,
    color: "#888888",
    marginTop: 5,
  },
  descripcion: {
    fontSize: 14,
    color: "#555555",
    marginTop: 10,
    lineHeight: 21,
  },
});
