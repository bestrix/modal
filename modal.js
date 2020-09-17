//проблема с линками 
// названия
//на git


//генератор страницы
class modal{
    constructor({main,cancel,link,btn,input}){
        this.isOpen = true;
        this.arr = [];
        this.main = document.querySelector(main)
        this.cancel = document.querySelector(cancel)
        this.link = document.querySelectorAll(link)
        this.btn = document.querySelector(btn)
        this.input = document.querySelector(input)
    }

    pushArr(){ 
        if(input.value != ''){this.arr.push(input.value.trim().toUpperCase());input.value = '';}
    }

    manageWindowsKey(){
        window.addEventListener('keydown',(e) => {
            if(e.code == "Backquote" && this.isOpen){
                this.close()
            }else if(e.code == "Backquote" && !this.isOpen){
                this.open()
            }
        })
       
    }


    isLink(){
        window.addEventListener('click',(e)=>{
            let res = false;
            for(let i = 0; i < this.link.length;i++){
                if(e.target == this.link[i]){
                    res = true;
                }
            }
            res ? this.isLinks = true : this.isLinks = false;
        });
    }
    manageWindowsClick(){
        this.cancel.addEventListener('click',this.close.bind(this))
        this.link.forEach(element => {
            element.addEventListener('click',this.open.bind(this))
        });
        this.btn.addEventListener('click',this.pushArr.bind(this))
    }

    manageWindowsClickOnWindows(){
        window.addEventListener('click',(e) => {
            
            if( !this.main.contains(e.target) && this.isOpen ){
                for(let i = 0; i < this.link.length;i++){
                    if(e.target == this.link[i]){
                        return
                    }
                }
                this.close();
            }
        })

    }

    close(){
        this.main.style.opacity = '0';
        this.main.style.transform = 'rotate3d(1, 0, 0, 90deg)'
        this.main.style.top = '-200px'
        this.isOpen = false
    }

    open(){
        this.main.style.opacity = '1';
        this.main.style.transform = 'rotate3d(1, 0, 0, 0deg)'
        this.main.style.top = '50px'
        this.isOpen = true
    }

    init(){
        this.manageWindowsClickOnWindows()
        this.manageWindowsKey()
        this.manageWindowsClick()
        this.pushArr()
    }
}




