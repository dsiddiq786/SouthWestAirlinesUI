export default function CheckboxItem({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-600">
      {/* Default HTML Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4"
      />

      {/* Label */}
      <span className="text-sm">{label}</span>
    </label>
  );
}
