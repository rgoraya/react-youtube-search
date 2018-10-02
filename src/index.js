import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBpjthpja2jpmztQK_d8YkWhu12DIawZE4';

// Component class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [], 
      seletedVideo: null 
    };
    
    this.videoSearch("Netflix");
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos, 
        seletedVideo: videos[0]
      })
    });  
  }

  render() {
    const throttledSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div className="container-fluid">
        <SearchBar onSearchTermChange={throttledSearch} />
        <div className="row">
          <VideoDetail video={ this.state.seletedVideo }/>
          <VideoList
            onVideoSelect={ seletedVideo => this.setState( {seletedVideo} ) } 
            videos={ this.state.videos } />        
        </div>
      </div>);
  }
}

// Render component instance to DOM
ReactDOM.render(<App />, document.querySelector('#root'));