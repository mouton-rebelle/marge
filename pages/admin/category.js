import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { BASE_URL } = publicRuntimeConfig
import Layout from '../../components/Admin/Layout'
import CategoryForm from '../../components/Admin/CategoryForm'
const category = ({ categories }) => {
  return (
    <Layout>
      {categories.map(cat => (
        <CategoryForm key={cat.id} category={cat} />
      ))}
      <CategoryForm />
    </Layout>
  )
}

category.getInitialProps = async () => {
  const res = await fetch(`${BASE_URL}/api/categories`)
  const categories = await res.json()
  return { categories }
}

export default category
