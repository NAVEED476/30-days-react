import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateTodo, fetchData } from "../Redux-fetch/Slice";

const Listing = () => {
    const [title,setTitle] = useState("praesentium facilis omnis laudantium fugit ad iusto nihil nesciuntpraesentium facilis omnis laudantium fugit ad iusto nihil nesciunlaboriosam mollitia et enim quasi adipisci quia provident illumlaboriosam mollitia et enim quasi adipisci quia provident illum");
    const [userId, setUserId] = useState("")
    
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchData());
  };
  const handleCreateTodo = (newtodo) =>{
    dispatch(CreateTodo({id:1, title:title, isCompleted:true}))
  }
  const todoData = useSelector((state) => state);

  useEffect(() => {
    console.log(todoData);
  }, [todoData]);

  if (todoData.todo.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
        <div>
            <input type="text" /><br />
            <input type="text" /><br />
            <input type="text" /><br />
            <button onClick={handleCreateTodo}>Create Todo</button>
        </div>
      <button onClick={handleClick}>Fetch Data</button>

      <div>
        {todoData.todo.data &&
          todoData.todo.data.map((obj) => {
            return (
              <div key={obj.id}>
                <p>{obj.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Listing;
