import React, { Component } from 'react'
import Counter from './counter'


class Counters extends Component {
    state = {
        counters: 
            [
            { id: 1, value: 4},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0},
            ]
    }
    
    handleIncrement = (counter) => {
        // console.log(counter)
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        this.setState({ counters })
        console.log(this.state.counters[0])
    }
    
    handleReset = () => {
        const counters = this.state.counters.map(counter => { 
            counter.value = 0;
            return counter
        })
        this.setState({ counters })
    }
    
    handleDelete = (counterId) => {
        // console.log('Event Handler Called', counterId)
        const counters = this.state.counters.filter(counter => counter.id !== counterId)
        // this.setState({ counters: counters })
        this.setState({ counters })
    }
    
    // handleAdd = () => {
    //     let max = 0;
    //     let newCounters = this.state.counters.forEach(counter => {
    //     if (counter.id > max) {
    //         max = counter.id;
    //         }
    //     newCounters = this.state.counters.push({id: max + 1, value: 0})
    //     })
    //     this.setState({counters: newCounters})
    // }
    
                    // value={counter.value} 
                    // id={counter.id} 
                    //by setting counter={counter} you remove the need to keep adding props individually
    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary brn-sm m-2">Reset
                    </button>
                <button 
                    onClick={this.handleAdd}
                    className="btn btn-secondary btn-sm">Add One
                </button>
                { this.state.counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement}
                    onAdd={this.handleAdd}
                    counter={counter}
                />)}
            </div>
            )
    }
}

export default Counters