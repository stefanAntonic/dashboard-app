export const handleActiveText = (clickedEvent) => {
        const clickedElement = document.getElementById(clickedEvent.target.id)
        const elements = Array.from(document.getElementsByClassName("tab"));
        elements.forEach((element) => {
          if (clickedEvent.target.id !== element.id) {
            element.classList.remove(
              "text-[#F06021]",
              "border-[#F06021]",
              "tab-bordered"
            );
          }
        });
        
        clickedElement.classList.add("text-[#F06021]", "border-[#F06021]", "tab-bordered");
    
}

 