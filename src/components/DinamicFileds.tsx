import { useFieldArray } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaRegTrashAlt } from "react-icons/fa";

export default function DinamicFields() {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });
  return (
    <>
      {fields.map((fields, index) => (
        <div key={fields.id} className="mb-2 flex items-center gap-3">
          <Input {...register(`nama.${index}.skill`)} placeholder="mis. PHP" />
          <Button
            onClick={() => remove(index)}
            className="text-white cursor-pointer active:bg-red-700"
          >
            <FaRegTrashAlt />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        onClick={() => append({ skill: "" })}
        className="mt-2"
      >
        Tambah
      </Button>
    </>
  );
}
