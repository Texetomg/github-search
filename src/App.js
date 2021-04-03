
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
