export default function RadioItem({ label, value, checked, onChange, name }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 whitespace-nowrap text-[13px] text-black-sw">
      <input
        checked={checked}
        name={name}
        type="radio"
        value={value}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}
