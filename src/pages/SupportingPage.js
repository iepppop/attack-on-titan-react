import { jean, connie } from '../components/SupportingData';
import Supporting from '../components/Supporting';
import styled from 'styled-components'

const SupportingPage = () => {
  return (
    <Container>
        <Supporting {...jean} />
        <Supporting {...connie} />
        <Supporting {...jean} />
        <Supporting {...jean} />
    </Container>
  )
}
export default SupportingPage;

const Container = styled.div`

`