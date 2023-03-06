import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../../theme/theme';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.h2}>Login</Text>
        <Text style={commonStyles.label}>Email</Text>
        <TextInput
          style={commonStyles.input}
          placeholder="abc@xyz.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={commonStyles.label}>Password</Text>
        <TextInput
          style={commonStyles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={commonStyles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 33,
  },
  h2: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    marginBottom: 48,
  },
  blackText: {
    color: '#000',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
