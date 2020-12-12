import React from 'react'
import Marked from 'marked'
import { DateTime } from 'luxon'

import { Block, BlockWithEvent, EventDate } from './styled/layout'

export const About = ({ content }) => {
  const now = DateTime.local()
  return (
    <React.Fragment>
      {content
        .filter((block) => block.__typename === 'AboutRecord')
        .map((block, key) => (
          <Block key={key} dangerouslySetInnerHTML={{ __html: Marked(block.text) }} />
        ))}
      {content
        .filter((block) => block.__typename === 'EventRecord')
        .filter((block) => {
          const date = DateTime.fromISO(block.date)
          return date >= now
        })
        .map((block, key) => (
          <BlockWithEvent key={key}>
            <EventDate>
              <span>{DateTime.fromISO(block.date).toLocaleString({ day: 'numeric' })}</span>
              <strong>{DateTime.fromISO(block.date).toLocaleString({ month: 'short' })}</strong>
            </EventDate>

            <div dangerouslySetInnerHTML={{ __html: Marked(block.text) }} />
          </BlockWithEvent>
        ))}
    </React.Fragment>
  )
}
