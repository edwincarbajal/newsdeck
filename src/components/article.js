import React from 'react'
import {
  Item,
  Image
} from 'semantic-ui-react'

export default (props) => (
  <Item>
    <Item.Image size='tiny' src={props.article.urlToImage} />
    <Item.Content>
      <Item.Header as='a'>{props.article.title}</Item.Header>
      <Item.Meta>{props.article.description}</Item.Meta>
      <Item.Description>
        <Image src={props.article.urlToImage} />
      </Item.Description>
    </Item.Content>
  </Item>
)
