import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Error404 = styled.h1`
  height: 400px;
  width: 100%;
  margin-top: 100px;
  background-color: lightgreen;
  /* border: 5px solid red; */
  color: lightseagreen;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 90px;
`
function Error() {
  return (
    <Container>
      <Error404>Error404</Error404>
    </Container>
  )
}

export default Error
