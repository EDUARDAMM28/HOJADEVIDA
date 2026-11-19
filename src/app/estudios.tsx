import { ScrollView, StyleSheet, Text, View } from "react-native";

import TarjetaEstudio from "@/components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>🎓 Mis estudios</Text>
        <Text style={styles.subtitulo}>Mi formación académica</Text>
      </View>

      <View style={styles.contenido}>
        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA"
          periodo="Actualmente"
          estado="En curso"
        />

        <TarjetaEstudio
            titulo="Bachiller académico"
            institucion="Miguel Antonio Caro"
            periodo="Graduación: 2025"
            estado="Finalizado"
        />

        <TarjetaEstudio
            titulo="Curso en  introduccion a la ciencia de datos "
            institucion="Cisco Networking Academy"
            periodo="Fecha por confirmar"
            estado="Finalizado"
        />

                <TarjetaEstudio
            titulo="Curso en  Introducción a la ciberseguridad"
            institucion="Cisco Networking Academy"
            periodo="Fecha por confirmar"
            estado="Finalizado"
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
