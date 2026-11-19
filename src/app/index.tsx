import {
  Alert,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import MiBoton from "@/components/MiBoton";

// Función para mostrar mensajes en web y celular
const mostrarMensaje = (titulo: string, mensaje: string) => {
  if (Platform.OS === "web") {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
};

export default function Inicio() {
  return (
    <ScrollView style={styles.contenedor}>
      {/* Encabezado */}
      <View style={styles.encabezado}>
        <Text style={styles.emoji}>🧍‍♂️</Text>

        <Text style={styles.nombre}>Eduard</Text>

        <Text style={styles.titulo}>
          Tecnóloga en Análisis y Desarrollo de Software
        </Text>

        <Text style={styles.estado}>En formación - SENA</Text>
      </View>

      {/* Sección sobre mí */}
      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>Sobre mí</Text>

        <Text style={styles.descripcion}>
          Soy estudiante de Análisis y Desarrollo de Software en el SENA. Me
          interesa aprender sobre programación, desarrollo de aplicaciones
          móviles y nuevas tecnologías. Me considero una persona responsable,
          comprometida y con disposición para aprender y desarrollar nuevas
          habilidades.
        </Text>
      </View>

      {/* Sección de contacto */}
      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>Contacto</Text>

        <MiBoton
        titulo="Correo electrónico"
       icono="mail-outline"
       onPress={() =>
       Linking.openURL(
      'mailto:marteduard518@gmail.com'
    )
  }
/>

<MiBoton
  titulo="Teléfono 3105766386"
  icono="call-outline"
  onPress={() =>
    mostrarMensaje(
      'Teléfono',
      'Número de contacto: 3105766386'
    )
  }
/>

<MiBoton
  titulo="LinkedIn"
  icono="logo-linkedin"
  onPress={() =>
    Linking.openURL(
      'https://www.linkedin.com/in/eduard-andres-martinez-meza-b2010a405/'
    )
  }
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

  emoji: {
    fontSize: 65,
    marginBottom: 10,
  },

  nombre: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  titulo: {
    fontSize: 17,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
  },

  estado: {
    fontSize: 14,
    color: "#0d21d3",
    marginTop: 8,
  },

  tarjeta: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 20,
    borderRadius: 18,
    elevation: 3,
  },

  subtitulo: {
    fontSize: 21,
    fontWeight: "bold",
    color: "##0d21d3",
    marginBottom: 12,
  },

  descripcion: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 24,
  },
});
