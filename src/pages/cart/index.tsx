export default function Cart() {
  return (
    <div>
      <main className="w-full max-w-5xl mx-auto">
        <h1 className="text-xl text-center my-5">Meu Carrinho</h1>

        <section className="flex items-center justify-between border-b-2 border-gray-300 bg-white rounded-2xl px-4">
        <img className="w-28 rounded-2xl p-4" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8RfGyD89MqNeiviyMiC2cf30r17rMSS6vcgmkijdarPCN8ITQIrX4IzqZecyiGBCgJh4NGOLzt1iX9_BzWG0h0AsXRWnx49LfWTesfpteMfg3nzVfnf0yLw" alt="" />

          <span className="font-bold">
            R$ 190,00
          </span>

          <div className="flex justify-center items-center gap-2 mx-2">
            <button className="flex items-center justify-center bg-gray-600 px-2.5 rounded-md text-white font-bold">
              -
            </button>

              2

            <button className="flex items-center justify-center bg-gray-600 px-2 rounded-md text-white font-bold">
              +
            </button>
          </div>

          <span className="float-right">
            Total: R$ 190,00
          </span>
        
        </section>
        
        <p className="font-bold mt-4 ml-3">R$ 190,00</p>
      </main>
    </div>
  );
}
