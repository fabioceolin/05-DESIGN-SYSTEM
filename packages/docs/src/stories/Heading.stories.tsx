import { Heading, HeadingProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt enim dolorum consequatur, sequi explicabo eaque est quod fuga numquam nihil nisi totam eveniet fugit laboriosam expedita voluptate quam. Aut!',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading component with custom tag. It can be used as a heading tag or as a heading element.',
      },
    },
  },
}
