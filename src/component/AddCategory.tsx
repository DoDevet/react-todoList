import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categories, ICategory } from "../atom";

function AddCategory({ setAnchorEl }: any) {
  const setCategoryList = useSetRecoilState<ICategory[]>(categories);
  const { register, handleSubmit, setValue } = useForm();
  const onValid = ({ addCategory }: any) => {
    setCategoryList((prev) => [...prev, addCategory.toUpperCase()]);
    setValue("addCategory", "");
    setAnchorEl(null);
  };

  return (
    <form onSubmit={handleSubmit(onValid as any)}>
      <input
        {...register("addCategory")}
        placeholder="Add List..."
        style={{
          fontSize: 15,
          textAlign: "start",
          margin: 0,
          padding: 10,
        }}
      />
    </form>
  );
}

export default AddCategory;
