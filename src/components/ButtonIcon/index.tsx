import { MaterialIcons } from "@expo/vector-icons";
import { Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function ButtonIcon({ icon, type="PRIMARY", ...rest}: Props){
  return(
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
