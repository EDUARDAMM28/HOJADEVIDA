import { StyleSheet, Text, View } from "react-native";

interface TarjetaEstudioProps {
  titulo: string;
  institucion: string;
  periodo: string;
  estado: string;
}

export default function TarjetaEstudio({
  titulo,
  institucion,
  periodo,
  estado,
}: TarjetaEstudioProps) {
  const enCurso = estado === "En curso";

  return (
    <View style={styles.tarjeta}>
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.institucion}>{institucion}</Text>

      <Text style={styles.periodo}>{periodo}</Text>

      <View
        style={[styles.etiqueta, enCurso ? styles.activo : styles.finalizado]}
      >
        <Text style={styles.textoEstado}>{estado}</Text>
      </View>
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
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#29213D",
  },
  institucion: {
    fontSize: 14,
    color: "#666666",
    marginTop: 8,
  },
  periodo: {
    fontSize: 13,
    color: "#888888",
    marginTop: 5,
  },
  etiqueta: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
  },
  activo: {
    backgroundColor: "#2369c4",
  },
  finalizado: {
    backgroundColor: "#DCFCE7",
  },
  textoEstado: {
    fontWeight: "bold",
    color: "#0d21d3",
    fontSize: 12,
  },
});
