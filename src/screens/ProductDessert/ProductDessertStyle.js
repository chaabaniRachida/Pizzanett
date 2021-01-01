import styled from 'styled-components'
import ImgBG from '../../images/bgDessert.jpg'

export const DessertContainer = styled.div`
  background: url(${ImgBG}) no-repeat center;
  background-size: cover;
  font-family: sans-serif;
`

export const DessertAll = styled.div``

export const DessertWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`

export const DessertCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`

export const DessertImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`

export const DessertHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`

export const DessertTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`

export const DessertInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`

export const DessertDesc = styled.p`
  margin-bottom: 1rem;
`

export const DessertPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`

export const DessertButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`
