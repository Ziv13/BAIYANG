window.onload = function(){
            var toTop = document.getElementById('toTop');

            window.onscroll = function(){
                var scrollTop = window.scrollY;}

            // 点击返回顶部
            toTop.onclick = function(){

                var timer = setInterval(function(){
                    
                    // var scrollTop = window.scrollY;

                    // scrollTop -=1000;

                    // if(scrollTop <= 0){
                    //  scrollTop = 0;

                    //  clearInterval(timer);
                    // }

                    // scrollTo(0,scrollTop);
                    

                    /*
                        先快后慢的效果
                     */
                    // 计算滚动速度
                    var speed = parseInt(window.scrollY/5);

                    if(window.scrollY <= 10){
                        speed = 0;
                        clearInterval(timer);
                    }


                    scrollBy(0,-speed);

                },30)
            }
        }