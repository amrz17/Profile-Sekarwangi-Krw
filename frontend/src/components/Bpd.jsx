import { bpd } from "../assets/images";

const Bpd = () => {
    return (
        <main className="flex min-h-screen justify-center w-full pt-52 p-3">
            <section className="flex flex-col md:w-[70%] xl:w-[55%] gap-3
            justify-center items-center">
                <h1 className="font-inter text-3xl font-bold text-center
                    text-gray-500">
                    BADAN PERMUSYAWARATAN DESA
                </h1>
                <div className="w-full md:w-[40rem] xl:w-[48rem] flex">
                    <div className="w-full mx-auto">
                        <img
                            src={bpd}
                            className="w-full" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Bpd;