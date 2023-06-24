"use client";

import styles from "./page.module.css";
import { useAppSelector, useAppDispatch, RootState } from "../redux/store";
import { fetchTodos } from "@/redux/reducers/todoService";
import { resetTodos } from "@/redux/reducers/todoReducer";

export default function Home() {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((state: RootState) => state.todos);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Got Error...{error}</div>;
  }

  return (
    <main className={styles.main}>
      <div>Hello World from Redux Toolkit</div>

      <button onClick={() => console.log("STORE: ", data)}>Print Redux Store</button>
      <button onClick={() => dispatch(fetchTodos())}>Load Todos</button>
      <button onClick={() => dispatch(resetTodos())}>Reset Todos</button>

      {data.map((todo, index) => (
        <div key={index}>
          <p style={{ color: "red" }}>{todo.title}</p>
        </div>
      ))}
    </main>
  );
}
