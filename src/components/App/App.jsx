import React from 'react';

import Video from '../Video';
import VideoFormContainer from '../VideoForm';

const App = (props) => {
  return props.call ? (   
    <main>
      <VideoFormContainer />
      <Video />
    </main>
  ) : (
    <main>
      <VideoFormContainer />
    </main>
  );
};

export default App;