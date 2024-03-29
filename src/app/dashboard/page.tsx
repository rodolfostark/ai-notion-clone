import CreateNoteDialog from "@/components/CreateNoteDialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="grainy min-h-screen">
            <div className="max-w-7xl mx-auto p-10">
                <div className="h-14" />
                <div className="flex justify-between items-center md:flex-row flex-col">
                    <div className="flex items-center">
                        <Link href="/">
                            <Button className="bg-green-600" size="sm">
                                <ArrowLeft className="mr-1 w-4 h-4" />
                                Back
                            </Button>
                        </Link>
                        <div className="w-4" />
                        <h1 className="text-3xl font-bold text-gray-900">
                            My Notes
                        </h1>
                        <div className="w-4" />
                        <UserButton />
                    </div>
                </div>
                <div className="h-8" />
                <Separator />
                <div className="h-8" />
                {/* list all the notes */}
                {/* To-do conditionally rendered */}
                <div className="text-center">
                    <h2 className="text-xl text-gray-500">
                        You have no notes yet.
                    </h2>
                </div>
                <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3">
                    <CreateNoteDialog />
                </div>
            </div>
        </div >
    );
}