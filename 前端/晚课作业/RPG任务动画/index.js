let rpg = {
    data: {
        timer: null,
        nameArr: ['lu', 'up', 'rightUp', 'left', 'stop', 'right', 'ld', 'down', 'rd'],
        speed: 10,
        page: 0,//第几张图片
        lastdirection: 'down',
    },
    init() {
        this.initData();
        this.directions();
        this.clickbutton();
    },
    initData() {
        this.$img = $('img');
    },
    // 定时器
    annimate(direction) {
        this.data.timer = setInterval(() => {
            //调整图片
            this.data.page++;
            if(this.data.page === 5) this.data.page = 1;
            // console.log(`${direction}-${this.data.page}.png`);
            $('img').attr('src', `./image/${direction}-${this.data.page}.png`);
            //调整方向
            switch(direction){
                case 'left':
                    this.$img.css('left', `${parseInt(this.$img.css('left')) - this.data.speed}px`);
                    break;
                case 'right': 
                    this.$img.css('left', `${parseInt(this.$img.css('left')) + this.data.speed}px`);
                    break;
                case 'up':
                    this.$img.css('top', `${parseInt(this.$img.css('top')) - this.data.speed}px`);
                    break;
                case 'down':
                    this.$img.css('top', `${parseInt(this.$img.css('top')) + this.data.speed}px`);
                    break;
                case 'lu':
                    this.$img.css('left', `${parseInt(this.$img.css('left')) - this.data.speed}px`);
                    this.$img.css('top', `${parseInt(this.$img.css('top')) - this.data.speed}px`);
                    break;
                case 'rightUp':
                    this.$img.css('left', `${parseInt(this.$img.css('left')) + this.data.speed}px`);
                    this.$img.css('top', `${parseInt(this.$img.css('top')) - this.data.speed}px`);
                    break;
                case 'ld':
                    this.$img.css('left', `${parseInt(this.$img.css('left')) - this.data.speed}px`);
                    this.$img.css('top', `${parseInt(this.$img.css('top')) + this.data.speed}px`);
                    break;
                case 'rd':
                    this.$img.css('left', `${parseInt(this.$img.css('left')) + this.data.speed}px`);
                    this.$img.css('top', `${parseInt(this.$img.css('top')) + this.data.speed}px`);
                    break;
            }
        }, 100)
    },
    // 获取方向
    directions() {
        $('.buttons').on('click', (e) => {
            clearInterval(this.data.timer);
            let directionNum = $(e.target).attr('direction');
            if(directionNum){
                let direction = this.data.nameArr[directionNum];
                if(direction != 'stop'){
                    this.annimate(direction);
                    this.data.lastdirection = direction;
                }else{
                    $('img').attr('src', `./image/${this.data.lastdirection}-0.png`);
                }
            }
        })
    },
    clickbutton() {
        $('button').on('mousedown', function () {
            $(this).css({
                'backgroundColor': '#000',
            })
        }).on('mouseup', function () {
            $(this).css({
                'backgroundColor': '#f40'
            })
        })
    }
}

rpg.init();