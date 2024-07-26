
const Hero = () => {
    return (
        <>
            <div className="carousel w-full">
                <div
                id="slide1"
                className="hero min-h-screen carousel-item relative w-full"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="pt-[50%] mb-5 text-5xl xl:text-6xl font-bold">Selamat Datang di Website Desa Sekarwangi Karawang</h1>
                        <button className="btn btn-primary text-white">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Hero;