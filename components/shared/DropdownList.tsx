import React, { startTransition, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import {
  createCategory,
  getAllCategories,
} from "@/lib/actions/category.actions";
type DropDownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

function DropdownList({ onChangeHandler, value }: DropDownProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trim(),
    }).then((category) => {
      setCategories((prevState) => [...prevState, category]);
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      categoryList && setCategories(categoryList as ICategory[]);
    };
    getCategories();
  }, []);
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              className="select-item p-regular-14"
              key={category._id}
              value={category._id}
            >
              {category.name}{" "}
            </SelectItem>
          ))}
        <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50">
            Add a new Category
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Add New Category</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type="text"
                  className="input-field"
                  placeholder="Enter A New Category"
                  onChange={(e) => {
                    setNewCategory(e.target.value);
                  }}
                ></Input>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => startTransition(handleAddCategory)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
}

export default DropdownList;
