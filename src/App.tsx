import React from 'react';
import logo from './logo.svg';
import './App.css';

enum NotebookEntryType {
  JAVASCRIPT, MARKDOWN, HTML, TEX
}

interface NotebookEntryMdl {
  id: number,
  type: NotebookEntryType,
  text: string,
  pinned: boolean
}

const notebook: Array<NotebookEntryMdl> = [
  {
    id: 1,
    type: NotebookEntryType.HTML,
    text: "Hello world",
    pinned: false,
  },
  {
    id: 2,
    type: NotebookEntryType.JAVASCRIPT,
    text: "1 + 2",
    pinned: true
  }
];

interface NotebookEntryProp {
  id: number,
  type: NotebookEntryType,
  text: string,
  pinned: boolean
}

interface NotebookEntryState {
  id: number,
  type: NotebookEntryType,
  text: string,
  pinned: boolean
}

interface NotebookEntryProps {
  key: number,
  value: NotebookEntryProp
}

class NotebookEntry extends React.Component<NotebookEntryProps> {
  state: NotebookEntryState

  constructor(props: NotebookEntryProps) {
    super(props);

    this.state = {
      id: props.value.id,
      type: props.value.type,
      text: props.value.text,
      pinned: props.value.pinned
    };
  }

  render() {
    return <div className="NotebookEntry">{this.state.id}: {this.state.text} ({this.state.type})</div>
  }
}


function App() {
  const notebookEntries = notebook.map((entry) =>
    <NotebookEntry key={entry.id} value={entry} />
  );

  return (
    <div className="Notebook">
      {notebookEntries}
    </div>
  );
}

export default App;
