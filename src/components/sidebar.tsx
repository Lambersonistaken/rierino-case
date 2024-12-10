/* eslint-disable jsx-a11y/alt-text */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { HeadingIcon, LetterText, Image,FileVideo } from "lucide-react";
import {Button} from "@/components/ui/button"

export default function Sidebar() {
    return (
    <div>
        <nav className="flex flex-col justify-start self-start items-start p-4 border border-l-0 border-slate-300 bg-slate-100 w-[220px] h-[680px]">
        <h1 className="pt-4 font-semibold text-lg mb-8">Add New</h1>
        <h3 className="border-b-4 border-b-violet-600 mb-4">Elements</h3>

        <div className="accordion">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">Typography</AccordionTrigger>
            <AccordionContent className="flex flex-row items-center justify-around gap-4">
                    <Button className="w-[80px] p-10 flex flex-col" variant={"outline"}>
                        <HeadingIcon></HeadingIcon>
                        <h2>Heading</h2>
                    </Button>
                    <Button className="w-[80px] p-10 flex flex-col" variant={"outline"}>
                        <LetterText></LetterText>
                        <h2>Paragraph</h2>
                    </Button>
            </AccordionContent>
            </AccordionItem>
            </Accordion>

        </div>

        <div className="accordion">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">Media</AccordionTrigger>
            <AccordionContent className="flex flex-row items-center gap-4 justify-around">
                    <Button className="w-[80px] p-10 flex flex-col" variant={"outline"}>
                        <Image></Image>
                        <h2>Image</h2>
                    </Button>
                    <Button className="w-[80px] p-10 flex flex-col" variant={"outline"}>
                        <FileVideo></FileVideo>
                        <h2>Video</h2>
                    </Button>
            </AccordionContent>
            </AccordionItem>
            </Accordion>

        </div>
        <hr />
        </nav>

        <nav className="flex flex-col justify-start self-start items-start p-2 border border-l-0 border-slate-300 bg-slate-50 w-[220px] h-[200px]">
            <div>
                <h2 className="border-b-4 border-b-slate-400">Layers</h2>
            </div>
        </nav>
    </div>
      
      
    );
  }