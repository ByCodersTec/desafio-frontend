
function App() {

  return (
    <div >
        <header className={"sm:flex justify-between"}>
            <h1 className="text-3xl font-bold">
                Youtube
            </h1>
            <div>
                <p>
                    <input className="shadow-md rounded-md"/>

                    <button>Search</button>
                </p>
            </div>

            <div>
                <p>Create account or Sign-In</p>
            </div>
        </header>

        <main>
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default App
