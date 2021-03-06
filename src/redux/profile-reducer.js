const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, post: 'Hi, how are you', likes: 2},
    {id: 2, post: 'It`s my first post', likes: 24}
  ],
  newPostText: 'new fixed text'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        post: state.newPostText,
        likes: 10
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    default:
      return state;
  }
}

export const addPostactionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer;
