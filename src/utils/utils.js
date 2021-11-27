import { format } from "date-fns";

export const convertDate = (arg) => {
  const date = arg.slice(0, 10);
  const arr = [];
  arr.push(date.slice(0, 4));
  arr.push(date.slice(5, 7));
  arr.push(date.slice(9, 11));
  const newDate = format(new Date(arr[0], arr[1], arr[2]), "dd/MM/yyyy");
  return newDate;
};
