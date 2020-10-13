// import react dependancies
import React from "react";

// import css style rules
import '../App.css';

// app's card presentational class component initiate with props from map function on array in CardGrid
class Card extends React.Component {
    // no need for constructor, could convert to stateless function
    render() {
        return (
            <div key={this.props.id} className="card"> {/* container list to wrap child component use id for dynamic creation */}
                {/* card image and info */} 
                <div className="card-image">
                    <img src={this.props.imageUrl} alt={`${this.props.toonName} Thumbnail`} />
                </div>

                {/* character details - name, status, species, and gender */}
                <div className="card-details">
                    <h2>Character Details</h2>
                    <ul className="card-details-list">
                        <li>
                            <strong>Name: </strong>{this.props.toonName}
                        </li>
                        <li>
                            <strong>Status: </strong>{this.props.toonStatus}
                        </li>
                        <li>
                            <strong>Species: </strong>{this.props.toonSpecies}
                        </li>
                        <li>
                            <strong>Gender: </strong>{this.props.toonGender}
                        </li>
                    </ul>                    
                </div>
                
                
            </div>                
        );        
    }
}

// make class available for import
export default Card;