import React from 'react'
import Footer from '../../components/Footer'
import { dataPizza } from './dataPizza'
import Return from '../../components/Return'

import {
  PizzaAll,
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductPizzaStyle'

const ProductPizza = () => {
  let heading = 'Choisir la pizza'
  return (
    <PizzaAll>
      <ProductsContainer>
        <Return />
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {dataPizza.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductButton>{product.button}</ProductButton>
                </ProductInfo>
              </ProductCard>
            )
          })}
        </ProductWrapper>
      </ProductsContainer>
      <Footer />
    </PizzaAll>
  )
}

export default ProductPizza
