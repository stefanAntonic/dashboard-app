


function DropdownSelect() {
  return (
    <div className="mt-12 lg:ml-8 md:ml-8 lg:w-1/3 md:w-1/3">
    <h1 className="text-2xl ml-8">Money & Selling</h1>
    <div className="flex flex-col items-center lg:flex-row md:flex-row gap-3 pt-6">
      <div className="form-control w-full max-w-sm lg:max-w-xs">
        <label className="label label-text font-bold">Region</label>
        <select className="select select-bordered">
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>
      <div className="form-control w-full max-w-sm lg:max-w-xs">
        <label className="label label-text font-bold">Goods category</label>
        <select className="select select-bordered">
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>
    </div>
  </div>
  )
}
export default DropdownSelect