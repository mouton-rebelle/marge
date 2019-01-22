import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { BASE_URL } = publicRuntimeConfig
import Layout from '../../components/Admin/Layout'
const category = ({ categories }) => {
  return (
    <Layout>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

category.getInitialProps = async () => {
  const res = await fetch(`${BASE_URL}/api/db/categories`)
  const categories = await res.json()
  return { categories }
}

export default category
