import './app.scss';
import Form from "./Form/Form"
import List from './List/List';
import Tag from './Tag/Tag';
import { Context } from "./Context";

export default function App() {
  return (
    <Context>
    <h1>Todo</h1>
    <Form/>
    <Tag/>
    <List/>
    </Context>
  )
}
