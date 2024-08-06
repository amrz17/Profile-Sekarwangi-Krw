import { kades, kaduskrajan, kasikesejahteraan, kasipelayanan, kasipem, kaurkeuangan, kaurumum, sekre } from "../assets/images";

const StrukturDesa = () => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-56 p-3">
            <section className="flex flex-col md:w-[70%] xl:w-[55%] gap-3
            justify-center items-center">
                <div className="w-full">
                    <h1 className="font-inter text-3xl mb-2 font-bold text-center
                    text-gray-500">
                        PERANGKAT DESA 
                    </h1>
                </div>
                <div className="carousel w-[90%] md:w-[30rem] xl:w-[30rem] rounded-lg">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={kades}
                            className="w-full" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide8" className="btn btn-ghost text-base-200 text-xl">❮</a>
                            <a href="#slide2" className="btn btn-ghost text-base-200 text-xl">❯</a>
                    </div>
                    </div>
                        <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={sekre}
                            className="w-full" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-ghost text-base-200 text-xl">❮</a>
                            <a href="#slide3" className="btn btn-ghost text-base-200 text-xl">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={kaurkeuangan}
                            className="w-full" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-ghost text-base-200 text-xl">❮</a>
                            <a href="#slide4" className="btn btn-ghost text-base-200 text-xl">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={kaurumum}
                            className="w-full" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-ghost text-base-200 text-xl">❮</a>
                            <a href="#slide5" className="btn btn-ghost text-base-200 text-xl">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img
                            src={kasipem}
                            className="w-full" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-ghost text-base-200 text-xl">❮</a>
                            <a href="#slide6" className="btn btn-ghost text-base-200 text-xl">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img
                            src={kasipelayanan}
                            className="w-full" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide5" className="btn btn-ghost text-base-200 text-xl">❮</a>
                            <a href="#slide7" className="btn btn-ghost text-base-200 text-xl">❯</a>
                        </div>
                    </div>
                    <div id="slide7" className="carousel-item relative w-full">
                        <img
                            src={kasikesejahteraan}
                            className="w-full" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide6" className="btn btn-ghost text-base-200 text-xl">❮</a>
                            <a href="#slide8" className="btn btn-ghost text-base-200 text-xl">❯</a>
                        </div>
                    </div>
                    <div id="slide8" className="carousel-item relative w-full">
                        <img
                            src={kaduskrajan}
                            className="w-full" />
                        <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide7" className="btn btn-ghost text-base-200 text-xl">❮</a>
                            <a href="#slide1" className="btn btn-ghost text-base-200 text-xl">❯</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StrukturDesa;