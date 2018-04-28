import React from 'react'
import SavedFortune from './SavedFortune'
import DeleteGifButton from './DeleteGifButton'

class SavedFortuneContainer extends React.Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render() {
    let renderedFortunes = this.props.fortunes.map(fortune=>{
      return (
        <div>
          <SavedFortune fortune={fortune} key={fortune.id}/>
          <DeleteGifButton fortuneId={fortune.id} deleteGif={this.props.deleteGif}/>
        </div>
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
