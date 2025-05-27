import {FlatList, StatusBar, useColorScheme, View} from 'react-native';
import Video from 'react-native-video';

import * as React from 'react';

const data = [
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-1080p-30sec.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-1080p-60fps-30sec.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-480p-30sec.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-1080p-30sec.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-1080p-60fps-30sec.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-480p-30sec.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-1080p-30sec.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-1080p-60fps-30sec.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-480p-30sec.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-1080p-30sec.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-1080p-60fps-30sec.mp4',
  'https://github.com/chthomos/video-media-samples/raw/refs/heads/master/big-buck-bunny-480p-30sec.mp4',
  // 'https://www.elecard.com/storage/video/SFTI_1280x720.bin?_gl=1*1uaevrc*_gcl_au*NTAzODA1MDA1LjE3NDgzNzgxMzY.*_ga*MTA4NTUzMTA0MS4xNzQ4Mzc4MTM1*_ga_JVRSY3ELFD*czE3NDgzNzgxMzUkbzEkZzAkdDE3NDgzNzgxMzUkajAkbDAkaDA.',
];

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={({item}) => (
          <Video
            source={{
              uri: item,
            }}
            style={{width: '100%', aspectRatio: 16 / 9}}
            controls={true}
            resizeMode="contain"
            repeat={true}
          />
        )}
      />
    </View>
  );
}

export default App;
