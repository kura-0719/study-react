import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [txt, setText] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(txt)) {
        alert("同じ要素が既に存在します");
        return prevArray;
      }
      return [...prevArray, txt];
    });
  }, [txt]);

  return { txt, array, handleChange, handleAdd };
};
