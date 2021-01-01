import React from 'react'
import Footer from '../../components/Footer'
import { dataDessert } from './dataDessert'
import Return from '../../components/Return'
import {
  DessertAll,
  DessertContainer,
  DessertWrapper,
  DessertHeading,
  DessertTitle,
  DessertCard,
  DessertImg,
  DessertInfo,
  DessertDesc,
  DessertPrice,
  DessertButton
} from './ProductDessertStyle'

const ProductDessert = () => {
  let heading = 'Choisir le déssert'
  return (
    <DessertAll>
      <DessertContainer>
        <Return />
        <DessertHeading>{heading}</DessertHeading>
        <DessertWrapper>
          {dataDessert.map((product, index) => {
            return (
              <DessertCard key={index}>
                <DessertImg src={product.img} alt={product.alt} />
                <DessertInfo>
                  <DessertTitle>{product.name}</DessertTitle>
                  <DessertDesc>{product.desc}</DessertDesc>
                  <DessertPrice>{product.price}</DessertPrice>
                  <DessertButton>{product.button}</DessertButton>
                </DessertInfo>
              </DessertCard>
            )
          })}
        </DessertWrapper>
      </DessertContainer>
      <Footer />
    </DessertAll>
  )
}

export default ProductDessert
