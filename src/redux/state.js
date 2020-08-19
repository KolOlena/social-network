let rerenderEntireTree = () => {
  console.log('state is chenged');
}

let state = {
  messegesPage: {
    dialogs: [
      {id: 1, name: 'Ivan for git', image: 'https://img.icons8.com/material/4ac144/256/user-male.png'},
      {id: 1, name: 'Ivan', image: 'https://img.icons8.com/material/4ac144/256/user-male.png'},
      {id: 2, name: 'Petr', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9orP99Ey4GYJTWuy2D5Ys_schXKVwCwcKAg&usqp=CAU'},
      {id: 3, name: 'Ann', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSajs_UddBfsexfYPCS7V1tWYRuS5U1Bk8Wqw&usqp=CAU'},
      {id: 4, name: 'Svetlana', image: 'https://wsbuq.ru/prodvizheniye-saytov/img/contact.png'},
      {id: 5, name: 'Ihor', image: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8F-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-131363829.jpg'},
    ],
    messege: [
      {id: 1, messege: 'Hi'},
      {id: 2, messege: 'Hello'},
      {id: 3, messege: 'By'},
    ]
  },

  profilePage: {
    posts: [
      {id: 1, post: 'Hi, how are you', likes: 2},
      {id: 2, post: 'It`s my first post', likes: 24}
    ],
    newPostText: 'new fixed text'
  }
};

export const addPost = () => {
  let newPost = {
    id: 3,
    post: state.profilePage.newPostText,
    likes: 10
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
}


export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
