import React, { Component } from 'react';
import './styles.css';

class ListCategory extends Component {
    constructor() {
        super();
        this.state = {categories: []};
        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount() {
        this.props.categories.subscribe(this._newCategories);
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newCategories);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories})
    }

    _handleInputEvent(event) {
        if(event.key == 'Enter') {
            let categoryValue = event.target.value;
            this.props.addCategory(categoryValue);
        }
    }

    render() {
        return( 
            <section className = 'list-category'>
                <ul className = 'list-category_list'> 
                        {this.state.categories.map((category, index) => {

                        
                            return <li key = {index} className = 'list-category_item'>{category}</li>
    }                   )}
                </ul>
                <input 
                    type = 'text' 
                    className = 'list-category_input' 
                    placeholder = 'Digite a nova categoria'
                    onKeyUp = {this._handleInputEvent.bind(this)}
                />
            </section>
        );
    }
}

export default ListCategory;