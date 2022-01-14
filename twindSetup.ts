import { setup } from 'twind'
import * as colors from 'twind/colors'

import { forms } from '@twind/forms'

setup({
  mode: 'silent',
  darkMode: 'class', // default is 'media'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      }
    },
    
  },
  plugins: {
    forms
  }
})