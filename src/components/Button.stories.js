import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

export default {
  title: "Button",
}

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
`

export const toStorybook = () => <Button>Tailwind Button</Button>

toStorybook.story = {
  name: "to Storybook",
}
