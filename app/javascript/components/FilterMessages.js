import React, {Component} from 'react';

class FilterMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: '',
      filter: '',
      results: ''
    }
  }

  componentDidMount() {
    const {messages} = this.props;
    this.setState({
      messages,
      results: messages
    });
  }

  handleChange (name) {
    console.log(this.state.filter);
    return event => {
      const {currentTarget} = event;
      this.setState({
        [name]: currentTarget.value
      });
    }
  }

  filterMessages = (event) => {
    event.preventDefault();
    const {messages, filter} = this.state;
    const downcasedFilter = filter.toLowerCase();
    const filteredMessages = messages.filter(message => {
      const downcasedAuthorName = message.author_name.toLowerCase();
      return downcasedAuthorName.match(downcasedFilter) ? message : null;
    });
    this.setState({
      results: filteredMessages
    }, this.clearForm);
  }

  clearForm = () => {
    this.setState({
      filter: ''
    }, () => this.props.onFilterMessages(this.state.results));
  }

  render() {
    const {messages, filter} = this.state;
    return (
      <div
        className="FilterMessages"
        style={{padding: '40px 20px 2px 20px', backgroundColor: '#fafafa'}}
      >
        <form className="FilterMessagesForm" onSubmit={this.filterMessages}>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
            <div className="group" style={{flexGrow: '1'}}>
              <input
                type="text"
                name="filter"
                id="filter"
                value={filter}
                onChange={this.handleChange('filter')}
                required />
              <span className="bar"></span>
              <label htmlFor="filter"><i className="fas fa-filter"></i> Filter by username</label>
            </div>
            <div style={{width: '105px', flexGrow: '0', textAlign: 'right'}}>
              <button type="submit" style={{width: '75px'}}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export {FilterMessages};
