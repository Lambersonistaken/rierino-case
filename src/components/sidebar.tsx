/* eslint-disable jsx-a11y/alt-text */
// Sol taraftaki sidebar kısmını oluşturuyoruz. İçerisinde drag işlemini başlatmak için gerekli olan fonksiyonları tanımlıyoruz. Gerekli stilleri de ekliyoruz.
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { HeadingIcon, LetterText, Image,FileVideo, Trash2 } from "lucide-react";
import {Button} from "@/components/ui/button"
import { v4 as uuidv4 } from 'uuid'
import { useElements } from "@/context/ElementsContext";

export default function Sidebar() {
    const { elements, removeElement } = useElements();

    const handleDragStart = (type: "heading" | "paragraph" | "image" | "video") => (e: React.DragEvent) => {
        const element = {
            id: uuidv4(),
            type,
            properties: {
                text: type === "heading" ? "New Heading" : type === "paragraph" ? "New Paragraph" : "",
                fontFamily: "geist-sans",
                fontWeight: "medium",
                src: type === "image" || type === "video" ? "" : undefined,
                width: type === "image" || type === "video" ? 300 : undefined,
                height: type === "image" || type === "video" ? 200 : undefined,
            }
        }
        e.dataTransfer.setData("application/json", JSON.stringify(element))
    }

    return (
    <div>
        <nav className="flex flex-col justify-start self-start items-start p-4 border border-l-0 border-slate-300 bg-slate-100 w-[220px] h-[680px]">
        <h1 className="pt-4 font-semibold text-lg mb-8">Add New</h1>
        <h3 className="border-b-4 border-b-violet-600 mb-4">Elements</h3>

        <Accordion type="multiple" collapsible>
            <AccordionItem value="typography">
                <AccordionTrigger className="text-lg">Typography</AccordionTrigger>
                <AccordionContent className="flex flex-row items-center justify-around gap-4">
                    <Button 
                        className="w-[80px] p-10 flex flex-col" 
                        variant="outline"
                        draggable
                        onDragStart={handleDragStart("heading")}
                    >
                        <HeadingIcon />
                        <h2>Heading</h2>
                    </Button>
                    <Button 
                        className="w-[80px] p-10 flex flex-col" 
                        variant="outline"
                        draggable
                        onDragStart={handleDragStart("paragraph")}
                    >
                        <LetterText />
                        <h2>Paragraph</h2>
                    </Button>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="media">
                <AccordionTrigger className="text-lg">Media</AccordionTrigger>
                <AccordionContent className="flex flex-row items-center gap-4 justify-around">
                    <Button 
                        className="w-[80px] p-10 flex flex-col" 
                        variant="outline"
                        draggable
                        onDragStart={handleDragStart("image")}
                    >
                        <Image />
                        <h2>Image</h2>
                    </Button>
                    <Button 
                        className="w-[80px] p-10 flex flex-col" 
                        variant="outline"
                        draggable
                        onDragStart={handleDragStart("video")}
                    >
                        <FileVideo />
                        <h2>Video</h2>
                    </Button>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        </nav>

        <nav className="flex flex-col justify-start self-start items-start p-2 border border-l-0 border-slate-300 bg-slate-50 w-[220px] h-[200px]">
            <div className="w-full h-full flex flex-col">
                <h2 className="border-b-4 border-b-violet-600 mb-4">Layers</h2>
                <div className="space-y-2 overflow-y-auto flex-1 pr-2">
                    {elements.map((element) => (
                        <div key={element.id} className="flex items-center justify-between p-2 hover:bg-slate-100 rounded">
                            <span className="text-sm truncate flex-1 mr-2">{element.type} - {element.properties.text || 'Media'}</span>
                            <button 
                                onClick={() => removeElement(element.id)}
                                className="p-1 hover:bg-red-100 rounded shrink-0"
                            >
                                <Trash2 className="h-4 w-4 text-red-500" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    </div>
      
      
    );
  }