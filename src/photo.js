import React from "react";
import axios from 'axios';

const ACCESS_TOKEN = "IGQVJYMFRRZAHh5VjFramtDcm1XUk5QMlFCSVNHQWwtNUthbm5XT1RhUmhlVElzbGwyellnbGw1dXloUW5FMXJtNnpJVm53d2g3SjFDNjNMNGNTSlhMUk9YZAFhKTGZATMWlUeDlZATk1n";

function Photo({id, caption, media_url, username, timestamp }){
  return(
    <article id={id} className="article">
      <img className = "photo" src={media_url}/>
      <div className = "username"> {username} </div>
      <div className = "caption"> 
        {caption}
      </div>
      <div className = "timestamp">
        <div className="timestamp_date">{timestamp.substr(0,10)}</div>
        &nbsp;
        <div className="timestamp_time">{timestamp.substr(11,5)}</div> 
      </div>
    </article>
  );
}

export default Photo;