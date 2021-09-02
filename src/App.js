import React from 'react';
import axios from 'axios';
import Photo from './photo';
import './App.css';

const ACCESS_TOKEN = "IGQVJYMFRRZAHh5VjFramtDcm1XUk5QMlFCSVNHQWwtNUthbm5XT1RhUmhlVElzbGwyellnbGw1dXloUW5FMXJtNnpJVm53d2g3SjFDNjNMNGNTSlhMUk9YZAFhKTGZATMWlUeDlZATk1n";

let tmp = [];

async function getChild(id){
  tmp = await axios.get(`https://graph.instagram.com/${id}/children?fields=media_url,media_type&access_token=${ACCESS_TOKEN}`); 
  console.log(tmp.data);
  return tmp.data;
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      data: [],
      child: []
    };

    this.getPhotos = async() => {
      const {
        data: {data}
      } = await axios.get("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,username,timestamp&access_token=" + ACCESS_TOKEN);
      this.setState({data, isLoading: false});
    };
  }

  componentDidMount(){
    this.getPhotos();
  }

  render() {
    const {isLoading, data} = this.state;
    return (
      <section className="articles">
      { 
        isLoading ? (
        <div className="loader">Loading...</div>
        ) : (
          data.map(function(photo){
            if(photo.media_type === "IMAGE")
            return (
              <Photo
                key = {photo.id}
                caption = {photo.caption}
                media_url = {photo.media_url}
                username = {photo.username}
                timestamp = {photo.timestamp}
              />
            )
            else if(photo.media_type === "CAROUSEL_ALBUM"){
              this.child = getChild(photo.id);
              console.log(this.child);
            }
          })
        )
      }
      </section>
    );
  }
}

export default App;