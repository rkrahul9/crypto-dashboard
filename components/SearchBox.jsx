import { memo } from 'react';

export default memo(function SearchBox() {
  return (
    <div className="flex flex-row justify-center my-5">
      <input
        type="text"
        name=""
        className="p-3 w-1/4 rounded-sm shadow-lg bg-slate-50"
        placeholder="Search a Crypto...."
      />
    </div>
  )
});
