import { Command } from "@tauri-apps/api/shell";
import { invoke } from "@tauri-apps/api/tauri";

import { FC, Fragment, useState } from "react";

export interface AddNewProps {}

const AddNew: FC<AddNewProps> = (props) => {
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState("");

  async function hello() {
    setMsg(await invoke("hello", { name: "aa" }));
  }

  async function download() {
    const command = Command.sidecar("bin/yt-dlp", [url]);
    const output = await command.execute();
    setMsg(output.code == 0 ? output.stdout : output.stderr);
  }

  return (
    <Fragment>
      <div>
        <div className="form-control">
          <div className="input-group p-4">
            <input
              id="url"
              onChange={(e) => setUrl(e.currentTarget.value)}
              placeholder="Enter a url..."
              className="input input-bordered w-full"
            />

            <button
              className="btn btn-square btn-primary"
              onClick={() => download()}
            >
              下载
            </button>
          </div>
        </div>

        <div className="flex flex-row p-5">
          <p>{msg}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default AddNew;
