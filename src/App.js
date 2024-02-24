import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import Tag from './Components/Tag/Tag';
import ModalWindow from './Components/ModalWindow/ModalWindow';
import { Context } from "./Context";

export default function App() {
  return (
    <Context>
    <h1>Todo</h1>
    <Form/>
    <Tag/>
    <ModalWindow/>
    <List/>
    </Context>
  )
}
