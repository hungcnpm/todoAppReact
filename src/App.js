import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import{library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          text: "Sleep",
          key: 1,
        },
        {
          text: "Code",
          key: 0,
        },
      ],
      search:"",
      currentItems: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItems: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  handleSearch(e)
  {
    this.setState({
      search: e.target.value,
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItems;
    console.log(newItem);
    if (newItem.text != "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        search:"",
        currentItems: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const filterItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filterItems,
    });
  }
  render() {
    return (
      <div className="container">
        <h1>TO DO LIST</h1>
        <div className="App">
          <header>
            <input
              id="filter"
              type="text"
              placeholder="Filter work"
              value = {this.state.search}
              onChange={this.handleSearch}
            ></input>
            <form id="todo-form" onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="Enter work"
                value={this.state.currentItems.text}
                onChange={this.handleInput}
              ></input>
              <button type="submit">Add</button>
            </form>
          </header>
          <ListItems
            items={this.state.items}
            search={this.state.search}
            deleteItem={this.deleteItem}
          ></ListItems>
        </div>
      </div>
    );
  }
} 

export default App;
