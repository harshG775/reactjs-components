type NavBarBannerPropsType = {
    banner: string;
    contactInfo: {
        email: string;
        phone: string;
    };
};
export default function NavBarBanner({ banner, contactInfo, }: NavBarBannerPropsType) {
    const { email, phone } = contactInfo;
    return (
        <section className=" bg-neutral-900 text-neutral-50/80 ">
            <div className=" max-w-8xl mx-auto flex justify-between items-center h-10 flex-wrap py-1 px-4  text-xs font-light">
                <p className="flex-1">{banner}</p>
                <div className="flex gap-2">
                    <a
                        className="underline hover:text-neutral-50"
                        href={`mailto:${email}`}
                    >
                        {email}
                    </a>
                    <a
                        className="underline hover:text-neutral-50"
                        href={`tel:${phone}`}
                    >
                        +{phone}
                    </a>
                </div>
            </div>
        </section>
    );
}
