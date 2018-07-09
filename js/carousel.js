        document.addEventListener('DOMContentLoaded',()=>{
            /*
                1）设置ul宽度，达到水平排列的效果
                2）水平轮播效果
                3）移入移出，清除轮播效果
                4）添加分页效果
                    * 点击分页切换
                5）无缝滚动
                    * 把第一张复制到最后
                    * 当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1

                6）添加前后按钮，实现上一张、下一张的效果（待完成...）
             */
            
            let banner = document.getElementsByClassName('banner')[0];
            let ul =banner.children[0];

            /**复制第一张图片到最后 
            *cloneNode() 方法可创建指定的节点的精确拷贝。
            *cloneNode() 方法 拷贝所有属性和值。
            *该方法将复制并返回调用它的节点的副本。如果传递给它的参数是 *true，它还将递归复制当前节点的所有子孙节点。否则，它只复制当前节点。
            **/
            ul.appendChild(ul.children[0].cloneNode(true));

            /*  图片的数量 */
            let len = ul.children.length;

            // 索引值
            let index = 0;

            // 显示分页
            let page = document.createElement('div');
            page.className = 'page';
            for(let i=1;i<len;i++){
                let span = document.createElement('span');
                span.innerText = i;
                if(i===1){
                    span.classList.add('active');
                }

                // 把页码写入page
                page.appendChild(span);
            }

            // 把page写入focus
            banner.appendChild(page);


            // 获取图片的宽度
            let imgWidth;
            ul.querySelector('img').onload = function(){
                imgWidth = this.offsetWidth;

                // 1）设置ul宽度，达到水平排列的效果
                ul.style.width = imgWidth*len + 'px';
                
            }

            // 2）水平轮播效果
            let timer = setInterval(autoPlay,2000);


            // 移入移出 onmouseenter 事件在鼠标指针移动到元素上时触发。
            banner.onmouseenter = ()=>{
                clearInterval(timer);
            }

            banner.onmouseleave = ()=>{
                timer = setInterval(autoPlay,3000);
            }

            // 点击分页切换
            banner.onclick = e=>{
                if(e.target.parentNode.className === 'page'){
                    index = e.target.innerText-1;

                    show();
                }
            }


            function autoPlay(){
                index++;

                show();
            }


            function show(){
                if(index >= len){//0,1,2,3,4
                    ul.style.left = 0;
                    index = 1;
                }

                animate(ul,{left:-imgWidth*index});

                // 页码高亮
                for(let i=0;i<len-1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(index === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[index].className = 'active'
                }
            }
            
        })