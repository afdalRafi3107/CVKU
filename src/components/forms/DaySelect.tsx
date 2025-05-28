import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function DaySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[29%]">
        <SelectValue placeholder="Tanggal" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tanggal</SelectLabel>
          {Array.from({ length: 31 }, (_, i) => {
            const day = String(i + 1);
            return (
              <SelectItem key={day} value={day}>
                {day}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default DaySelect;
