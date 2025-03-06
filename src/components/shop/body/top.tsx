/** @format */
import { Tally2 } from 'lucide-react';
import { Tally3 } from 'lucide-react';
import { Tally4 } from 'lucide-react';
import { AlignJustify } from 'lucide-react';

const Top = () => {
  return (
    <div className="flex justify-between">
      <div className="w-64 h-8 ">
        <select className="w-fll h-full p-2 ">
          <option value="Defauit Sorting " className="">
            Defauit Sorting
          </option>
          <option value="Sort By Popularity">Sort By Popularity</option>
          <option value="Sort By Average Rating">Sort By Average Rating</option>
          <option value="Sort By Latest">Sort By Latest</option>
          <option value="Sort By Price:Low To High">
            Sort By Price:Low To High
          </option>
          <option value="Sort By Orice:High To Low">
            Sort By Orice:High To Low
          </option>
        </select>
      </div>
      <div className="flex gap-2">
        <Tally2 className="hover:bg-cyan-400 hover:text-white pl-2 w-8 h-8 border" />
        <Tally3 className="bg-cyan-400 text-white pl-2 w-8 h-8 border" />
        <Tally4 className="hover:bg-cyan-400 hover:text-white p-1 w-8 h-8 border" />
        <AlignJustify className="hover:bg-cyan-400 hover:text-white p-1 w-8 h-8 border" />
      </div>
    </div>
  );
};
export default Top;
