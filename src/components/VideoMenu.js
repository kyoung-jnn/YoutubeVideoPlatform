import React, { useState } from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import YouTube from "react-youtube";

const Video = (props) => {
  console.log("메인화면", props);
  const [videos, setVideos] = useState(props.video);

  const opts = {
    width: "100%",

    playerVars: {
      autoplay: 0,
    },
  };

  const renderVideoMenu = videos.map((video) => {
    return (
      <Grid>
        <Paper style={{ cursor: "pointer" }}>
          <img
            style={{ width: "100%" }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
            onMouseDown
          />
        </Paper>
        <Paper style={{ padding: "10px", marginBottom: "20px" }}>
          <Typography variant="h5" style={{ fontSize: "6px" }}>
            {video.snippet.title}
          </Typography>
        </Paper>
      </Grid>
    );
  });

  return (
    <React.Fragment>
      <Grid item xs={2}>
        {renderVideoMenu}
      </Grid>
    </React.Fragment>
  );

  // if (mainVideo == null) return <div>Loading...</div>;
  // else {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={6}>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  function _onReady(event) {
    event.target.pauseVideo();
  }
};

export default Video;
