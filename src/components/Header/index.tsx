import { Container, Logo, BackIcon } from "./styles";

import logoImg from '@assets/logo.png'

export function Header(){
  return(
    <Container>
      <BackIcon/>
      <Logo source={logoImg} />
    </Container>
  )
}
