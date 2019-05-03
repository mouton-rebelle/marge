import React from 'react'
import Marked from 'marked'
import { DateTime } from 'luxon'

import { AboutContainer, AboutTitle, Block, BlockWithEvent, EventDate } from './styled/layout'

export const About = ({title, content}) => {
  const now = DateTime.local()
  return (
    <AboutContainer>
      <AboutTitle>
        {title}
      </AboutTitle>
      {content
        .filter(block => block._modelApiKey === 'introduction')
        .map((block, key) => (
          <Block key={key} dangerouslySetInnerHTML={{__html:Marked(block.text)}}/>
        ))}
        {content
        .filter(block => block._modelApiKey === 'event')
        .map(block => {
          block.date = DateTime.fromISO(block.date)
          return block
        })
        .filter(block => block.date >= now)
        .map((block, key) => (
          <BlockWithEvent key={key}>
            <EventDate>
              <span>{block.date.toLocaleString({day: 'numeric'})}</span>
              <strong>{block.date.toLocaleString({month: 'short'})}</strong>
            </EventDate>
            
            <div dangerouslySetInnerHTML={{__html:Marked(block.text)}}/>
          </BlockWithEvent>
        ))}            
    </AboutContainer>

  )
}