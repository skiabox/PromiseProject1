//Mimic server with database
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

//Asynchronous way of doing things
const createPost = post => {
  return new Promise((resolve, reject) => {
    //Passes post to the array of posts after 2 seconds
    setTimeout(() => {
      console.log('createPost called');
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
};

const getPosts = () => {
  //Delay for one second to get the posts
  setTimeout(() => {
    console.log('getPosts called');
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });

    //output the result to the browser
    document.body.innerHTML = output;
  }, 1000);
};

//Now createPost takes a second argument, a callback function
createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(err => {
    console.log(err);
  });
