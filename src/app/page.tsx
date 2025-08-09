"use client";

import VantaFog from "@/components/VantaFog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/images/Company Name Finder_Helps-BA41AD4p.jpg";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { CardContent, CardHeader } from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const steps = [
    {
        title: "Step 1: Enter Your Preferred Name",
        description:
            "Start by typing a potential company name you'd like to register. You can enter multiple suggestions if you want alternatives.",
    },
    {
        title: "Step 2: Run the Name Check",
        description:
            "Click the 'Check Availability' button. The system will instantly scan domain availability, MCA name records, and trademark databases.",
    },
    {
        title: "Step 3: Review Name Validity",
        description:
            "Get a full report showing domain availability (.com, .in), MCA compliance, similar/restricted names, and trademark conflicts.",
    },
    {
        title: "Step 4: Explore Smart Suggestions",
        description:
            "If your original name isn't available, view AI-generated brandable name alternatives that are domain and MCA-compliant.",
    },
    {
        title: "Step 5: Download One-Click Report",
        description:
            "Save or share a neatly summarized report that includes all checks—domain, MCA, trademarks—for seamless incorporation.",
    },
];

export default function Home() {
    const { theme } = useTheme();

    return (
        <main className=" mx-auto ">
            <VantaFog />
            <section className="mt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
                <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                    <span
                        className={cn(
                            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                        )}
                        style={{
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                        }}
                    />
                    🔍
                    <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                    <AnimatedGradientText className="text-sm font-medium">
                        AI-powered checks for MCA, domains, and trademarks — all
                        in one click.
                    </AnimatedGradientText>
                    <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Your <AuroraText>AI Naming Partner</AuroraText> — Unique,
                    Legal & Ready for Launch.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Find company names that are domain-available, MCA-compliant,
                    and free of trademark conflicts — all before branding
                    begins.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Link href={"/find"}>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Check Name Availability
                            </span>
                        </ShimmerButton>
                    </Link>
                    <Link href={"/generate-names"}>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Generate Brandable Names
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>
            </section>

            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <MagicCard
                            key={index}
                            gradientColor={
                                theme === "dark" ? "#262626" : "#D9D9D955"
                            }
                            className="rounded-xl px-5 py-4 bg-background shadow-md border border-border min-h-[180px] h-full"
                        >
                            <CardHeader className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {step.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        AI-Powered Company Name Finder – Instantly check domain
                        & MCA availability to launch your startup legally.
                    </h2>
                    <Link href={"/find"}>
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Find a Name
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <Image
                        src={img1}
                        alt="Company Name Finder Illustration"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </section>

            <section className="px-4 md:px-36 mt-16">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <h1 className="text-4xl font-bold">FAQ&apos;S</h1>

                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            1. What does this platform do?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                This platform helps entrepreneurs find unique
                                company names that are domain-available and
                                legally compliant with India’s Ministry of
                                Corporate Affairs (MCA) regulations.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. How does it check MCA compliance?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It cross-checks your name suggestions with MCA’s
                                official name availability database and flags
                                any conflicts with existing entities, reserved
                                words, or ineligible patterns.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. Can it check if a domain is available?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. It verifies domain availability for common
                                extensions like .com and .in, so you can secure
                                a matching web presence instantly.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. Does it check for trademark conflicts?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Absolutely. The platform performs a preliminary
                                trademark screening to identify potential legal
                                conflicts before branding or incorporation.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. What if the name I want isn’t available?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                If your preferred name is taken, the system
                                suggests similar, brandable alternatives that
                                are domain and MCA eligible.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. Who can use this platform?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It’s perfect for entrepreneurs starting new
                                businesses, startup teams validating names, or
                                agencies assisting clients with legal
                                incorporation.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. Is it free to use?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                The core features are currently free to use.
                                Future updates may include premium options for
                                faster processing, bulk checks, or enhanced
                                reports.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. Can I download a report of my name checks?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. You get a one-click summary report that
                                includes domain availability, MCA status, and
                                trademark results for each name checked.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
