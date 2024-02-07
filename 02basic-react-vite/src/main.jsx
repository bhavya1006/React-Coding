import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>
      Chai se badlav layenge!
    </h1>
  )
}

const ReactElement = {
  type: 'a',
  props: {
      href: 'https.google.com',
      target: '_blank'
  },
  children: ' Click me to visit the google'
}

const AnotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = 'Bhvy';

const reactElement = React.createElement(
  'a',
  {href:'https:googgle.com',
  target:'_blank'},
  'Click to open Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />
    // MyApp()
    // <ReactElement />
    // ReactElement
    // <AnotherElement/>
    reactElement

  
)
