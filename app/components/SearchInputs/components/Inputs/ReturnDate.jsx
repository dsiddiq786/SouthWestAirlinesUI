export default function ReturnDate() {
  return (
    <div className="flex w-min flex-col">
      <span className="pb-[8px] text-[11px] font-bold text-gray-sw">
        RETURN DATE
      </span>
      <div className="flex w-[192px] items-center overflow-hidden rounded-sm border">
        <input
          className="rounded-sm py-[2px] pl-[7px] text-[32px] font-bold leading-none text-blue-sw shadow-inner"
          type="text"
          // value={searchQuery}
          // onChange={(e) => handleSearch(e.target.value)}
          // onClick={togglePopover}
        />
      </div>
      <div>
        <span className="text-[11px] text-gray-sw">Tue, Feb 5, 2025</span>
      </div>
    </div>
  );
}
