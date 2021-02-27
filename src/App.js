import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import "./TodoList.css"
import './App.css';

// todoを特定するための一意なキーに使用する
let currentId = 0

function App() {
  //todoリストのデータが入るstate
  const [todos, setTodos] = useState([])
  //todoリスト自身が入るstate
  const [text, setText] = useState('')

  //フィールドに何か入力されたら呼ばれる関数
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  //新しいtodoを追加する関数
  const pushTodo = (e) => {
    e.preventDefault()
    if(!text) {
      return
    }

    //新しいtodoの作成
    const newTodo = {
      id: currentId,
      checked: false,
      text: text
    }

    //入力欄と対応するstateをリセットする
    setText('')
    //今までのtodosと新しく作ったtodoを合成する
    setTodos([...todos, newTodo])
    currentId += 1
  }

  return (
    <div className="App">
      <div className="container">
      <h1 className="title">Example Todo</h1>
      <ul className="tools">
        <li className="tool">
          <FontAwesomeIcon className="delete-all-icon" icon={faTrashAlt} />
        </li>
      </ul>
      <div className="todo-list">
        <form className="todos-header">
          <input className="todos-header-input" type="text" onChange={onChangeHandler}/>
          <input className="todos-header-plus" type="submit" value="＋" onClick={pushTodo}/>
        </form>
        {/* ループする場所 */}
        <ul className="todos">
          <li className="todo">
            <input
              className="todo-checkbox"
              type="checkbox"
            />
            <label className="todo-text">
              テキストが入る場所
            </label>
          </li>
        </ul>
        {/* ループ終了 */}
      </div>
      </div>
    </div>
  );
}

export default App;


