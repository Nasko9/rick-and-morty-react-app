import RadioElement from "./RadioElement";

const selectElements = [
  { placeholder: "Any", value: "any" },
  { placeholder: "Alive", value: "alive" },
  { placeholder: "Dead", value: "dead" },
  { placeholder: "Unknown", value: "unknown" },
];

export default function Filter() {
  return (
    <div className="mb-8 flex flex-wrap">
      <p>Character status: &nbsp;</p>
      <div className="flex gap-3">
        {selectElements.map(({ placeholder, value }) => (
          <RadioElement placeholder={placeholder} value={value} />
        ))}
      </div>
    </div>
  );
}
