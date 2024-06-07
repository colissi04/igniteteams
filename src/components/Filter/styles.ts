import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }: {theme: DefaultTheme; isActive?: boolean}) => css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `}
`;
