export default function CheckboxItem({
  label,
  checked,
  onChange,
  padding,
  isCheckBoxHidden,
}) {
  return (
    <label
      className={`relative flex cursor-pointer ${padding} items-center gap-2 py-[5px] text-blue-sw hover:bg-[#e6e7e8]`}
    >
      {/* Default HTML Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        // className="h-3 w-3"
        className={`${isCheckBoxHidden ? 'absolute h-0 w-0 opacity-0' : 'h-3 w-3'} `}
      />

      {/* Label */}
      <span className="text-sm">{label}</span>
    </label>
  );
}
