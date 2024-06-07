import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  ${({ theme }:{theme:DefaultTheme}) => css`
    text-align: center;

    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color:${theme.COLORS.WHITE};
  `}
`;
export const Subtitle = styled.Text`
  ${({ theme }:{theme:DefaultTheme}) => css`
    text-align: center;

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color:${theme.COLORS.GRAY_300};
  `}
`;
