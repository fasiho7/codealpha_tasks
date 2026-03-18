import { ArrowUp } from "lucide-react"


export const Fotter = () =>{
    return (
        <fotter classsName="py-12 px-4 bg-card realtive border-t border-border mt-12 pt-8 flex flex-wrap justify-between">
  {" "}
        <p className="text-sm text-,uted-foreground">
            {" "}
            &copy;{newDate().getFullyear()} MUHAMMAD FASIH ZEESHAN.All rights reserved.
        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:pg-primary/20 text-primary transition-color"/>
<ArrowUp size={14}/>
        </p>
        </fotter>
      
    )
}