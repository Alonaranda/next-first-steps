import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Contact SEO',
 description: 'Contact SEO'
};

export default function ContactPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">Contact Page</span>
        </main>
    )
}