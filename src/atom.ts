import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface ICategory {
  category: string;
}

export interface ITodo {
  id: number;
  text: string;
  category: string;
}

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: localStorage.getItem("username") ?? null,
});

export const todoList = atom<ITodo[]>({
  key: "todoList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categories = atom<ICategory[]>({
  key: "categories",
  default: ["TODO"] as any,
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<ICategory["category"]>({
  key: "category",
  default: "TODO",
});

export const todoSelector = selector({
  key: "todoStorage",
  get: ({ get }) => {
    const todos = get(todoList);
    const category = get(categoryState);
    return todos.filter((item) => item.category === (category as any));
  },
});

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => {
    const category = get(categoryState);
    const categoryList = get(categories);
    return categoryList.filter((item) => item !== (category as any));
  },
});
