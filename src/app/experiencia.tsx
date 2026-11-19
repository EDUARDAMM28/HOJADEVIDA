import { ScrollView, StyleSheet, Text, View } from "react-native";

import TarjetaExperiencia from "@/components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>💼 Mi experiencia</Text>

        <Text style={styles.subtitulo}>Mi trayectoria laboral</Text>
      </View>

      <View style={styles.contenido}>
        <TarjetaExperiencia
          cargo="Vendedor"
          empresa="Local de ropa"
          periodo="Periodo por confirmar"
          descripcion="Atención al cliente, asdesoramienti en prodectos, manejo de caja
          organización del área de trabajo y trabajo en equipo."
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#F5F3FF",
  },
  encabezado: {
    backgroundColor: "#392ddd",
    padding: 35,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitulo: {
    fontSize: 15,
    color: "#0d21d3",
    marginTop: 8,
  },
  contenido: {
    padding: 16,
  },
});
