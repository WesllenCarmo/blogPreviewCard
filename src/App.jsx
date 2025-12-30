import './App.css'
import Card from './components/Card.jsx';
import authorImage from './assets/image-avatar.webp';

function App() {

  return (
    <div className="App">
      <Card
        subject= 'Learning'
        data= '21 Dec 2023'
        title= 'HTML & CSS foundations'
        description= 'These languages are the backbone of every website, defining structure, content, and presentation.'
        authorImage={authorImage}
        authorImageAlt= 'A short, dark brown haired man wearing a light blue t-shirt in a white background.'
        authorName= 'Greg Hooper'/>
    </div>
  )
}

export default App
