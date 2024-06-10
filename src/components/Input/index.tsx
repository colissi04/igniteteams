import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  placeholder: string;
  inputRef?: React.RefObject<TextInput>
}

export function Input({placeholder, inputRef, ...rest}: Props){
  const { COLORS } = useTheme();

  return(
    <Container
      ref={inputRef}
      placeholder={placeholder}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}
