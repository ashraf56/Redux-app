import { useDispatch, useSelector } from "react-redux"
import { increment } from "./redux/feature/counterSlice"
import { RootState } from "@reduxjs/toolkit/query"

function App() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch=useDispatch()
console.log(count);

  return (
<div className=" h-screen justify-center w-full flex items-center  gap-3 ">
  <button  onClick={()=> dispatch(increment())} className="w-24 h-10 bg-gray-600 text-white   rounded-lg">Increment +</button>
  <p className="w-24  bg-gray-600 text-white text-3xl text-center">{count}</p>
  <button className="w-24 h-10 bg-gray-600 text-white  rounded-lg">Decrement +</button>
</div>
  )
}

export default App
