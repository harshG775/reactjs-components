import Icon from "@/components/icons/lucide";
import Image from "next/image";

export default function Hero() {
    const Title = "Managerial Optimization for your Companies";
    const Description = "Get full control of your company's performance with our powerful tools.";
    return (
        <section className="bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8
                grid lg:grid-cols-2 gap-4 
            ">
                    <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none ">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                            {Title}
                        </h1>
                        <p className="mt-6 text-xl text-gray-500">
                            {Description}
                        </p>
                        <div className="pt-8">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80"
                                >
                                    Get started
                                </a>
                            </div>
                            <div className="inline-flex ml-3 rounded-md shadow">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                        <div className="pt-8 ">
                            <div className="flex gap-4">
                                <Icon name="Facebook" className="w-8 h-8 p-2 shadow-sm hover:shadow-md rounded-md shadow-primary items-center text-primary hover:bg-primary hover:text-white transition-all duration-300" />
                                <Icon name="Twitter" className="w-8 h-8 p-2 shadow-sm hover:shadow-md rounded-md shadow-primary items-center text-primary hover:bg-primary hover:text-white transition-all duration-300" />
                                <Icon name="Instagram" className="w-8 h-8 p-2 shadow-sm hover:shadow-md rounded-md shadow-primary items-center text-primary hover:bg-primary hover:text-white transition-all duration-300" />
                                <Icon name="Linkedin" className="w-8 h-8 p-2 shadow-sm hover:shadow-md rounded-md shadow-primary items-center text-primary hover:bg-primary hover:text-white transition-all duration-300" />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-2xl mx-auto lg:py-32 lg:max-w-none">
                        <Image
                            src="https://img.freepik.com/free-vector/ecommerce-checkout-laptop-concept-illustration_114360-8203.jpg?w=740&t=st=1716017201~exp=1716017801~hmac=d28491bece358c094d96110222d74f905c4f861294320f0ccf756cbf5abd02fe"
                            alt="hero"
                            width={1000}
                            height={1000}
                        />
                    </div>
            </div>
        </section>
    );
}
