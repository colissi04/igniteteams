import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { DefaultTheme } from "styled-components/native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type}: {theme:DefaultTheme; type:ButtonIconTypeStyleProps}) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;
