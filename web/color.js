            
            var target = document.querySelector('body');
            var Body = {
                setColor: function (color) {
                    $('body').css('color',color);
                },
                setBackgroundColor: function (color) {
                    $('body').css('background',color);
                }
            }

            var Links = {
                setColor: function (color) {
                    // var alist = document.querySelectorAll('a');
                    // // var i = 0;
                    // // while (i < alist.length) {
                    // //     alist[i].style.color = color;
                    // //     i = i + 1;
                    // // }
                    // for(i=0; i < alist.length; i++){
                    //     alist[i].style.color = color;
                    // }
                    $('a').css('color',color);
                }
            }

            


            function nightDayHandler(self) {
                // var target = document.querySelector('body');
                // <!-- 아래 value는 input 버튼에서 받아오는 value를 의미함 -->
                if (self.value === 'night') {
                    //target.style.backgroundColor = 'black';
                    // target.style.color = 'white';
                    self.value = 'day'

                    // var alist = document.querySelectorAll('a');
                    // var i = 0;
                    // while ( i < alist.length) {
                    //     alist[i].style.color = 'blue';
                    //     console.log(alist[i]);
                    //     i = i + 1;
                    // } 

                    //중복되는 라인을 함수로 정의하면서 코드를 간소화함
                    
                    Body.setBackgroundColor('black');
                    Body.setColor('white');
                    Links.setColor('powderblue');

                } else {
                    // target.style.backgroundColor = 'white';
                    // target.style.color = 'black';
                    self.value = 'night'

                    // var alist = document.querySelectorAll('a');
                    // var i = 0;
                    // while ( i < alist.length) {
                    //     alist[i].style.color = 'blue';
                    //     console.log(alist[i]);
                    //     i = i + 1;
                    // }

                    Body.setBackgroundColor('white');
                    Body.setColor('black');
                    Links.setColor('blue');

                }
            }

            // function linkedSetColor(color) {
            //     var alist = document.querySelectorAll('a');
            //     var i = 0;
            //     while (i < alist.length) {
            //         alist[i].style.color = color;
            //         console.log(alist[i]);
            //         i = i + 1;
            //         }
            // }

            // function bodySetColor(color){
            //     document.querySelector('body').style.color=color;
            // }

            // function bodySetBackground(color){
            //     document.querySelector('body').style.backgroundColor=color;
            // }
            //중복되는 라인을 함수로 정의하면서 코드를 간소화함

            /**
            *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
            *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
            /*
            var disqus_config = function () {
            this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            */
            (function () { // DON'T EDIT BELOW THIS LINE
                var d = document,
                    s = d.createElement('script');
                s.src = 'https://web-3210.disqus.com/embed.js';
                s.setAttribute('data-timestamp', + new Date());
                (d.head || d.body).appendChild(s);
            })();

            type="text/javascript"
            var Tawk_API = Tawk_API || {},
                Tawk_LoadStart = new Date();
            (function () {
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/624fad5dc72df874911dfa1f/1g03jqdav';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0
                    .parentNode
                    .insertBefore(s1, s0);
            })();

            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-TTHNWDQG5J');