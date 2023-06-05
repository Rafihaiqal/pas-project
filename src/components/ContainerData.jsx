import React, { Component } from 'react'
import ListData from './ListData'
import getData from '../utils/Data'
import InputData from './InputData'

export default class ContainerData extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      dataList: getData()
    }
    this.onDeleteDataHandler = this.onDeleteDataHandler.bind(this)
    this.onAddDataHandler = this.onAddDataHandler.bind(this)
  }

  onDeleteDataHandler(id) {
    const dataList = this.state.dataList.filter((contact) => contact.id !== id)
    this.setState({ dataList })
  }

  onAddDataHandler({ title, body }) {
    if (title.trim() === '' && body.trim() === '') {
      alert('Nama dan deskripsi harus diisi!')
      return
    }
  
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
    this.setState((prevState) => {
      return {
        dataList: [
          ...prevState.dataList,
          {
            id: +new Date(),
            title,
            body,
            createdAt: formattedDate,
            image: './img/default.jpeg'
          }
        ]
      };
    });
  }
  
  render() {
    return (
      <div>
        <InputData addData={this.onAddDataHandler} />
        <ListData dataList={this.state.dataList} onDelete={this.onDeleteDataHandler} />
      </div>
    )
  }
}
