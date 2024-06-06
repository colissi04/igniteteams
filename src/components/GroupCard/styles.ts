import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { ThemeProps, css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  ${({}) => css`
    width: 100%;
    height: 90px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    padding: 24px;
    margin-bottom: 12px;
  `}
`;

export const Title = styled.Text`
  ${({}) => css`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }: ThemeProps<ThemeProps>) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill"
}))`
  margin-right: 20px;
`;
