export default function RadioItem({ label, value, checked, onChange, name }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 whitespace-nowrap text-[13px] text-black-sw">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}
