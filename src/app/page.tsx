export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-neutral-100 w-full max-w-[90vw] mt-5 rounded-md shadow-sm px-2 pt-1 pb-2 min-h-[60vh] flex flex-col gap-5 justify-center align-middle items-center">
          <div className="my-6 flex flex-col justify-center align-middle items-center gap-5">
            <h2 className="font-semibold text-neutral-700 text-lg">This is the Car Dealer App</h2>
            <div className="max-w-[90%] w-full flex justify-center align-middle items-center"><img src="android-chrome-512x512.png" alt="logo-image" className="rounded-md shadow-md" /></div>
          </div>
        </div>
      </div>
    </>
  );
}
