import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className="relative h-12 w-full border border-gray-300 rounded-lg">
      <MagnifyingGlassIcon className="absolute ml-5 h-12 w-5" />
      <input placeholder="Search" />
      {/* <input type="text" placeholder="Search" className="w-full h-12" style={{border: '1px solid #E8E6EA', borderRadius: 15}} /> */}
      {/* <input type="text" placeholder="Search" className="w-full h-12" style={{border: '1px solid #E8E6EA', borderRadius: 15}} /> */}
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ paddingLeft: 40, paddingRight: 40 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Message</h1>
        <button>Filter Button</button>
      </div>
      <SearchBar />
      <div>
        <h1>Activities</h1>
        <div style={{height: 91, backgroundColor: 'red'}}>User</div>
      </div>
      <div>
        <h1>Messages</h1>
      </div>
    </div>
  );
}