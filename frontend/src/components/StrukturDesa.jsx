
const StrukturDesa = () => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-56 p-3">
            <section className="flex flex-col md:w-[70%] xl:w-[55%] gap-3">
                <div className="w-full">
                    <h1 className="text-3xl text-center">
                        Perangkat Desa
                    </h1>
                </div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item flex flex-col w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-[360px] h-[320px] xl:w-[500px] xl:h-[500px] mx-auto" />
                        <h2 className="text-center">Kepala Desa</h2>
                    </div>
                    <div id="item2" className="carousel-item flex flex-col w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-[360px] h-[320px] xl:w-[500px] xl:h-[500px] mx-auto" />
                        <h2 className="text-center">Kepala Desa</h2>
                    </div>
                    <div id="item3" className="carousel-item flex flex-col w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-[360px] h-[320px] xl:w-[500px] xl:h-[500px] mx-auto" />
                        <h2 className="text-center">Kepala Desa</h2>
                    </div>
                    <div id="item4" className="carousel-item flex flex-col w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-[360px] h-[320px] xl:w-[500px] xl:h-[500px] mx-auto" />
                        <h2 className="text-center">Kepala Desa</h2>
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </section>
        </main>
    );
};

export default StrukturDesa;