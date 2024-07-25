
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
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                        <h1 className="pt-[50%] mb-5 text-5xl font-bold">Desa Sekarwangi Karawang</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Hero;