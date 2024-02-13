import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create A Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select A Category</option>
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="images/*" />
          <Button type="button" className="bg-[#008080]" size="sm" outline>
            Upload Image
          </Button>
        </div>
        <ReactQuill theme="snow" className="h-72 mb-12" required />
        <Button type="submit" className="bg-[#008080]">
          Publish
        </Button>
      </form>
    </div>
  );
}
