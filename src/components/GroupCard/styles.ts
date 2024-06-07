import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { ThemeProps, css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  ${({ theme }:{theme: DefaultTheme}) => css`
    width: 100%;
    height: 90px;

    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    padding: 24px;
    margin-bottom: 12px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }: {theme: DefaultTheme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }: {theme:DefaultTheme}) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill"
}))`
  margin-right: 20px;
`;
