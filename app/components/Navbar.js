const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white h-full p-4">
      <h2 className="text-lg font-bold mb-4">Other Queues and Views</h2>
      <div className="space-y-4">
        <div className="bg-blue-500 p-4 rounded">
          <p>My Active Cases</p>
          <p>1</p>
          <p>Filtered</p>
        </div>
        <div className="bg-blue-500 p-4 rounded">
          <p>My Resolved Cases</p>
          <p>0</p>
          <p>Filtered</p>
        </div>
        <div className="bg-gray-500 p-4 rounded">
          <p>My Activities</p>
          <p>22</p>
          <p>Unfiltered</p>
        </div>
        <div className="bg-gray-500 p-4 rounded">
          <p>My Phone Calls</p>
          <p>9</p>
          <p>Unfiltered</p>
        </div>
        <div className="bg-gray-500 p-4 rounded">
          <p>My Tasks</p>
          <p>13</p>
          <p>Unfiltered</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
