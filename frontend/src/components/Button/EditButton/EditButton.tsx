import type { EditButtonProps } from "./types";

const EditButton = ({ onClick }: EditButtonProps) => (
  <button type="button" onClick={onClick}>
    Edit
  </button>
);

export { EditButton };
