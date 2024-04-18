import React from 'react'

function Home() {
  return (
    <>
       <div className="top-0 left-0 flex justify-center items-center w-full h-10 bg-slate-100 p-10 text-black text-2xl font-semibold">Docs</div>
        <div className="relative w-full h-screen bg-slate-700 text-white">
          <img className="img-fluid" src="https://niceillustrations.com/wp-content/uploads/2021/05/Note-Taking-color-800px.png" alt="Background"/>
        </div>
        <div className="absolute top-0 right-0 h-screen flex flex-col justify-center items-end py-[15rem] px-[10rem]">
          <div className="text-[7rem] font-semibold tracking-tighter">Short Notes</div>
          <a href="/notes" className='bg-slate-100 rounded-xl p-3 text-black font-semibold mx-[15rem] hover:scale-110 transition-transform duration-300'>Add Yours</a>
        </div>
    </>
  )
}

export default Home