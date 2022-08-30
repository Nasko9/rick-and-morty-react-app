interface IRadioElement {
  placeholder: string;
  value: string;
}

export default function RadioElement({ placeholder, value }: IRadioElement) {
  return (
    <div className="flex items-center justify-center gap-1 accent-[#495464]">
      <input type="radio" id={value} value={value} name="select" />
      <label htmlFor={value}>{placeholder}</label>
    </div>
  );
}
