import React, {useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import Postitem from "./components/Postitem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Myinput from "./components/UI/input/Myinput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "а", body: "я"},
        {id: 2, title: "б", body: "ч"},
        {id: 3, title: "в", body: "в"},
        {id: 4, title: "в", body: "а"},
    ])

  const [filter, setFilter] = useState({sort: "", query: ""})

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const createPost = (newPost) => {
        setPosts([...posts,newPost])
        setModal(false)
  }



  const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
  }


  return(
      <div className="App">
          <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
              Создать пост
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
          </MyModal>
          <hr style={{margin: "15px 0"}}/>
          <PostFilter
            filter={filter}
            setFilter={setFilter}
          />
          {sortedAndSearchedPosts.length !==0
          ?<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты"/>
          : <h1 style={{textAlign: "center"}}>Посты не найдены</h1>
          }
      </div>

  );
}

export default App;