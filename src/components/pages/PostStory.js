import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../../contexts/Context';
import '../../styles/write.css';

export default function PostStory() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    try {
      const res = await axios.post('http://127.0.0.1:3005/api/v1/stories', newPost);
      window.location.replace('http://127.0.0.1:3005/api/v1/stories/' + res.data._id);
    } catch (err) {
      console.log(`something went wrong`);
    }
  };
  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          {/* <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label> */}
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
