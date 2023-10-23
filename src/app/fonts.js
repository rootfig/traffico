import { Rubik, DM_Serif_Display, Roboto } from 'next/font/google'

const fontRubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
})

const fontDM = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400']
})

const fontRoboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

const fonts = {
  rubik: fontRubik,
  dm: fontDM,
  roboto: fontRoboto
}

export default fonts
