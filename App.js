import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('');
  const [dadosCadastrados, setDadosCadastrados] = useState(null);

  const handleCadastro = () => {
    const dados = {
      Nome: nome,
      Sobrenome: sobrenome,
      Gênero: genero,
      'Data de Nascimento': dataNascimento,
      Usuário: usuario,
      Senha: senha,
      'E-mail': email,
      'Confirmar E-mail': confirmarEmail,
      CPF: cpf,
      'Idioma do Currículo': idioma,
    };

    setDadosCadastrados(dados);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
        style={styles.input}
      />
      <TextInput
        placeholder="Gênero"
        value={genero}
        onChangeText={setGenero}
        style={styles.input}
      />
      <TextInput
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        style={styles.input}
      />
      <TextInput
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmar E-mail"
        value={confirmarEmail}
        onChangeText={setConfirmarEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
      />
      <TextInput
        placeholder="Idioma do Currículo"
        value={idioma}
        onChangeText={setIdioma}
        style={styles.input}
      />
      <Button title="CADASTRAR" onPress={handleCadastro} />

      {dadosCadastrados && (
        <View style={styles.dadosContainer}>
          <Text style={styles.dadosTitulo}>Dados Cadastrados:</Text>
          {Object.keys(dadosCadastrados).map((key) => (
            <Text key={key}>
              {key}: {dadosCadastrados[key]}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
    width: '100%',
  },
  dadosContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dadosTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
