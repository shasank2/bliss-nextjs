type Props = {
  showSearch: boolean;
};

const searchListItems = [
  "Vitamin C",
  "Facewash",
  "Skincare",
  "Bodycare",
  "SPF",
];
const NavbarSearch = ({ showSearch }: Props) => {
  return (
    <div
      className={`absolute left-0 top-full w-full transition-all duration-300 z-20 transform ${
        showSearch
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="font-archer px-3 py-2 bg-white border-b pb-5 shadow-md">
        <input
          type="search"
          placeholder="Search..."
          autoComplete="off"
          className="w-full px-4 py-3 tracking-widest text-gray-800 placeholder-gray-500 focus:outline-none text-2xl border-b border-gray-500"
        />

        <div className="px-4 py-3 space-y-3">
          <h3 className="text-2xl">Trending</h3>
          <ul className="space-y-4">
            {searchListItems.map((elem, index) => (
              <li className="cursor-pointer hover:underline" key={index}>
                {elem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavbarSearch;
