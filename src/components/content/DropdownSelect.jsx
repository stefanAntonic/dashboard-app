


function DropdownSelect() {
  return (
    <div className="ml-8 mt-12 w-1/5">
    <h1 className="text-2xl">Money & Selling</h1>
    <div className="flex flex-row gap-3 pt-6">
      <div className="form-control w-full max-w-xs">
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
      <div className="form-control w-full max-w-xs">
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