import AirbnbCereal from 'assets/fonts/AirbnbCereal-Book.ttf'
import OdudoSlabBold from 'assets/fonts/OdudoSlab-Bold.woff2'
import OdudoSlabBoldOblique from 'assets/fonts/OdudoSlab-BoldOblique.woff2'
import OdudoSlabLight from 'assets/fonts/OdudoSlab-Light.woff2'
import OdudoSlabLightOblique from 'assets/fonts/OdudoSlab-LightOblique.woff2'
import OdudoSlabRegular from 'assets/fonts/OdudoSlab-Regular.woff2'
import OdudoSlabRegularOblique from 'assets/fonts/OdudoSlab-RegularOblique.woff2'
import OdudoSlabSemiBold from 'assets/fonts/OdudoSlab-SemiBold.woff2'
import OdudoSlabSemiBoldOblique from 'assets/fonts/OdudoSlab-SemiBoldOblique.woff2'

const families = {
  display: 'Web Odudo Slab',
  body: 'Web Airbnb Cereal App',
}

const weights = {
  light: 100,
  regular: 400,
  semibold: 600,
  bold: 700,
}

const sizes = {
  vsmall: '0.5rem',
  small: '0.75rem',
  regular: '16px',
  medium: '1.15rem',
  large: '1.3rem',
  xlarge: '1.75rem',
}

export default {
  families,
  weights,
  sizes,
  fonts: {
    AirbnbCereal,
    OdudoSlabBold,
    OdudoSlabBoldOblique,
    OdudoSlabSemiBold,
    OdudoSlabSemiBoldOblique,
    OdudoSlabRegular,
    OdudoSlabRegularOblique,
    OdudoSlabLight,
    OdudoSlabLightOblique,
  },
}
