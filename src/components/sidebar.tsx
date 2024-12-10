import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { HeadingIcon, LetterText } from "lucide-react";
  

export default function Sidebar() {
    return (
      <nav className="flex flex-col justify-start self-start items-start pl-4 p-4 border border-l-0 border-slate-300 bg-slate-100 w-[220px]">
        <h1 className="pt-4 font-semibold text-lg mb-8">Add New</h1>
        <h3 className="border-b-4 border-b-violet-600">Elements</h3>
        <div>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger className="gap-24">Typography</AccordionTrigger>
            <AccordionContent className="flex flex-row justify-around items-center">
                    <Button className="w-[80px]" variant={"outline"}>
                        <HeadingIcon></HeadingIcon>
                    </Button>
                    <Button className="w-[80px]" variant={"outline"}>
                        <LetterText></LetterText>
                    </Button>
            </AccordionContent>
            </AccordionItem>
            </Accordion>

        </div>
      </nav>
    );
  }