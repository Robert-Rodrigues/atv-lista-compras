import React from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView } from "react-native";
import useStore from "./store";

export default function App() {
  const [itens, adicionarItem, removerItem] = useStore((state) => [
    state.itens,
    state.adicionarItem,
    state.removerItem,
  ]);

  const [produto, setProduto] = React.useState("");

  const handleSubmit = () => {
    adicionarItem(produto);
    setProduto("");
  };

  const handleRemove = (l) => {
    removerItem(l);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, paddingTop:25, fontWeight: "bold", marginBottom: 20, textAlign: "center"}}>
          Lista de compras
        </Text>
        <View style={{padding: 20, borderWidth: 1, borderColor: '#ccc', borderRadius: 15}}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <TextInput
              style={{ flex: 1, marginRight: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 12, paddingLeft: 4}}
              placeholder="Novo produto"
              value={produto}
              onChangeText={(text) => setProduto(text)}
            />
            <TouchableOpacity style={{backgroundColor: '#268fbe', height: 40, width: 90, borderRadius:12}} onPress={handleSubmit}>
              <Text style={{color: 'white', textAlign: 'center', marginTop: 9}}>Adicionar</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={itens}
            keyExtractor={(item, index) => index.toString()}
            style={{ height: 600 }}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={{ flex: 1 }}>{item}</Text>
                <TouchableOpacity style={{backgroundColor: '#d02941', height: 40, width: 90, borderRadius:12}} onPress={() => handleRemove(item)}>
                  <Text style={{color: 'white', textAlign: 'center', marginTop: 9}}>Remover</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
