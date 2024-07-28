
import React from "react";
import { createPost } from "../actions/actions";

const Form =  async () => {

  return (
      <form action={createPost} className="flex flex-col gap-y-2 w-[300px] ">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-2 py-1 rounded-sm"
        />
        <textarea
          name="content"
          rows={5}
          placeholder="Content"
          className="px-2 py-1 rounded-sm bg-gry"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded-sm"
        >
          Create Post
        </button>
      </form>
  );
};

export default Form;
