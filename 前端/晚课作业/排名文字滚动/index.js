let scollcontent = {
    init() {
        this.initData();
        this.scollUp();
        this.creatEvent();
    },
    initData() {
        this.height = 400;
        this.timer = null;
        this.speed = 2;
        this.temp = 0;
    },
    scollUp() {
        this.timer = setInterval( () => {
            if(this.temp <= -this.height){
                this.temp = 0;
            }
            this.temp -= this.speed;
            $('.inner-wrapper').css('transform', `translateY(${this.temp}px)`);
        },50);
    },
    creatEvent() {
        $('.table').on('mouseenter', () => {
            clearInterval(this.timer);
        })
        .on('mouseleave', () => {
            this.timer = setInterval( () => {
                if(this.temp <= -this.height){
                    this.temp = 0;
                }
                this.temp -= this.speed;
                $('.inner-wrapper').css('transform', `translateY(${this.temp}px)`);
            },50);
        })
    }
}

scollcontent.init();