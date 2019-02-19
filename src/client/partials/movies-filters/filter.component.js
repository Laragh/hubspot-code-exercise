import React, { Component } from 'react';
import './movies-filters.scss';


export default class FilterDropdown extends Component {

    render() {
        const active = this.props.filter ? this.props.filter.active : null;

        return (

            <div className="Dropdown_Select" onClick={() => { this.props.activateDropdown(this.props.type) }}>

                <div className="Dropdown_Select__Placeholder"><div>{this.props.type}</div><div className="arrow-down"></div></div>
                <ul className={this.props.filters.active ? 'Dropdown' : 'Dropdown--hidden'}>
                    {
                        this.props.filters.types.map((item, i) => {
                            return <li key={i}><label className="checkbox-container">

                                <input type="checkbox" value={item.name} checked={item.checked} onChange={() => { this.props.checkboxHandler(item) }} />
                                <span className="checkmark"></span>
                                {item.name}
                            </label>

                            </li>
                        })
                    }
                </ul>
            </div>)
    }
}
