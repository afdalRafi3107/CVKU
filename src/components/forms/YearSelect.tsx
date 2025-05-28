import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function YearSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[29%]">
        <SelectValue placeholder="Tahun" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tahun</SelectLabel>
          {Array.from({ length: 68 }, (_, i) => {
            const year = String(2014 - i);
            return (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default YearSelect;
