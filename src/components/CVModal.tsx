import { useState } from "react";
import { FileText, Download, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cvOptions = [
    {
        id: "profesional",
        label: "CV Profesional",
        description: "Para prácticas y trabajos en Ingeniería",
        icon: GraduationCap,
        file: "/vicentebeizas.github.io/cv-profesional.pdf",
        downloadName: "CV_Vicente_Beiza_Profesional.pdf",
    },
    {
        id: "general",
        label: "CV General",
        description: "Para postulaciones generales",
        icon: Briefcase,
        file: "/vicentebeizas.github.io/cv-general.pdf",
        downloadName: "CV_Vicente_Beiza_General.pdf",
    },
];

export const CVModal = () => {
    const [activeTab, setActiveTab] = useState("profesional");

    const activeCV = cvOptions.find((cv) => cv.id === activeTab);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="heroOutline" size="lg">
                    <FileText className="w-4 h-4 mr-2" />
                    Ver Currículum
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0 gap-0">
                <DialogHeader className="p-6 pb-4 border-b">
                    <DialogTitle className="text-xl font-display">
                        Currículum Vitae
                    </DialogTitle>
                    <DialogDescription>
                        Selecciona el currículum que deseas ver
                    </DialogDescription>
                </DialogHeader>

                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="flex-1 flex flex-col overflow-hidden"
                >
                    <div className="px-6 pt-4">
                        <TabsList className="grid w-full grid-cols-2">
                            {cvOptions.map((cv) => (
                                <TabsTrigger
                                    key={cv.id}
                                    value={cv.id}
                                    className="flex items-center gap-2"
                                >
                                    <cv.icon className="w-4 h-4" />
                                    <span className="hidden sm:inline">{cv.label}</span>
                                    <span className="sm:hidden">
                                        {cv.id === "profesional" ? "Profesional" : "General"}
                                    </span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {cvOptions.map((cv) => (
                        <TabsContent
                            key={cv.id}
                            value={cv.id}
                            className="flex-1 flex flex-col mt-0 overflow-hidden data-[state=inactive]:hidden"
                        >
                            <div className="px-6 py-3 flex items-center justify-between border-b bg-muted/30">
                                <p className="text-sm text-muted-foreground">
                                    {cv.description}
                                </p>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={cv.file} download={cv.downloadName}>
                                        <Download className="w-4 h-4 mr-2" />
                                        Descargar
                                    </a>
                                </Button>
                            </div>
                            <div className="flex-1 p-4 bg-muted/20">
                                <iframe
                                    src={cv.file}
                                    className="w-full h-full rounded-lg border bg-white"
                                    title={cv.label}
                                />
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </DialogContent>
        </Dialog>
    );
};
