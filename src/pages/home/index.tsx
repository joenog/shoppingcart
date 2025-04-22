import { FaCartShopping } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center flex-col w-full max-w-5xl mx-auto">
          <h1 className=" text-xl my-5 text-center">Produtos em alta</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 rounded-xl gap-4">
         <section className="flex flex-col bg-white rounded-2xl p-4">
              <img className="w-full max-h-70 mb-2" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8RfGyD89MqNeiviyMiC2cf30r17rMSS6vcgmkijdarPCN8ITQIrX4IzqZecyiGBCgJh4NGOLzt1iX9_BzWG0h0AsXRWnx49LfWTesfpteMfg3nzVfnf0yLw" alt="" />
            
                <p className="mt-6">
                  Fones JBl ultraboost
                </p>
              <div className="flex h-full items-end gap-4 mt-2">
                <span className="text-zinc-900/90">
                  R$ 190,20
                </span>
                <span className="bg-green-500/80 rounded-md p-1">
                  <FaCartShopping size={17}/>
                </span>
              </div>
            </section>

            <section className="flex flex-col bg-white rounded-2xl p-4">
              <img className="w-full mx-h-70 mb-2" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfG_55OjJtxhhGUUHZfSIFCYjSGr3Uo4lnasIYsOhIoLICnwIAvJ8JFBtXv3QiGph7w9tQYFCAu0cMsXV88QZnJF2xEna_TPAEaMJGlg6VNrV-tsKnas-6" alt="" />
            
                <p className="mt-6">
                  Fones JBl ultraboost
                </p>
              <div className="flex h-full items-end gap-4 mt-2">
                <span className="text-zinc-900/90">
                  R$ 190,20
                </span>
                <span className="bg-green-500/80 rounded-md p-1">
                  <FaCartShopping size={17}/>
                </span>
              </div>
            </section>

        </div>
      </main>
    </div>
  );
}
