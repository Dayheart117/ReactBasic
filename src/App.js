import React from "react"

function Hello () {
  const HandleClick = (e, msg) => {
    // 阻止默认事件
    e.preventDefault()
    console.log("function", e, msg)
  }
  return <div onClick={(e) => HandleClick(e, "msg")}>Hello,this is a function component</div>
}

class HelloComponent extends React.Component {
  //事件回调函数写法可以明确this指向，各指各的
  HandleClick () {
    console.log("class")
  }
  render () {
    return <div onClick={this.HandleClick}>Hello,this is a class component</div>
  }
}
class Counter extends React.Component {
  state = {
    count: 0
  }
  changeCount = () => {
    this.setState({
      count: this.state.count + 3
    })
  }
  render () {
    return (
      <div>
        state:{this.state.count}
        <button onClick={this.changeCount}>click</button>
      </div>)
  }
}

function App () {
  return (
    <div className="App">
      <Hello />
      <HelloComponent />
      <Counter />
    </div>
  )
}

export default App
