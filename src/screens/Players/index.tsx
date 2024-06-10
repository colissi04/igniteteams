import { useState, useEffect } from "react";

import { Alert, FlatList } from "react-native";

import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { ListEmpty } from "@components/ListEmpty";

import { Container, Form, HeaderList, NumberOfPlayers, PlayersContent } from "./styles";
import { PlayerCard } from "@components/PlayerCard";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

type RouteParams = {
  group: string
}

export function Players(){
  const [newPlayerName, setNewPlayerName] = useState<string>('');
  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>();

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer(){
    if(newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.')
    }

    const newPlayer = {
      name: newPlayerName,
      team
    }

    try {
      await playerAddByGroup(newPlayer, group);
      fetchPlayersByTeam();
      
    } catch(error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
      }
    }
  }

  async function fetchPlayersByTeam(){
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam)

    } catch(error) {
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecinado.')

    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return(
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />
      
      <Form>
        <Input
          onChangeText={setNewPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={item => item}
          renderItem={({ item }) =>(
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players?.length}</NumberOfPlayers>
      </HeaderList>

      <PlayersContent>
        <FlatList 
          data={players}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PlayerCard 
              player={item.name}
              onRemove={() => {}} //falta a funcionalidade do on remove
            />
          )}
          ListEmptyComponent={() =>( 
            <ListEmpty
              message="Não há pessoas nesse time."
            />
          )}
          contentContainerStyle={{flexGrow: 1}}
        />

        </PlayersContent>

        <Button
          title="Remover Turma"
          type="SECONDARY"
        />

    </Container>
  )
}
