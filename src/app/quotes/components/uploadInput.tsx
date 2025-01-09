"use client";

import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import MultiImageExample from "./multiImageExample";

export default function UploadInput<T extends FieldValues>(
  props: UseControllerProps<T>
) {
  const {
    field: { onChange },
  } = useController(props);

  return (
    <MultiImageExample
      onChange={(values) => {
        onChange(values);
      }}
    />
  );
}
