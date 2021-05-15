import * as React from 'react';



const App = () => {
  const stories= [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');
  
const handleChange = event => {
setSearchTerm(event.target.value);
};
return (
<div className={"container mx-5"}>
<h1 className={"my-5 text-2xl font-bold"}>My Hacker Stories</h1>
<label className={"font-bold"} htmlFor="search">Search: </label>
<input className={"bg-blue-600 rounded text-white"} id="search" type="text" onChange={handleChange} />
<p>
Searching for <strong>{searchTerm}</strong>.
</p>
<hr />
<List list={stories} />
</div>
);
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
);

export default App;
