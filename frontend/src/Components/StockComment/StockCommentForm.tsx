import React, { useState } from "react";

type Props = {
  symbol: string;
  handleComment: (form: { title: string; content: string }) => void;
};

const StockCommentForm = ({ handleComment }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    handleComment({
      title,
      content,
    });

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded"
      />

      <textarea
        placeholder="Comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="p-2 border rounded"
      />

      <button className="bg-green-600 text-white p-2 rounded">
        Comment
      </button>
    </form>
  );
};

export default StockCommentForm;