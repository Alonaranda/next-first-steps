import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Pricing',
 description: 'SEO Pricing',
 keywords: ['Pricing']
};

export default function PricingPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">Pricing Page</span>
        </main>
    )
}