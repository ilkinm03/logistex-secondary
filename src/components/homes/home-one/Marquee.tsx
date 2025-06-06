"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import InjectableSvg from "@/components/common/InjectableSvg";
import { useTranslations } from "next-intl";

const marquee_title: string[] = ["Air Freight", "Logistics", "Delivery Service", "Tracking", "Warehouse"];

interface PropsType {
    style?: boolean;
}

const MarqueeArea = ({ style }: PropsType) => {

    const [isPaused, setIsPaused] = useState(false);
    const t = useTranslations("HomePage.section6");

    return (
        <section className="marquee__area fix mb-100">
            <div className="container-fluid p-0">
                <div className="slider__marquee clearfix marquee-wrap">
                    <Marquee className="marquee_mode marquee__group" pauseOnHover={false} play={!isPaused}>
                        {marquee_title.map((title, i) => (
                            <h6
                                key={i}
                                className={`marquee__item ${style ? "marquee__item-three" : ""}`}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <Link href="/services"><InjectableSvg src="/assets/img/icon/star.svg" alt="" className="injectable" /> {t("item"+(i+1))}</Link>
                            </h6>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default MarqueeArea
