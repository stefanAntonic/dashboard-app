

function Heading() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h1 className="text-3xl font-normal ml-8">Analytics</h1>
      </div>
      <div className="hidden sm:block flex-none">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm rounded-full w-full max-w-xs mr-8"
        />
      </div>
    </div>

  )
}
export default Heading