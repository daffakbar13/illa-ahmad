import { Oranienbaum } from 'next/font/google'
import localFont from 'next/font/local'

const oranienBaum = Oranienbaum({ subsets: ['latin'], weight: '400' })
const edensor = localFont({ src: './edensor.woff2' })
const bodebeck = localFont({ src: './bodebeck.woff2' })
const analogue = localFont({ src: './analogue.woff2' })
const jura = localFont({ src: './jura.woff2' })
const strawberryCupcakes = localFont({ src: './strawberry-cupcakes.woff2' })
const arimaMadurai = localFont({ src: './arima-madurai.woff2' })
const laluxe = localFont({ src: './laluxe.woff2' })

const marcellus = localFont({ src: './marcellus.woff2' })
const pinyon = localFont({ src: './pinyon.woff2' })
const montserrat = localFont({ src: './montserrat.woff2' })
const astonScript = localFont({ src: './aston-script.woff2' })

const fonts = {
  oranienBaum,
  edensor,
  bodebeck,
  analogue,
  jura,
  strawberryCupcakes,
  arimaMadurai,
  laluxe,
  marcellus,
  pinyon,
  montserrat,
  astonScript,
}

export default fonts
