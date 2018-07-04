import React, {Component} from 'react';
import {Message} from '../../requests/messages';
import {Link} from 'react-router-dom';
import {Loading} from '../Loading';
import {SortByColumn} from '../SortByColumn';

class StatsPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      authors: [],
      displayedAuthors: []
    }
    this.nameAsc = this.nameAsc.bind(this);
    this.nameDesc = this.nameDesc.bind(this);
    this.totalAsc = this.totalAsc.bind(this);
    this.totalDesc = this.totalDesc.bind(this);
    this.count24hAsc = this.count24hAsc.bind(this);
    this.count24hDesc = this.count24hDesc.bind(this);
  }

  componentDidMount () {
    Message
      .get_stats_author()
      .then(authors => {
        this.setState({
          loading: false,
          authors,
          displayedAuthors: authors.slice(0, 50)
        })
      });
  }

  nameAsc (event) {
    event.preventDefault();
    const {authors} = this.state;
    const authorsCopy = authors.slice(0);
    const displayedAuthors = authorsCopy.sort((a, b) => {
      const keyA = a.author_name;
      const keyB = b.author_name;
      return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0));
    });
    this.setState({
      displayedAuthors: displayedAuthors.slice(0,50)
    });
  }
  nameDesc (event) {
    event.preventDefault();
    const {authors} = this.state;
    const authorsCopy = authors.slice(0);
    const displayedAuthors = authorsCopy.sort((a, b) => {
      const keyA = a.author_name;
      const keyB = b.author_name;
      return ((keyA < keyB) ? 1 : ((keyA > keyB) ? -1 : 0));
    });
    this.setState({
      displayedAuthors: displayedAuthors.slice(0,50)
    });
  }
  totalAsc (event) {
    event.preventDefault();
    const {authors} = this.state;
    const authorsCopy = authors.slice(-50);
    const displayedAuthors = authorsCopy.reverse();
    this.setState({
      displayedAuthors
    });
  }
  totalDesc (event) {
    event.preventDefault();
    const {authors} = this.state;
    const authorsCopy = authors.slice(0,50);
    this.setState({
      displayedAuthors: authorsCopy
    });
  }
  count24hAsc (event) {
    event.preventDefault();
    const {authors} = this.state;
    const authorsCopy = authors.slice(0);
    const displayedAuthors = authorsCopy.sort((a, b) => {
      const keyA = a.author_message_count_24h;
      const keyB = b.author_message_count_24h;
      return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0));
    });
    this.setState({
      displayedAuthors: displayedAuthors.slice(0,50)
    });
  }
  count24hDesc (event) {
    event.preventDefault();
    const {authors} = this.state;
    const authorsCopy = authors.slice(0);
    const displayedAuthors = authorsCopy.sort((a, b) => {
      const keyA = a.author_message_count_24h;
      const keyB = b.author_message_count_24h;
      return ((keyA < keyB) ? 1 : ((keyA > keyB) ? -1 : 0));
    });
    this.setState({
      displayedAuthors: displayedAuthors.slice(0,50)
    });
  }

  render () {
    const {
      loading,
      authors,
      displayedAuthors
    } = this.state;

    if (loading) {
      return (
        <main className="StatsPage">
          <Loading loadingContent="community stats" />
        </main>
      )
    }

    return (
      <main className="StatsPage">
        <h2 style={{marginBottom: '20px'}}>Community Stats</h2>
        <h5 style={{marginLeft: '20px'}}>Most active members by chat messages</h5>
        <div className="table-responsive-md" style={{
          overflowX: 'scroll'
        }}>
          <table className="StatsTable table table-hover" style={{padding: '20px'}}>
            <thead>
              <tr>
                <th scope="col" style={{minWidth: '80px', minWidth: '80px'}}>
                  Rank
                </th>
                <th scope="col" style={{minWidth: '200px', maxWidth: '200px'}}>
                  Username&nbsp;
                  <SortByColumn ascending={this.nameAsc} descending={this.nameDesc} />
                </th>
                <th scope="col" style={{minWidth: '135px', maxWidth: '135px'}}>
                  Total Count&nbsp;
                  <SortByColumn ascending={this.totalAsc} descending={this.totalDesc} />
                </th>
                <th scope="col" style={{minWidth: '135px', maxWidth: '135px'}}>
                  24H Count&nbsp;
                  <SortByColumn ascending={this.count24hAsc} descending={this.count24hDesc} />
                </th>
                <th scope="col" style={{minWidth: '200px', maxWidth: '200px'}}>
                  Last Message
                </th>
              </tr>
            </thead>
            <tbody>
              {
                displayedAuthors.map((author, i) => (
                  <tr key={i}>
                    <th scope="row" style={{minWidth: '80px', maxWidth: '80px'}}>{i+1}</th>
                    <td style={{
                      minWidth: '200px', maxWidth: '200px', overflow: 'hidden',
                      textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                    }}>
                      <Link to={`/messages/author/${author.author_name}`}>
                        <strong>
                          {author.author_name}
                        </strong>
                      </Link>
                    </td>
                    <td style={{minWidth: '135px', maxWidth: '135px'}}>{author.author_message_count}</td>
                    <td style={{minWidth: '135px', maxWidth: '135px'}}>{author.author_message_count_24h}</td>
                    <td style={{
                      minWidth: '200px', maxWidth: '400px', overflow: 'hidden',
                      textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                    }}>{author.last_message}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </main>
    )
  }
}

export {StatsPage};
