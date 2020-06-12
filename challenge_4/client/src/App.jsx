import React from 'react'


  var boardMaker = () => {
  let newboardmodel = [];
  for(let x = 0; x < 6; x ++){
  let newColumn = []
  for(let y = 0; y < 7; y++){
  newColumn.push(0)
  }
  newboardmodel.push(newColumn)
  }
  console.log('gamboard :', newboardmodel)
  return newboardmodel;
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return <p>{boardMaker()}</p>
  }
}

export default App