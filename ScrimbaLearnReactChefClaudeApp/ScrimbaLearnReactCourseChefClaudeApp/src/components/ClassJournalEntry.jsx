import React from 'react'

class ClassJournalEntry extends React.Component {

    componentDidMount() {
        console.log("JournalEntry mounted!");
      }
    
      componentWillUnmount() {
        console.log("JournalEntry unmounted!");
      }
    
      render() {
        return <div>Journal Entry: {this.props.content}</div>;
      } 
}

export default ClassJournalEntry