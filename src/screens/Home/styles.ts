import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    padding: 24,
  },

  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },

  input: {
    backgroundColor: '#1f1e25',
    borderRadius: 8,
    color: '#fff',
    flex: 1, // ganha prioridade no espaço ocupado
    fontSize: 16,
    height: 56,
    marginRight: 12,
    padding: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
  },

  button: {
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#31cf67',
    height: 56,
    justifyContent: 'center',
    width: 56,
  },

  form: {
    flexDirection: 'row',
    marginBottom: 32,
    marginTop: 32,
    width: '100%',
  },

  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  },
});
