import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  eachPet = (pet, i) => {
		return (
			<Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
		)
	}

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(this.eachPet)}
      </div>
    );
  }
}

export default PetBrowser
