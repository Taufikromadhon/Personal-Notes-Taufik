import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      archived: false,
      createdAt: new Date(),
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onCreatedAtChangeEventHandler =
      this.onCreatedAtChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  }

  onCreatedAtChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      createdAt: event.target.value,
    }));
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const maxChar = 50;
    return (
      <div className='note-input'>
        <form
          className='note-input__body'
          id='formId'
          name='formArea'
          onSubmit={this.onSubmitEventHandler}
        >
          <h2 className='note-input__title'>Buat Notes</h2>
          <p className='note-input__title__char-limit' id='lengthOfTextArea'>
            Sisa karakter:&nbsp;
            {maxChar - this.state.title.length}
          </p>
          <input
            type='text'
            placeholder='Apa Judul Catatan Anda? ...'
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            maxLength={50}
          />
          <textarea
            name='areaText'
            id='countTextArea'
            className='note-input__body'
            maxLength={50}
            type='text'
            placeholder='Apa Isi Catatan Anda? ...'
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type='submit'>Simpan</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
