import { useState } from "react";

import { FlatList } from "react-native";

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

type RouteParams = {
  group: string
}

export function Players(){
  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<string[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return(
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />
      
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon
          icon="add"
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

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <PlayersContent>
        <FlatList 
          data={players}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <PlayerCard 
              player={item}
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
