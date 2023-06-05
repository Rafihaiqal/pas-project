import React, { Component } from 'react'

export default class InputData extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.onTitleEventHandler = this.onTitleEventHandler.bind(this)
    this.onBodyEventHandler = this.onBodyEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onTitleEventHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value
      }
    })
  }

  onBodyEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value
      }
    })
  }

  onSubmitEventHandler(e) {
    e.preventDefault()
    this.props.addData(this.state)
    this.setState(() => {
      return {
        title: '',
        body: ''
      }
    })
  }

  render() {
    return (
      <div className='input-form'>
          <form onSubmit={this.onSubmitEventHandler}>
            <h1>Stadium Bola Internasional</h1>
            <div className="input-wrapper">
              <label>
                Nama Stadium <span className="red">*</span>
              </label>
              <input
                type="text"
                title={this.state.title}
                value={this.state.title}
                onChange={this.onTitleEventHandler}
                placeholder='Masukkan nama stadium'
              />
            </div>
            <div className="input-wrapper">
              <label>
                Deskripsi Stadium <span className="red">*</span>
              </label>
              <textarea
                type="text"
                body={this.state.body}
                value={this.state.body}
                onChange={this.onBodyEventHandler}
                placeholder='Masukkan deskripsi stadium'
              />
            </div>
            <button type='submit' className="input-button">Submit</button>
          </form>
      </div>
    )
  }
}
