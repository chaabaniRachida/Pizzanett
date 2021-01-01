import React from 'react'
import { Root, SpinnerBorder, LoadingText } from './LoaderStyle'
import { useTranslation } from 'react-i18next'

const Loader = () => {
  const { t } = useTranslation()
  return (
    <Root>
      <SpinnerBorder />
      <LoadingText>{t('Chargement')}</LoadingText>
    </Root>
  )
}

export default Loader
