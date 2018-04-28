import React from 'react'
import SavedFortune from './SavedFortune'

class SavedFortuneContainer extends React.Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render() {
    let renderedFortunes = this.props.fortunes.map(fortune=>{
      return (
        <div><SavedFortune fortune={fortune} key={fortune.id}/></div>
      )
    })

    return (
      <div>
        {renderedFortunes}
      </div>
    )
  }
}

export default SavedFortuneContainer
