import React from 'react';
import { connect } from 'react-redux';


class BioItem extends React.Component {
    getInitialState() {
        return {typed: ''};
    }

    onBlur(event) {
        this.setState({typed: event.target.value});
        axios.put('/api/mentors/5bcfb5b2a3a9c009bfddfabf/bios/5be236e58bc647043b228a9e', ({
            "bio": "if u see this",
            "title": "it worked!"
        }));    //hardcoded vals
    }
    
    render() {
        return (
            <div>
                <h4 contentEditable="true" onBlur={this.onBlur.bind(this)}>{this.props.title}</h4>
                <p contentEditable="true" onBlur={this.onBlur.bind(this)}>{this.props.description}</p>
            </div>
        )
    }
};



export default (BioItem);