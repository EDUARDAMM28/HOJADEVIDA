import { ScrollView, StyleSheet, Text, View } from "react-native";

import TarjetaHobby from "@/components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mis hobbies</Text>

        <Text style={styles.subtitulo}>Las cosas que disfruto hacer</Text>
      </View>

      <View style={styles.contenido}>
        <TarjetaHobby
          nombre="Ver películas"
          emoji="🎬"
          descripcion="Me gusta disfrutar de buenas películas en mi tiempo libre."
        />

        <TarjetaHobby
          nombre="El doporte"
          emoji="⚽"
          descripcion="Me encanta jugar futbol con mis amigos y familia, es una actividad que me ayuda a mantenerme activo y saludable."
        />

        <TarjetaHobby
          nombre="Aprender programación"
          emoji="💻"
          descripcion="Disfruto aprender nuevas tecnologías y mejorar mis habilidades de programación."
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
