import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { createAction, deleteAction, updateAction } from './actions/actions';
import App from "./App"
import indexLoader from './loaders/indexLoader';
import showLoader from './loaders/showLoader';
import Index from "./pages/Index"
import Show from "./pages/Show"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/videos/' element={<App/>}>
        <Route path='' element={<Index/>} loader={indexLoader}/>
        <Route path=':id' element={<Show/>} loader={showLoader}/>
        <Route path='create' action={createAction}/>
        <Route path='update/:id' action={updateAction}/>
        <Route path='delete/:id' action={deleteAction}/>
    </Route>
))

export default router;