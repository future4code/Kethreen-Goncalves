import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Kell Lanes'}
          fotoUsuario={'https://picsum.photos/50/50/?blur=2'}
          fotoPost={'https://picsum.photos/200/150/?blur=1'}
        />
        <Post
          nomeUsuario={'Clara Macedo'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/id/237/200/150'}
        />
        <Post
          nomeUsuario={'Isis Callis'}
          fotoUsuario={'https://picsum.photos/50/50/?blur=3'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </div>
      
    );
  }
}

export default App;
