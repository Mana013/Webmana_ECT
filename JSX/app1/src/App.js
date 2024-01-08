<<<<<<< HEAD
import React from 'react';
import { Content, Footer, Header } from './func-components';
import Calendar from './class-components';
 
=======
import React from 'react'
import { Content, Footer , Header } from './func-components';
import Calendar from './func-components';

>>>>>>> 4036d508687bcbb69e354b70d1b213031195c230
function App() {
  return (
    <>
      <Header/>
<<<<<<< HEAD
      <p><center><Calendar/></center></p>
=======
      <p><center><Calendar></Calendar></center></p>
>>>>>>> 4036d508687bcbb69e354b70d1b213031195c230
      <Content/>
      <Footer/>
    </>
  )
}
 
export default App;