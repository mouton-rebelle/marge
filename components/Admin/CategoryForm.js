import React from 'react'
import { withRouter } from 'next/router'
import { Input, Form, Row, Textarea, Label } from './styled/form'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { BASE_URL } = publicRuntimeConfig

class CategoryForm extends React.PureComponent {
  constructor(props) {
    super(props)
    const c = props.category
    this.state = {
      name: c && c.name ? c.name : '',
      description: c && c.description ? c.description : '',
      slug: c && c.slug ? c.slug : '',
      loading: false,
      dirty: false
    }
  }
  delete = async () => {
    const request = await fetch(
      `${BASE_URL}/api/categories?id=${this.props.category.id}`,
      { method: 'DELETE' }
    )
    await request.json()
    this.props.router.push(this.props.router.route)
  }
  save = async evt => {
    evt.preventDefault()
    const request = await fetch(
      `${BASE_URL}/api/categories?id=${
        this.props.category ? this.props.category.id : ''
      }`,
      {
        method: this.props.category ? 'PUT' : 'POST',
        body: JSON.stringify({
          name: this.state.name,
          description: this.state.description,
          slug: this.state.slug
        })
      }
    )
    await request.json()
    this.setState({ dirty: false, loading: false })
    this.props.router.push(this.props.router.route)
  }
  render() {
    const { name, description, slug, dirty } = this.state
    return (
      <Form onSubmit={this.save}>
        <Row>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={evt =>
              this.setState({ name: evt.target.value, dirty: true })
            }
          />
        </Row>
        <Row>
          <Label>Slug</Label>
          <Input
            type="text"
            value={slug}
            onChange={evt =>
              this.setState({ slug: evt.target.value, dirty: true })
            }
          />
        </Row>
        <Row>
          <Label>Description</Label>
          <Textarea
            value={description}
            onChange={evt =>
              this.setState({ description: evt.target.value, dirty: true })
            }
          />
        </Row>
        <Row>
          <Input
            type="button"
            value="Supprimer"
            onClick={this.delete}
            disabled={!this.props.category}
          />
          <Input
            type="submit"
            value={this.props.category ? 'Mettre à jour' : 'Créer'}
            disabled={!dirty}
          />
        </Row>
      </Form>
    )
  }
}
export default withRouter(CategoryForm)
