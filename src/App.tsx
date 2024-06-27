import { increment } from "./redux/feature/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch=useAppDispatch()
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
