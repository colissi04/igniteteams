import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;

  border-radius: 6px;
  background-color: ${({theme}:{theme:DefaultTheme}) => theme.COLORS.GRAY_500};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 14px;
`;

export const PlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 4px;
`;

export const PlayerIcon = styled(MaterialIcons).attrs(({ theme }: {theme: DefaultTheme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_200
}))`
  margin-left: 13px
`;

export const PlayerName = styled.Text`
  ${({theme}:{theme:DefaultTheme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

