
import '@styles/globals.css'
import Nav from '@components/nav'
import Provider from '@components/Provider'
export const metadata = {
  title: 'Prompt.ai',
  description: 'Ai generated prompts for writers',
}


const layout = ({ children }) => {
  return (
    <main lang="en">
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </main>
  )
}

export default layout