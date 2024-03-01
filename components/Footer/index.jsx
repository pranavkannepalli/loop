import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-screen bg-white-600 !mt-[40px] text-white-200">
            <div className="layout flex gap-[20px] !py-[20px]">
                <div className="flex-1">
                    <h6>Loop</h6>
                    <p className="caption text-white-400">Helping you help both homes</p>
                </div>
                <div className="flex flex-1 flex-col gap-[10px]">
                    <h6>Links</h6>
                    <Link href="/">Home</Link>
                    <Link href="/solutions">All Solutions</Link>
                    <Link href="/about">About</Link>
                    <Link href="/sources">Sources</Link>
                </div>
                <div className="flex flex-1 flex-col gap-[10px]">
                    <h6>Documents</h6>
                    <Link href="/CopyrightChecklist.pdf" locale={false} target="_blank">
                        Copyright Checklist (Click to open)
                    </Link>
                    <Link href="/SignedWorkLog.pdf" locale={false} target="_blank">
                        Signed Plan of Work Log (Click to open)
                    </Link>
                </div>
                <p>&copy; 2024-2028 Copyright Loop. All Rights Reserved</p>
            </div>
        </footer>
    )
}