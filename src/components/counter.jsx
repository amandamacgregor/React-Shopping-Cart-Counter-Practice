import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     // imageUrl: "https://picsum.photos/200"
    //             // <img src={this.state.imageUrl} alt=""/> <--this was right above span in render
    //     tags: ['tag1', 'tag2', 'tag3']
    // };
    
    // non-es6
    // constructor = () => {
    //     super()
    // }
    
    //to apply this to specific elements. Otherwise Inline styling style={{fontSize:30}}, below is fine.
    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    }
    
    // renderTags() {
    //     if (this.state.tags.length === 0) {
    //         return <p>There are no tags!</p>
    //     } else {
    //         return <ul>{ this.state.tags.map(tag => <li key={ tag }>{ tag } </li>) }</ul>
    //     }
    // }
    
                // <div>
                //     { this.state.tags.length === 0 && "Please create a new tag!" }
                //     { this.renderTags() }
                // </div>
    // handleIncrement = () => {
    //     // console.log('Increment Clicked', this.state.count)
    //     this.setState({ value: this.props.value + 1 })
    // }

    
    render() {
        console.log(this.props)
        
        return (
            <React.Fragment>
                <h4>Counter ID: {this.props.counter.id}</h4>
                <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm">Increment
                </button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </React.Fragment>
        )
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary"
        return classes
    }
    
    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? "Zero" : value
    }
    
}

export default Counter;