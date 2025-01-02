import Link from "next/link";
import { FaAngleRight, FaHome } from "react-icons/fa";

const Breadcrumb = ({
    pageName,
    title,
}: {
    pageName: string;
    title: string;
}) => {
    return (
        <>
            <section className="  pt-[100px]  md:pt-[120px] md:pb-14 pb-7">
                <div className="container space-y-4 md:space-y-7">

                    <h2 className="text-2xl md:text-4xl font-bold">
                        {title}
                    </h2>

                    <div className="flex items-center gap-1">

                        <Link href={'/'} className="flex items-center gap-1 text-gray-500 hover:text-primary font-semibold ">
                            <FaHome className="text-primary mb-[2px] " /> Home
                        </Link>
                        <span className="text-gray-500">
                            <FaAngleRight />
                        </span>
                        <p className="text-gray-900  font-semibold">
                            {pageName}
                        </p>

                    </div>
                </div>

            </section>
        </>
    );
};

export default Breadcrumb;
