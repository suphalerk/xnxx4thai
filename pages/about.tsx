
import Router from 'next/router'

const handleClickIndex = () => Router.push({
  pathname: '/'
})


const Index = () => (
  <div>
    <a onClick={() => handleClickIndex()} >Index Page</a>
    <h1>About</h1>
  </div>
)

export default Index