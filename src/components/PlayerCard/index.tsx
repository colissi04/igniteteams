import { Container, PlayerIcon, PlayerName, PlayerInfo } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
  player: string;
  onRemove: () => void;
}

export function PlayerCard({ player, onRemove }: Props){
  return(
    <Container>
      <PlayerInfo>
        <PlayerIcon
          name="person"
        />
        <PlayerName>{player}</PlayerName>
      </PlayerInfo>

      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={onRemove}
      />
    </Container>
  )
}
