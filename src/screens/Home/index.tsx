import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';
import { ChangeEvent, useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>(['Lucas']);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com esse nome'
      );
    }
    // console.log('Botão + clicado'); // Em React Native, ele mostra no terminal o console.
    setParticipants((prevState) => [participantName, ...prevState]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado.'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);

    //  console.log(`Botão - de ${name} clicado`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Segunda, 05 de Junho de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          keyboardType='default'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false} // também funciona aqui e fica mais estético até. Caso "data" venha um Array vazio, temos:
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista
            de presença.
          </Text>
        )}
      />

      {/* <ScrollView>
        {participants.map((participant) => (
          <Participant // ScrollView em volta é para ter rolagem vertical
          // dá pra ocultar a barrinha discreta que tem com: showsVerticalScrollIndicator={false} nas propriedades. Trocamos pela FlatList, QUE ALÉM DO SCROLL É UM GERADOR DE LISTA.

          // DIFERENÇAS: ScrollView carrega/renderiza TODOS OS COMPONENTES. FlatList carrega só os componentes que cabem na tela, renderiza conforme a necessidade de exibição. Logo Scroll é para listas pequenas e definidas

            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
