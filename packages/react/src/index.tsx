import { VariantProps } from '@stitches/react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: 'red',
  borderRadius: '$md',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
        backgroundColor: 'blue',
      },

      big: {
        fontSize: '$md',
        padding: '$3 $6',
        backgroundColor: 'red',
      },
    },
  },

  defaultVariants: {
    size: 'big',
  },
})

// export type ButtonProps = {
//   size?: 'small' | 'big'
// } & React.ComponentProps<typeof Button>

// export type ButtonProps = VariantProps<typeof Button>
export type ButtonProps = React.ComponentProps<typeof Button>
