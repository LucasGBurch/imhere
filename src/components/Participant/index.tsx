import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface ParticipantProps {
  name: string;
  onRemove: () => void;
} // Pode ser type ParticipantProps = {} tambémm

export function Participant({ name, onRemove }: ParticipantProps) {
  // entre chaves puxa sem "props."

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
