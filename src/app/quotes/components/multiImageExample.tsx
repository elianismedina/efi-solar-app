/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  FileState,
  MultiFileDropzone,
} from "@/components/ui/multi-file-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import React from "react";

export default function MultiImageExample(params: {
  onChange?: (
    value: { url: string; filename: string }[]
  ) => void | Promise<void>;
}) {
  const [fileStates, setFileStates] = React.useState<FileState[]>([]);
  const [values, setValues] = React.useState<
    { key: string; url: string; filename: string }[]
  >([]);

  React.useEffect(() => {
    void params.onChange?.(
      values.map(({ url, filename }) => ({ url, filename }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const { edgestore } = useEdgeStore();

  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <div className="flex flex-col items-center">
      <MultiFileDropzone
        value={fileStates}
        dropzoneOptions={{
          maxFiles: 10,
          maxSize: 1024 * 1024 * 1, // 1 MB
        }}
        onFilesAdded={async (addedFiles) => {
          setFileStates([...fileStates, ...addedFiles]);
          setValues([
            ...values,
            ...addedFiles.map((file) => ({
              key: file.key,
              filename: file.file.name,
              url: "",
            })),
          ]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {
                const res = await edgestore.publicFiles.upload({
                  file: addedFileState.file,
                  onProgressChange: async (progress) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      // wait 1 second to set it to complete
                      // so that the user can see the progress bar
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      updateFileProgress(addedFileState.key, "COMPLETE");
                    }
                  },
                  input: { type: "bill" },
                });

                setValues((values) =>
                  values.map((value) =>
                    value.key === addedFileState.key
                      ? { ...value, url: res.url }
                      : value
                  )
                );
              } catch (err) {
                updateFileProgress(addedFileState.key, "ERROR");
              }
            })
          );
        }}
      />
    </div>
  );
}
