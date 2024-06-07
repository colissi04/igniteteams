import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }:{theme:DefaultTheme}) => css`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${theme.COLORS.GRAY_600};
  `}
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }:{theme: DefaultTheme}) => ({
  color: theme.COLORS.GREEN_700
}))`
`;
